function addJS(code) {
  var s = document.createElement("script");
  s.type="text/javascript";
  s.innerText = code;
  document.getElementsByTagName("body")[0].appendChild(s);
}
var jsCode = "chrome.runtime.sendMessage('" + chrome.runtime.id + "', {message: window.pbjs});";

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "getPrebidResponses") {
      addJS(jsCode);
    }
  });
