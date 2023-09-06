 



chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.update(tab.id, { url: 'homepage.html' });
  });

  chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: 'homepage.html' });
  });
});

 