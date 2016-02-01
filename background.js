/**
 * Created by Jia van on 2016/1/28.
 */
chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('./x.md/core/index.html', {
        outerBounds: {
            width: 700,
            height: 500
        },
        frame: 'none'
    });
});