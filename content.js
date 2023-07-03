chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "copyToClipboard") {
    const dummyElement = document.createElement("textarea");
    dummyElement.value = request.text;
    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);
  }
});

chrome.runtime.sendMessage({
  action: "updateContextMenu",
  isTwitterPage: location.hostname === "twitter.com",
});
