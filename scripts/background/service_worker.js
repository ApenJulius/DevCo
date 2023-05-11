importScripts("manager/Globals.js");

// ? Handling refresh.
chrome.runtime.onInstalled.addListener(() => {
    console.log("On Installed");
    store.updateAllAvailableData();
});

chrome.runtime.onStartup.addListener(() => {
    console.log("On Startup");
    store.updateAllAvailableData();
});
