let isLoading = true;

// TODO: Fix this event, currently does not work. Just records the keys.
// ! Not working, creates a problem at start.
const listenForKeybinds = (keybind, action) => {
    const keys = keybind.split("+");

    const keyDownListener = (event) => {
        if (isLoading) {
            return;
        }

        const pressedKeys = keys.map((key) => {
            let cusKey = key.toLowerCase();
            switch (cusKey) {
                case "ctrl":
                    return event.ctrlKey;
                case "shift":
                    return event.shiftKey;
                case "alt":
                    return event.altKey;
                default:
                    return event.key.toUpperCase() === key.toUpperCase();
            }
        });

        if (pressedKeys.every((isPressed) => isPressed)) {
            if (action) {
                PREDEFINED_ACTIONS[action];
            }
        }
    };

    // Add the listener when the flag is true
    if (!isLoading) {
        document.addEventListener("keydown", keyDownListener);
    }

    return {
        enable: () => {
            isLoading = false;
            document.addEventListener("keydown", keyDownListener);
        },
        disable: () => {
            isLoading = true;
            document.removeEventListener("keydown", keyDownListener);
        },
    };
};

const PREDEFINED_ACTIONS = {
    "extension.toggle": sendMessageBackend("toggleExtension"),
};

// Disable the listener by default
listenForKeybinds("ctrl+shift+e", "extension.toggle").disable();

// When the extension is ready, enable the listener
window.addEventListener("load", () => {
    listenForKeybinds("ctrl+shift+e", "extension.toggle").enable();
});
