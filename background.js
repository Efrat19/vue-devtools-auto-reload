chrome.management.onDisabled.addListener(function(extension) {
    if(extension.shortName==='Vue.js devtools'){
        chrome.management.setEnabled(extension.id, false, function() {
            chrome.management.setEnabled(extension.id, true);
            alert('vuedevtools is enabled')
        });
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.management.getAll((extensions)=>{
        const vuedevtools=extensions.find(ext=>ext.shortName==='Vue.js devtools')
        if(typeof vuedevtools!== 'object' || typeof vuedevtools.id !=='string'){
            alert('no vuedevtools extension detected!')
            return;
        }
        chrome.management.setEnabled(vuedevtools.id, false, function() {
            chrome.management.setEnabled(vuedevtools.id, true);
            alert('vuedevtools is enabled')
        });
    })
});