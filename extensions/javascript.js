'use strict';
// JavaScript講座用のextension
const path = require('path');
const fs = require('fs');
module.exports = (context)=>{
    context.addPostLoadFileHook((context, filename, data)=>{
        // 講座ページは{ }を使えるようにアレする
        const rel = path.relative(context.projdir, filename).replace(path.sep, '/');
        if (/^site\/javascript\/(?:kiso|\d+_)\d+\.dust$/.test(rel)){
            // ページ名を抽出
            const r1 = data.match(/^page_title:\s*(\S+)\s*/);
            let page_title = null;
            if (r1 != null){
                page_title = r1[1];
                data = data.slice(data[0].length);
            }
            // 講座ページ
            const hd1 = page_title != null ?
                `{>"$PROJ/templates/javascript.dust" /}` :
                `{>"$PROJ/templates/javascript.dust" page_title="${page_title}" /}`;
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
        const rel = path.relative(context.projdir, filename).split(path.sep).join('/');
        let r = rel.match(/^site\/javascript\/(\d+)_(\d+)\.dust$/);
        let back_link = null;
        let prev_link = null;
        let next_link = null;
        let page_title = null;
        if (r != null){
            const section = parseInt(r[1]);
            const page = parseInt(r[2]);
            page_title = pageTitle(section, page);
            if (data.js.page[`${section}_${page}`] != null){
                page_title += "　" + data.js.page[`${section}_${page}`];
            }
            back_link = '<a href="./index.html">戻る</a>';
            // 前を検出
            if (page > 1){
                prev_link = `<a rel="prev" href="./${section}_${page-1}.html">${pageTitle(section, page-1)}</a>`;
            }
            // 後を検出
            try {
                // file existing check
                fs.accessSync(path.resolve(context.projdir, `site/javascript/${section}_${page+1}.dust`), fs.F_OK);
                next_link = `<a rel="next" href="./${section}_${page+1}.html">${pageTitle(section, page+1)}</a>`;
            } catch(e){
            }
        }else{
            r = rel.match(/^site\/javascript\/kiso(\d+)\.dust$/);
            if (r != null){
                const page = parseInt(r[1]);
                page_title = pageTitle('基礎', page);
                if (data.js.page[`kiso${page}`] != null){
                    page_title += "　" + data.js.page[`kiso${page}`];
                }
                back_link = '<a href="./index.html">戻る</a>';
                if (page > 1){
                    prev_link = `<a rel="prev" href="./kiso${page-1}.html">${pageTitle('基礎', page-1)}</a>`;
                }
                try {
                    // file existing check
                    fs.accessSync(path.resolve(context.projdir, `site/javascript/kiso${page+1}.dust`), fs.F_OK);
                    next_link = `<a rel="next" href="./kiso${page+1}.html">${pageTitle('基礎', page+1)}</a>`;
                } catch(e){
                }
            }
        }

        const navlinks = [back_link, prev_link, next_link].filter(s=>s).join(' ｜ ');
        data.navlinks = navlinks;
        data.page_title = page_title;
        return {
            data,
        };
    });
};

function pageTitle(section, page){
    if ('number' === typeof section){
        return `${kanji(section)}章第${kanji(page)}回`;
    }else{
        return `${section}第${kanji(page)}回`;
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