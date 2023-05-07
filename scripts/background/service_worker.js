let savedData;
let savedThemes;
let savedKeybinds;

importScripts("service_workerUtils.js");
importScripts("messageHandler.js");

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
