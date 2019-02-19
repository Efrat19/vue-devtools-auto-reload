chrome.runtime.onMessage.addListener(function (tab,info,cb) {
    console.log(info);
})