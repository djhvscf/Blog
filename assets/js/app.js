angular.module('testApp', [
    'testApp.services',
    'testApp.controllers'
])
.config(function (styleProvider) {
    styleProvider.setStyles({
        history: {
            border: "#aaa 2px dashed",
            background: "#eee"
        }
    });
});
