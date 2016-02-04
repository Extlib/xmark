/**
 * Created by Jia van on 2016/1/31.
 */
var xmarkEditor,
    dataSet = {},
    INIT_CONTENT;

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
                    dataSet = {
                        markdown: xmarkEditor.getMarkdown()
                    };
                    chrome.storage.local.set(dataSet, function() {
                        //callback function
                        //console.log('save data success');
                    });
                }
            };

            /**
             * load data when loading app and set editor textarea
             * @param keyName Object Key, which saved in storage
             * @param function options callbcak function
             */
            chrome.storage.local.get('markdown', function(data) {
                if(data.markdown != null) {
                    xmarkEditor.setMarkdown(data.markdown);
                }
            });

            this.addKeyMap(keyMap);//add keymap when loading app
        },
        resize: function() {
            xmarkEditor.resize(currentWindow.getBounds().width, currentWindow.getBounds().height - 21);
        }
        /*toolbarIcons : function() {
            return ["undo", "redo", "|", "bold", "hr", "|", "preview", "watch", "|", "fullscreen", "info", "testIcon", "testIcon2", "file", "faicon", "||", "watch", "fullscreen", "preview", "testIcon"]
        }*/
    });
    xmarkEditor.hideToolbar();//hidden toolbar when init editor
});