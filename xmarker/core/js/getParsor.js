/**
 * Created by Jia van on 2016/1/31.
 */
var xmarkEditor;

$(function() {
    xmarkEditor = editormd("xmark", {
        width   : "100%",
        height  : 480,
        syncScrolling : "single",
        path    : "../lib/"
    });
});