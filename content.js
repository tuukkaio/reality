chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getZipCode") {
    const currentUrl = window.location.href;
    const zipCode = currentUrl.match(/\b\d{5}\b/)[0];
    sendResponse({ zipCode });
  }
});


