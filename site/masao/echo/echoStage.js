var userJSCallback = (()=>{
    let isInCave = true;
    return function userJSCallback(mc, mode, viewx, viewy, app) {
        if (mode !== 101) {
            return;
        }
        if (viewx >= 40 * 32 && !isInCave) {
            isInCave = true;
            app.setBackImage('./echo/haikei_cave.gif');
            app.setEcho(true);
        } else if (viewx < 40 * 32 && isInCave) {
            isInCave = false;
            app.setBackImage('./haikei.gif');
            app.setEcho(false);
        }
    }
})();