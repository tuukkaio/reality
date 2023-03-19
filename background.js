chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    chrome.storage.sync.get(["zipCode"], function (items) {
      if (items.zipCode) {
        console.log("Zip code retrieved:", items.zipCode);
        fetchRentalMarketData(items.zipCode, function (data) {
          console.log("Data fetched in background script", data);
        });
      }
    });
  }
});

function fetchRentalMarketData(zipCode, callback) {
  const apiKey = "7261b5126fmsh4708a3155028683p142c1cjsneb0b0d5e0089";
  const url = `https://realty-mole-property-api.p.rapidapi.com/zipCodes/${zipCode}`;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.error("Error in background script", xhr.statusText);
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.setRequestHeader("X-RapidAPI-Key", apiKey);
  xhr.setRequestHeader("X-RapidAPI-Host", "realty-mole-property-api.p.rapidapi.com");
  xhr.send();
}
