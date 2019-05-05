// canvas正男反響拡張
CanvasMasao.Echo = (()=>{
    const delay = [0.3, 0.6, 0.9];
    const muteTime = 1.2;
    const Echo = {
        inject: (mc, options)=> {
            const _ui = mc.userInit;
            let irBuffer = void 0;
            let useEcho = false;
            mc.userInit = function() {
                _ui.apply(mc);

                const gs = mc.gs;
                if(!(gs.context instanceof AudioContext)) {
                    // AudioContextを使ってなさそうなのでやめる
                    return;
                }
                const convolver = gs.context.createConvolver();
                // Convolver用のIRを取得
                fetch(options.echo_ir)
                    .then(async res => {
                        const buf = await res.arrayBuffer();
                        return new Promise((resolve, reject) =>
                            gs.context.decodeAudioData(buf, resolve, reject));
                    })
                    .then(buf => {
                        irBuffer = buf;
                        convolver.buffer = irBuffer;
                        convolver.connect(gs.dest);
                    })
                    .catch(console.error);

                // MasaoJSSに勝手にメソッドを生やす
                if (mc.masaoJSSAppletEmulator != null) {
                    mc.masaoJSSAppletEmulator.setEcho = flag => {
                        useEcho = flag;
                    }
                }

                const _play = gs.play;
                gs.play = function(paramInt) {
                    _play.call(gs, paramInt);
                    const source = this.sourceNodes[paramInt];
                    if (convolver != null && source != null && useEcho) {
                        // 反響を追加
                        source.disconnect();
                        source.connect(convolver);
                        for (const d of delay) {
                            const gainNode = this.context.createGain();
                            const p = (muteTime - d) / muteTime;
                            gainNode.gain.value = p ** 2;
                            gainNode.connect(convolver);
                            // ディレイを追加
                            const delayNode = this.context.createDelay(muteTime);
                            delayNode.delayTime.value = d;
                            delayNode.connect(gainNode);
                            // convolver.connect(delayNode);
                            source.connect(delayNode);
                        }
                    }
                }
            }
        },
    };
    return Echo;
})();