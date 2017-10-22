'use strict';
(function(global, f){
    if ('object' === typeof exports){
        f(exports);
    } else{
        f(global.LibMinCaml = (global.LibMinCaml || {}));
    }
})(this, function(exports){
    // tokenizer
    function* tokenize(str){
        const reg = /(\S+)\s*/g;
        let result;
        while (result = reg.exec(str)){
            yield result[1];
        }
    }
    // PPM (P3) parser.
    exports.paintPPM = (str)=>{
        let state = 0;
        let width, height, canvas, ctx, data;
        let idx = 0;
        for (const t of tokenize(str)){
            if (state === 0){
                if (t === 'P3'){
                    state = 1;
                    continue;
                } else {
                    throw new Error(`Parse error at token '${t}'`);
                }
            }
            const num = parseInt(t, 10);
            if(Number.isNaN(num)){
                throw new Error(`Parse error at token '${t}'`);
            }
            if (state === 1){
                width = num;
                state++;
            } else if (state === 2){
                height = num;
                state++;
            } else if (state === 3){
                if (num !== 255){
                    throw new Error(`Parse error at token '${t}'`);
                }
                state++;

                canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');
                data = ctx.createImageData(width, height);
            } else if (state === 4){
                data.data[idx++] = num;
                state++;
            } else if (state === 5){
                data.data[idx++] = num;
                state++;
            } else if (state === 6){
                data.data[idx++] = num;
                data.data[idx++] = 255;
                state = 4;
            }
        }
        ctx.putImageData(data, 0, 0);
        return canvas;
    };
});

