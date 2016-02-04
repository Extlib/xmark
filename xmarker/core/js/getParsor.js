/**
 * Created by Jia van on 2016/1/31.
 */
var xmarkEditor,
    setObj = {},
    getObj = {};

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
                    //console.log(xmarkEditor.getMarkdown());
                    //save to local storage
                    setObj = {
                        markdown: xmarkEditor.getMarkdown()
                    };
                    chrome.storage.local.set(setObj, function() {
                        //callback function
                        console.log('save data success');
                        console.log(setObj.markdown);
                    });
                }
            };
            this.addKeyMap(keyMap);//add keymap whenever app is on load

            /**
             * get saved data whenever app is on load
             */
            chrome.storage.local.get(getObj, function(dataObj) {
                if(getObj.markdown != "") {
                    xmarkEditor.setMarkdown(getObj.markdown);
                    console.log(getObj.markdown);
                }
            });
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

