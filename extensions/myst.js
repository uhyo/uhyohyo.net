'use strict';
const myst = require('my-static');
const minify = require('html-minifier').minify;
module.exports = (context)=>{
    context.addUnknownExtensionHook((context, ext)=>{
        // 任意のextensionを許可
        // だけどvimのswap fileはだめ (TODO)
        if (/\.sw[op]$/.test(ext)){
            return null;
        }
        return myst.renderUtil.makeStaticRenderer(context);
    });
    // HTMLをminify
    context.addPostRenderHook((context, content, target)=>{
        if (!/\.html$/.test(target) || /javascript\/.*sample/.test(target)){
            return content;
        }
        return minify(String(content), {
            collapseWhitespace: true,
        });
    });
};
