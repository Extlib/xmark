/**
 * Created by Jia van on 2016/2/1.
 */
var currentWindow = chrome.app.window.current();
currentWindow.onBoundsChanged.addListener(function () {
    try {
        xmarkEditor.resize(currentWindow.getBounds().width, currentWindow.getBounds().height - 21);
    } catch (ex) {
        throw ex;
    }
});

document.getElementById('close').onclick = function() {
    currentWindow.close();
};
document.getElementById('fullscreen').onclick = function() {
  currentWindow.isFullscreen()?currentWindow.restore():currentWindow.fullscreen();
};
document.getElementById('minimize').onclick = function() {
  currentWindow.minimize();
};