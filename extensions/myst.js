'use strict';
const myst = require('my-static');
module.exports = (context)=>{
    context.addUnknownExtensionHook((context, ext)=>{
        // 任意のextensionを許可
        // だけどvimのswap fileはだめ (TODO)
        if (/\.sw[op]$/.test(ext)){
            return null;
        }
        return myst.renderUtil.makeStaticRenderer(context);
    });
};
