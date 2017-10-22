'use strict';
(function(global, f){
    if ('object' === typeof exports){
        f(exports);
    } else{
        f(global.LibMinCaml = (global.LibMinCaml || {}));
    }
})(this, function(exports){
    // Library
    exports.make = (inputbuf)=>{
        let bufidx = 0;
        return {
            lib: {
                min_caml_atan(x){
                    return Math.atan(x);
                },
                min_caml_cos(x){
                    return Math.cos(x);
                },
                min_caml_sin(x){
                    return Math.sin(x);
                },
                min_caml_print_char(x){
                    process.stdout.write(String.fromCharCode(x));
                },
                min_caml_read_char(x){
                    // console.error('Hey!', bufidx);
                    return inputbuf[bufidx++];
                },
                min_caml_debug(x){
                    console.error('Debug', x);
                    return;
                },
            },
        };
    };
});
