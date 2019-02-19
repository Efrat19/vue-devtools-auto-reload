function reloadExtension(id){
    chrome.management.setEnabled(id, false, function() {
        chrome.management.setEnabled(id, true);
        alert('vuedevtools is enabled')
    });
}
//reload automatically
chrome.management.onDisabled.addListener(function(extension) {
    if(extension.shortName==='Vue.js devtools'){
        reloadExtension(extension.id)
    }
});
//reload on click
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.management.getAll((extensions)=>{
        const vuedevtools=extensions.find(ext=>ext.shortName==='Vue.js devtools')
        if(typeof vuedevtools!== 'object' || typeof vuedevtools.id !=='string'){
            alert('no vuedevtools extension detected!')
            return;
        }
        reloadExtension(vuedevtools.id)
    })
});