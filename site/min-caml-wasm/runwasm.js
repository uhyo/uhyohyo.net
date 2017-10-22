'use strict';
if ('object' !== typeof WebAssembly){
    console.error('runwasm.js: WebAssembly object is undefined.');
}

(function(global, f){
    if ('object' === typeof exports){
        f(exports);
    } else{
        f(global.LibMinCaml = (global.LibMinCaml || {}));
    }
})(this, function(exports){
    // writer
    exports.Writer = (()=>{
        class Writer{
            constructor(){
                this.buf = '';
            }
            write(char){
                this.buf += String.fromCharCode(char);
            }
        }

        return Writer;
    })();
    // main
    exports.main = ()=>{
        const status = document.getElementById('status');
        const log = (str)=>{
            status.insertAdjacentHTML('beforeend', `<p>${str}</p>`);
        };
        let measureid = 1;
        const mark = (name)=>{
            performance.mark(name);
        };
        const measure = (start, end)=>{
            const id = `measure${measureid++}`;
            performance.measure(id, start, end);
            return performance.getEntriesByName(id)[0].duration.toFixed(3);
        };
        // クリア
        status.textContent = '';
        
        log('ダウンロード中');
        mark('downloadStart');
        Promise.all([
            fetch('min-rt.wasm').then(res=>res.arrayBuffer()),
            fetch('contest.sld').then(res=>res.arrayBuffer())
            .then(buf=> new Uint8Array(buf)),
        ])
        .then(([code, data])=>{
            mark('downloadEnd');
            log(`ダウンロード完了 (${measure('downloadStart', 'downloadEnd')} ms)`);

            const writer = new LibMinCaml.Writer();

            const importObject = LibMinCaml.make(data, writer);
            log('実行中');
            mark('runStart');
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(WebAssembly.instantiate(code, importObject)
                            .then(()=>writer));
                }, 0);
            });
        })
        .then(writer=>{
            mark('runEnd');
            log(`実行完了 (${measure('runStart', 'runEnd')} ms)`);
            const canvas = LibMinCaml.paintPPM(writer.buf);
            const p = document.createElement('p');
            p.appendChild(canvas);
            status.appendChild(p);
        })
        .catch(err=>{
            console.error(err);
            log('エラー');
        });
    };
});
