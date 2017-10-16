'use strict';
// JavaScript講座用のextension
const path = require('path');
const fs = require('fs');
const escape = require('escape-html');
module.exports = (context)=>{
    context.addPostLoadFileHook((context, filename, data)=>{
        // 講座ページは{ }を使えるようにアレする
        const rel = path.relative(context.projdir, filename).replace(path.sep, '/');
        if (/^site\/javascript\/(?:kiso|qa|\d+_)\d+\.dust$/.test(rel)){
            // 属性
            let attrs = '';
            // ページ名を抽出
            const r1 = data.match(/^page_title:\s*(\S+)\s*/);
            if (r1 != null){
                data = data.slice(r1[0].length);
                // ページ名あった
                attrs += ` page_title="${r1[1]}"`;
            }
            // ページの説明を生成
            const description = escape(generateDescription(data));
            attrs += ` twitter_description="${description}"`;

            // 講座ページ
            const hd1 = `{>"$PROJ/templates/javascript.dust" ${attrs}/}`;
            const header = `${hd1}
{<js_content}
`;
            const footer = `{/js_content}
`;
            // { と } をdust用にエスケープ
            const body = data.replace(/\{|\}/g, (br=> br === '{' ? '{~lb}' : '{~rb}'));
            return header + body + footer;
        }
        return null;
    });
    context.addPreRenderHook((context, filename, data)=>{
        const ext = path.extname(filename);
        if (ext !== '.dust'){
            return;
        }
        const rel = path.relative(context.projdir, filename).split(path.sep).join('/');
        let back_link = null;
        if (rel !== 'site/javascript/index.dust'){
            back_link = '<a href="./index.html" rel="contents">戻る</a>';
        }
        let prev_link = null;
        let next_link = null;
        let page_title = null;
        let r = rel.match(/^site\/javascript\/(\d+)_(\d+)\.dust$/);
        if (r != null){
            const section = parseInt(r[1]);
            const page = parseInt(r[2]);
            page_title = pageNumber(section, page) + '　' + pageTitle(data, section, page);;
            // 前を検出
            if (page > 1){
                const t = pageNumber(section, page-1);
                prev_link = `<a rel="prev" href="./${section}_${page-1}.html" title="${t}　${pageTitle(data, section, page-1)}">${t}</a>`;
            } else if (section > 1){
                // 前章の最終を探す
                let i = 1;
                while (data.js.page[`${section-1}_${i}`]){
                    i++;
                }
                i--;
                if (i >= 1){
                    const t = pageNumber(section-1, i);
                    prev_link = `<a rel="prev" href="./${section-1}_${i}.html" title="${t}　${pageTitle(data, section-1, i)}">${t}</a>`;
                }
            }
            // 後を検出
            if (data.js.page[`${section}_${page+1}`]) {
                const t = pageNumber(section, page+1);
                next_link = `<a rel="next" href="./${section}_${page+1}.html" title="${t}　${pageTitle(data, section, page+1)}">${t}</a>`;
            } else if (data.js.page[`${section+1}_1`]) {
                const t = pageNumber(section+1, 1);
                next_link = `<a rel="next" href="./${section+1}_1.html" title="${t}　${pageTitle(data, section+1, 1)}">${t}</a>`;
            }
        }else{
            r = rel.match(/^site\/javascript\/kiso(\d+)\.dust$/);
            if (r != null){
                const page = parseInt(r[1]);
                page_title = pageNumber('基礎', page);
                if (data.js.page[`kiso${page}`] != null){
                    page_title += "　" + data.js.page[`kiso${page}`];
                }
                back_link = '<a href="./index.html" rel="contents">戻る</a>';
                if (page > 1){
                    prev_link = `<a rel="prev" href="./kiso${page-1}.html">${pageNumber('基礎', page-1)}</a>`;
                }
                try {
                    // file existing check
                    fs.accessSync(path.resolve(context.projdir, `site/javascript/kiso${page+1}.dust`), fs.F_OK);
                    next_link = `<a rel="next" href="./kiso${page+1}.html">${pageNumber('基礎', page+1)}</a>`;
                } catch(e){
                }
            }
        }

        const navlinks = [back_link, prev_link, next_link].filter(s=>s).join(' ｜ ');
        data.navlinks = navlinks;

        // ファイルの最終更新日
        try {
            const {
               mtime,
            } = fs.statSync(filename);
            const datetime = mtime.toISOString();
            //人間に読みやすい
            const last_modified = `このページの最終更新日：<time itemprop="dateModified" datetime="${datetime}">${mtime.getFullYear()}年${mtime.getMonth()+1}月${mtime.getDate()}日</time>`;
            data.last_modified = last_modified;
        } catch(e){
        }

        if (page_title != null){
            data.page_title = page_title;
        }
        return {
            data,
        };
    });
    // 一部のページで使うためのhelper
    const {
        dust,
    } = context.getRenderer('dummy.dust');
    dust.helpers.listJSPages = (chunk, context, bodies, params)=>{
        const section = parseInt(params.section, 10);
        if (Number.isNaN(section)){
            dust.log('WARN', `illegal section number passed to listPages: ${params.section}`);
            return chunk;
        }
        // olとliでrender
        let str = '<ol>';
        const prefix = `js.page.${section}_`;
        let i = 1;
        let val;
        while (val = context.get(`${prefix}${i}`)){
            str += `<li><a href="${section}_${i}.html">${val}</a></li>`;
            i++;
        }
        str += '</ol>';
        chunk.write(str);
        return chunk;
    };
};

function pageNumber(section, page){
    if ('number' === typeof section){
        return `${kanji(section)}章第${kanji(page)}回`;
    }else{
        return `${section}第${kanji(page)}回`;
    }
}
function pageTitle(data, section, page){
    const n = data.js.page[`${section}_${page}`];
    if (n != null){
        return n || '';
    } else {
        `${section}第${kanji(page)}回`;
    }
}
function kanji(num){
    if (num === 0){
        return "零";
    }
    let result = '';
    if (num >= 100){
        if (num >= 200){
            result += kanji(Math.floor(num/100));
        }
        result += '百';
        num = num % 100;
    }
    if (num >= 10){
        if (num >= 20){
            result += kanji(Math.floor(num/10));
        }
        result += '十';
        num = num % 10;
    }
    switch (num){
        case 1: {
            result += '一';
            break;
        }
        case 2: {
            result += '二';
            break;
        }
        case 3: {
            result += '三';
            break;
        }
        case 4: {
            result += '四';
            break;
        }
        case 5: {
            result += '五';
            break;
        }
        case 6: {
            result += '六';
            break;
        }
        case 7: {
            result += '七';
            break;
        }
        case 8: {
            result += '八';
            break;
        }
        case 9: {
            result += '九';
            break;
        }
    }
    return result;
}

function generateDescription(data){
    // 適当に抜き出す
    let pre = data.slice(0, 400);
    // 見出しを削除
    pre = pre.replace(/<h([1-6])>.+?<\/h\1>/g, '');
    // HTMLタグをざっくり削除
    pre = pre.replace(/<.+?\>/g, '');
    // 改行を消す
    pre = pre.replace(/^\s*|\s*$/, '');
    pre = pre.replace(/(?:\r|\n)+/g, ' ');
    // 160文字くらい
    return pre.slice(0, 160) + '……';
}
