chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "getPrebidResponses"}, function(response) {
  });
});

$("button").click((e) => {

  switch (e.target.id) {
    case "refreshBids":
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "refreshBids"}, function(response) {
        });
      });
      break;

    case "timeoutButton":
      if (isNaN($("#newTimeout").val())) {
        $("#newTimeout").val("Please enter a number");
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "setTimeout", newTimeout: $("#newTimeout").val()}, function(response) {
          });
        });
        $("#currentTimeout").html("Current Prebid Timeout Is: " + $("#newTimeout").val());
      }
      break;

    case "bidderButton":
      var bidder = $("#bidderCode").val();
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "setBidder", bidder: bidder}, function(response) {
        });
      });
      break;

    default:
      console.log("didn't work");
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.greeting === "prebidBids") {
    $("#currentTimeout").html("Current Prebid Timeout Is: " + request.timeout);
    var winningID = [];
    var topBidsID = [];

    if (request.prebid._winningBids.length > 0) {
      $.each(request.prebid._winningBids, function(index, value) {
        winningID.push(value.adId);
      })
    }
    if (request.topAdUnitBids.length > 0) {
      $.each(request.topAdUnitBids, function(index, value) {
        topBidsID.push(value.adserverTargeting.hb_adid);
      })
    }

    $.each(request.prebid._bidsReceived, function(index, value) {
      if (request.timeout >= value.timeToRespond) {
        let winningRow;
        let winningBid;
        let bidSubmitted;
        (Cookies.get(value.adId)) ? bidSubmitted = "<td id='wonTrue'>Yes</td>" : bidSubmitted = "<td id='wonFalse'>No</td>";
        (winningID.indexOf(value.adId) > -1) ? winningRow = "<td id='wonTrue'>Yes</td>" : winningRow = "<td id='wonFalse'>No</td>";
        (topBidsID.indexOf(value.adId) > -1) ? winningBid = "<td id='wonTrue'>Yes</td>" : winningBid = "<td id='wonFalse'>No</td>";

        let auctionRow = `<tr><td>${value.adId}</td><td>${value.bidder}</td><td>${Number(value.cpm).toFixed(2)}</td><td>${value.timeToRespond}ms</td><td>${value.adUnitCode}</td>${winningBid}${bidSubmitted}${winningRow}</tr>`;
        $("#tableFoot").append(auctionRow);
      }
    });
  }
});

chrome.webRequest.onHeadersReceived.addListener(function(e) {
  if ((e.url).search("gampad/ads") != -1) {
    var fixedURL = (e.url).replace(/%3D/g, '=').replace(/%26/g, '&').match(/hb_adid=([^&]*)/);
    if (fixedURL !== null) {
      Cookies.set(fixedURL[1], fixedURL[1], {expires: 1});
    }
  }

}, {
  urls: ["<all_urls>"],
  types: ["script"]
});
