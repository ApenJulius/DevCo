importScripts("manager/Globals.js");

// ? Handling refresh.
chrome.runtime.onInstalled.addListener(async () => {
    console.log("On Installed");
    await hashTable._loadAll();
});

chrome.runtime.onStartup.addListener(async () => {
    console.log("On Startup");
    await hashTable._loadAll();
});
