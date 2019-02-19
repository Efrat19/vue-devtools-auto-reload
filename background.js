
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.management.getAll((extensions)=>{
        const vuedevtools=extensions.find(ext=>ext.shortName==='Vue.js devtools')
        if(typeof vuedevtools!== 'object' || typeof vuedevtools.id !=='string'){
            alert('no vuedevtools extension detected!')
            return;
        }
        console.log(vuedevtools.id);
        chrome.management.setEnabled(vuedevtools.id, false, function() {
            chrome.management.setEnabled(vuedevtools.id, true);
            alert('vuedevtools is enabled')
        });
    })
});