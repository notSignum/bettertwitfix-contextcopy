chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "fixTwitLink",
    title: "Copy BetterTwitFix Link",
    contexts: ["page"],
    documentUrlPatterns: ["*://*.twitter.com/*"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "fixTwitLink") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];

      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: copyToClipboard,
        args: [activeTab.url],
      });
    });
  }
});

function copyToClipboard(url) {
  const fixedUrl = url.replace("twitter", "vxtwitter");

  const inputElement = document.createElement("input");
  inputElement.value = fixedUrl;
  document.body.appendChild(inputElement);
  inputElement.select();

  navigator.clipboard
    .writeText(fixedUrl)
    .then(function () {
      inputElement.remove();
    })
    .catch(function (error) {
      console.error("Error copying URL to clipboard:", error);

      inputElement.remove();
    });
}
