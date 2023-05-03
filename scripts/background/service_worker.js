let savedData;
let savedThemes;

importScripts("service_workerUtils.js");

// ? Handling refreshs.
chrome.runtime.onInstalled.addListener(() => {
  console.log("On Installed");
  startRequest();
});

chrome.runtime.onStartup.addListener(() => {
  console.log("On Startup");
  startRequest();
});

// ? Function to handle the request, may be moved to the utils file.
/**
 * Getting data from cheats.json!
 */
async function startRequest() {
  const data = refresh().then((data) => {
    savedData = data;
  });
  const theme = refreshThemes().then((themes) => {
    console.log(themes);
    savedThemes = themes;
  });
  console.log("Starting request");
}

// ! Getting information from the scripts, such as getting information, and handling the contacts.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (sender.tab) {
    console.log("Message from a content script:" + sender.tab.url);
  } else {
    console.log("Message from the extension");
  }

  // ? Checking if the status is working.
  if (request.action === "testConnection") {
    sendResponse({ status: "ok" });
    return;
  } else if (request.action === "refreshConnection") {
    startRequest();
    sendResponse({ status: "ok" });
    return;
  } else if (request.action === "getInformation") {
    console.log("Getting information!");
    //get all information.
    sendResponse({ data: savedData });
    return;
  } else if (request.action === "analysisInformation") {
    sendResponse({ data: savedData });
    return;
  } else if (request.action === "getStyles") {
    startRequest();

    sendResponse({ data: savedThemes });
    return;
  }
});
