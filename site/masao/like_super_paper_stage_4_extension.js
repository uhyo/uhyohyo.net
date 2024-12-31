// game_super_paper_masao_stage4.html 用拡張
CanvasMasao.SuperPaper4 = (function(){
    var SuperPaper4 = {};
    SuperPaper4.inject = function(mc, options){
        var _ui = mc.userInit, _us = mc.userSub;

        mc.userInit = function(){
            _ui.apply(mc);

            const { drawGameScreen } = CanvasMasao;
            mc.mp.drawGamescreen = function() {
                const myx = this.co_j.x;
                const shouldFlip = 60*32 <= myx && myx <= 140*32;
                this.gg.os_g._ctx.save();
                if (shouldFlip) {
                    this.gg.os_g._ctx.translate(0, 160);
                    this.gg.os_g._ctx.scale(1, -1);
                    this.gg.os_g._ctx.translate(0, -160);
                }
                drawGameScreen.drawGamescreen.call(this, ()=> {});
                this.gg.os_g._ctx.restore();
            }
        };
    };

    return SuperPaper4;
})();
