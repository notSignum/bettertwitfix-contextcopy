function addButton() {
  const button = document.createElement("button");
  button.textContent = "Copy FixTwit Link";
  button.style.position = "fixed";
  button.style.top = "10px";
  button.style.right = "10px";
  button.style.zIndex = "9999";
  button.style.backgroundColor = "#1da1f2";
  button.style.color = "#ffffff";
  button.style.padding = "8px 12px";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";
  button.addEventListener("click", handleButtonClick);
  document.body.appendChild(button);
}

function handleButtonClick() {
  const tweetURL = window.location.href.replace("twitter", "vxtwitter");
  copyToClipboard(tweetURL);
  console.log("URL copied to clipboard:", tweetURL);
}

function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

addButton();
