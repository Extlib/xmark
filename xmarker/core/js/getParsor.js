/**
 * Created by Jia van on 2016/1/31.
 */
var xmarkEditor;

$(function() {
    xmarkEditor = editormd("xmark", {
        width   : "100%",
        height  : 478,
        syncScrolling : "single",
        path    : "../lib/",
        onload: function() {
            /**
             * add keymap example
             * @type {{Ctrl-S: keyMap.'Ctrl-S'}}
             */
            var keyMap = {
                'Ctrl-S': function() {
                    console.log('ctrl-s');
                }
            };
            this.addKeyMap(keyMap);
        },
        resize: function() {
            xmarkEditor.resize(currentWindow.getBounds().width, currentWindow.getBounds().height - 21);
        }
        /*toolbarIcons : function() {
            return ["undo", "redo", "|", "bold", "hr", "|", "preview", "watch", "|", "fullscreen", "info", "testIcon", "testIcon2", "file", "faicon", "||", "watch", "fullscreen", "preview", "testIcon"]
        }*/
    });
    xmarkEditor.hideToolbar();
});

