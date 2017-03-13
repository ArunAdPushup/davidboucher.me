chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "getPrebidResponses"}, function(response) {
  });
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var winningID = [];
  if (request.prebid._winningBids.length > 0) {
    $.each(request.prebid._winningBids, function(index, value) {
      winningID.push(value.adId);
    })
  }
  $.each(request.prebid._bidsReceived, function(index, value) {
    if (winningID.indexOf(value.adId) > -1) {
      var auctionRow = "<tr><td>" + value.bidder + "</td><td>" + Number(value.cpm).toFixed(2) + "</td><td>" + value.timeToRespond + "</td><td>" + value.adUnitCode + "</td><td id='wonTrue'>Yes</td></tr>";
    } else {""
      var auctionRow = "<tr><td>" + value.bidder + "</td><td>" + Number(value.cpm).toFixed(2) + "</td><td>" + value.timeToRespond + "</td><td>" + value.adUnitCode + "</td><td id='wonFalse'>No</td></tr>";
    }
    $("#prebidTable").append(auctionRow);
  });
});
