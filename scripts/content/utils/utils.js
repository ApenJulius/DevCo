async function logger(type, args) {
  let colorStyle = await colorStyles();
  let textTemplate = await textTemplates();

  switch (type) {
    case "injection":
      console.log(
        textTemplate.injectionText,
        colorStyle.texts.injectionBubble,
        colorStyle.texts.default,
        colorStyle.texts.injectionRest,
        args,
        "color: #0081D5; font-weight: bold;",
        currentTime(),

        colorStyle.texts.normalRest
      );
      break;
    case "devmode":
      console.log(
        textTemplate.devModeText,
        colorStyle.texts.devModeBubble,
        colorStyle.texts.default,
        colorStyle.texts.devModeRest,
        args
      );
      break;

    case "listenermode":
      console.log(
        textTemplate.listenerModeText,
        colorStyle.texts.listenerModeBubble,
        colorStyle.texts.default,
        colorStyle.texts.listenerModeRest,
        args
      );
      break;

    case "warning":
      console.log(
        `%cWarning%c - ${source} at %c${currentTime()}%c`,
        "color: #0081D5; font-weight: bold;"
      );
      break;

    default:
      console.log(`Injected ${source} at ${currentTime()}`);
      break;
  }
}

function currentTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return time;
}

async function sendMessageBackend(action, data) {
  try {
    return new Promise((resolve, reject) => {
      if (!data) {
        chrome.runtime.sendMessage({ action: action }, function (response) {
          resolve(response);
        });
      } else {
        chrome.runtime.sendMessage(
          { action: action, data: data },
          function (response) {
            resolve(response);
          }
        );
      }
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
