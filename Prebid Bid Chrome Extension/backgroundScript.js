chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    var views = chrome.extension.getViews({
      type: "popup"
    })[0];
    chrome.runtime.sendMessage({prebid: request.message});
});
