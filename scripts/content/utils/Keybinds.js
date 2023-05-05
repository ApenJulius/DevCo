// TODO: Fix this event, currently does not work. Just records the keys.
// ! Not working, creates a problem at start.
const listenForKeybinds = (keybind, action) => {
  const keys = keybind.split("+");

  document.addEventListener("keydown", (event) => {
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
        console.log("Action works.");
        PREDEFINED_ACTIONS[action];
      }
    }
  });
};

const PREDEFINED_ACTIONS = {
  "extension.toggle": sendMessageBackend("toggleExtension"),
};
