chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getZipCode") {
    const zipCodeElement = document.querySelector("[data-testid='home-details-summary'] div:last-child");
    const zipCodeText = zipCodeElement ? zipCodeElement.innerText : null;
    const zipCodeMatch = zipCodeText.match(/\b\d{5}\b/);
    const zipCode = zipCodeMatch ? zipCodeMatch[0] : null;
    sendResponse({ zipCode });
  }
});


