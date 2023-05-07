/**
 * Getting the main config for adding scripts and so.
 * @returns {Promise<null|Object>} The config object or null if it fails
 */
async function refresh() {
    try {
        const response = await fetch(
            chrome.runtime.getURL("data/configForCustom.json")
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
    return null;
}

/**
 * Get the themes from the Styles.json file
 * @returns {Promise<null|Object>} The config object or null if it fails
 */
async function refreshThemes() {
    try {
        const response = await fetch(chrome.runtime.getURL("data/Styles.json"));
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
    return null;
}

/**
 * Loading the keybindings from the keybindings.json file
 * @returns {Promise<null|Object>} The config object or null if it fails
 */
async function loadKeybindings() {
    try {
        const response = await fetch(
            chrome.runtime.getURL("data/keybindings.json")
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
    return null;
}

/**
 * Finding the correct keybinding from the loadKeybindings().
 * @param {*} keybinding
 * @returns
 */
async function findKeybinding(keybinding) {
    try {
        const response = await loadKeybindings();
        if (response === null) {
            return null;
        } else {
            if (response["hotkeys"][keybinding] === undefined) {
                return "The keybinding does not exist!";
            } else {
                console.log(response["hotkeys"][keybinding]);
                return response["hotkeys"][keybinding];
            }
        }
    } catch (error) {
        console.warn(error);
    }
}

async function loadLoggerLevels() {
    importScripts("enums/LoggerLevels.js");
    return LogLevel;
}
