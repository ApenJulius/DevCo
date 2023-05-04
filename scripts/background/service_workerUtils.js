async function refresh() {
    try {
        const response = await fetch(chrome.runtime.getURL("data/cheats.json"));
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(error);
    }
    return null;
}

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
