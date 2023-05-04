let savedData;
let savedThemes;
let savedKeybinds;

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
        savedThemes = themes;
    });

    const keybinds = loadKeybindings().then((keybinds) => {
        savedKeybinds = keybinds;
    });
}

// BUG : Fix the multiple fetch and console logs.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.tab) {
        console.log("From a content script:" + sender.tab.url);
    } else {
        console.log("From the extension");
    }

    switch (request.action) {
        case "testConnection":
            sendResponse({ status: "ok" });
            break;
        case "refreshConnection":
            startRequest();
            sendResponse({ status: "ok" });
            break;
        case "getInformation":
            sendResponse({ data: savedData });
            break;
        case "analysisInformation":
            sendResponse({ data: savedData });
            break;
        case "getStyles":
            startRequest();
            sendResponse({ data: savedThemes });
            break;
        case "getKeybinds":
            startRequest();
            sendResponse({ data: savedKeybinds });
    }
    return;
});
