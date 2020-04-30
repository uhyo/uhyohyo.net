// game_paper.html 用拡張
CanvasMasao.Paper = (function(){
    var Paper = {};

    // スクロール起点
    const centerInit = 82 * 32;
    let center = 82 * 32;
    let isUp = false;
    // エリア境界
    let rightFlag = false;
    const leftAreaEdge = 40;
    const rightAreaEdge = 105;


    Paper.inject = function(mc, options){
        var _ui = mc.userInit, _us = mc.userSub;

        mc.userInit = function(){
            _ui.apply(mc);

            // os2_img再作成
            mc.gg.os2_img = mc.createImage(mc.gg.di.width * 2 + 96, mc.gg.di.height + 96);
            mc.gg.os2_g = mc.gg.os2_img.getGraphics();

            // 初期化時のスクロール範囲設定
            const init3 = mc.mp.init3;
            mc.mp.init3 = function() {
                init3.apply(this);
                // this.setScrollAreaReal(32, 320 + 20 * 32, 32 + 164 * 32, 320 + 20 * 32);
                this.maps.wx_mini = 32;
                this.maps.wx_max = 32 + 164 * 32;
                this.maps.wy_mini = 320 + 20 * 32;
                this.maps.wy_max = 320 + 20 * 32;
                center = centerInit;
                rightFlag = false;
                isUp = false;
            }

            const { drawGameScreen, drawGameScreenJSS } = CanvasMasao;
            mc.mp.drawGamescreen = function() {
                drawGameScreen.drawGamescreen.call(this, ()=> {
                    const {wx, wy} = this.maps;
                    const sc_x = wx - 32;
                    const sc_y = wy - 960;

                    if (sc_x < leftAreaEdge * 40) {
                        return;
                    }

                    const { width } = this.gg.di;
                    const tmpWxRaw = 32 + (sc_x - center) * (isUp ? 0.5 : 1.5) + center;
                    const tmpWx = rightFlag ? Math.max(tmpWxRaw, 105 * 32) : Math.min(tmpWxRaw, 105 * 32);
                    this.maps.wx = Math.min(168 * 32 - width * 2, Math.max(32, tmpWx)) | 0;
                    this.maps.wy = 320;
                    this.gg.di.width = width * 2;
                    this.gg.os_g._ctx.save();
                    this.gg.os_g._ctx.scale(0.5, 0.5);
                    this.gg.os_g._ctx.translate(0, -sc_y * 2);
                    this.maps.drawMapLayer(this.maps.wx, this.maps.wy, this.g_ac2, this.gazou_scroll, 4);
                    this.maps.drawMapLayer(this.maps.wx, this.maps.wy, this.g_ac2, this.gazou_scroll, 3);
                    drawGameScreenJSS.drawGamescreenEnemy.apply(this);
                    drawGameScreen.drawA.apply(this);
                    drawGameScreen.drawM.apply(this);
                    if (this.co_j.y < 640) {
                        drawGameScreen.drawGamescreenMy.apply(this);
                    }
                    this.maps.wx = wx;
                    this.maps.wy = wy;
                    this.gg.di.width = width;
                    this.gg.os_g._ctx.restore()
                });
            }
        };
        mc.userSub = function(){
            _us.apply(mc, arguments);
            const isRight = mc.mp.co_j.x >= rightAreaEdge * 32;
            const nIsUp = mc.mp.co_j.y < 640;
            const sc_x = mc.mp.maps.wx - 32;

            if (!rightFlag && isRight) {
                // left -> right
                center = 130 * 32;
                rightFlag = true;
                console.log("rightFlag")
            }

            if (isUp !== nIsUp) {
                // (sc_x - center) * 1.5 + center == (sc_x - nCenter) * 0.5 + nCenter
                // 1.5sc_x - 0.5center == 0.5sc_x + 0.5nCenter
                // nCenter = 2sc_x -center
                center = 2 * sc_x - center;
            }
            isUp = nIsUp;
        };
    };

    return Paper;
})();
