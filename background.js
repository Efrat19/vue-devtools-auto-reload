
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.management.getAll((info)=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, info, function(response) {

            });
          });
    })
});

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//           // chrome.tabs.update(tabs[0].id, {active: true})
//         });
//       });
//  });
// function reloadExtension(id) {
//     if (id) {
//         chrome.management.setEnabled(id, false, function() {
//             chrome.management.setEnabled(id, true);
//         });
//     } else {
//         if (confirm("No extension selected! Want to choose one?")) {
//             window.open(chrome.extension.getURL('/options.html'));
//         }
//     }
// }
// chrome.browserAction.onClicked.addListener(function(tab) {
//     reloadExtension(localStorage.getItem('id'));
// });
// var id = localStorage.getItem('id');
// if (typeof id == "string" && id.length >= "32") {
//     chrome.management.get(id, function(result) {
//         chrome.browserAction.setTitle({title:"Reload extension:\n" + result.name + "  " + result.version});
//     });
// }