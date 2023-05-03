const getThemeInfo = async () => {
  try {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ action: "getStyles" }, function (response) {
        resolve(response);
      });
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function getTheme(theme) {
  try {
    let info = await getThemeInfo();
    return info.data.themes[theme];
  } catch (error) {
    console.warn(error);
  }
}

async function colorStyles() {
  let theme = await getTheme("whiteTheme");

  let styles = {
    texts: {
      injectionBubble: `background-color: ${theme.colors.injectionBg}; padding: 4px; border-radius: 4px; font-weight: bold; color: ${theme.colors.injectionText}`,
      injectionRest: `background-color: ${theme.colors.injectionForeground}; padding: 3px; border-radius: 3px; color: ${theme.colors.injectionText}; font-weight: normal;`,

      devModeBubble: `background-color: ${theme.colors.devModeBg}; padding: 4px; border-radius: 4px; font-weight: bold; color: ${theme.colors.devModeText}`,
      devModeRest: `background-color: ${theme.colors.devModeForeground}; padding: 3px; border-radius: 3px; color: ${theme.colors.devModeText}; font-weight: normal;`,

      listenerModeBubble: `background-color: ${theme.colors.listenerModeBg}; padding: 4px; border-radius: 4px; font-weight: bold; color: ${theme.colors.listenerModeText}`,
      listenerModeRest: `background-color: ${theme.colors.listenerModeForeground}; padding: 3px; border-radius: 3px; color: ${theme.colors.listenerModeText}; font-weight: normal;`,

      default: `background-color: transparent; padding: 0; color: ${theme.colors.textColor}; font-weight: normal;`,
    },
  };
  return styles;
}

async function textTemplates() {
  let theme = await getTheme("whiteTheme");

  let texts = {
    injectionText: `${theme.texts.injectionText}`,
    devModeText: `${theme.texts.devModeText}`,
    listenerModeText: `${theme.texts.listenerModeText}`,
  };
  return texts;
}
