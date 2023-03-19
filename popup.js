document.getElementById("fetchRentalData").addEventListener("click", function () {
  const zipCode = document.getElementById("zipCode").innerText;
  if (zipCode) {
    chrome.storage.sync.set({ zipCode }, function () {
      console.log("Zip code saved:", zipCode);
    });
  }
});
