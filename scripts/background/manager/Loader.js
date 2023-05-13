class Loader {
    constructor() {
        importScripts("enums/LoggerLevels.js");
    }

    load() {
        this.loadStyles();
        this.loadKeybinds();
        this.loadInformation();
        this.loadLoggerLevels();
    }

    async loadStyles() {
        try {
            const response = await fetch(
                chrome.runtime.getURL("data/Styles.json")
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

    async loadKeybinds() {
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

    async loadInformation() {
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

    async loadLoggerLevels() {
        return LogLevel;
    }
}
