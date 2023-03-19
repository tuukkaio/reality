chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getZipCode") {
    const zipCodeElement = document.querySelector("[data-testid='home-details-summary']");
    const zipCode = zipCodeElement ? zipCodeElement.textContent.match(/\b\d{5}\b/)[0] : null;
    sendResponse({ zipCode });
  }
});
