const currentURL = window.location.href;
var scriptsInjected = [];
var stylesInjected = [];
var allowedCheats = [];

const getInfo = async () => {
  try {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: "getInformation" },
        function (response) {
          resolve(response.data);
        }
      );
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

const filter = async (data) => {};

async function handleWebsite(url) {
  try {
    const result = await getInfo();
    if (result) {
      for (const item in result) {
        for (const url of result[item].urls) {
          if (currentURL.includes(url)) {
            const name = result[item].name;
            const version = result[item].version;
            const description = result[item].description;
            const devMode = result[item]["devMode"];

            toggleListenerMode(devMode);

            const scripts = result[item]["scripts"];
            const styles = result[item]["styles"];
            if (scripts) {
              for (const script of scripts) {
                logger("injection", script.src);
                injectScript(script);
              }
            }
            if (styles) {
              for (const style of styles) {
                logger("injection", style.href);
                injectCSS(style);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * @param {*} script {JSON}
 * @returns
 */

const injectScript = (script) => {
  const url = chrome.runtime.getURL(script.src);
  if (scriptsInjected.includes(url)) {
    return;
  } else {
    scriptsInjected.push(url);
    try {
      const scriptElement = document.createElement("script");
      scriptElement.src = url;

      // Check if other properties exist before setting them
      if ("async" in script) {
        scriptElement.async = script["async"];
      }
      if ("module" in script) {
        scriptElement.module = script["module"];
      }

      document
        .getElementsByTagName("head")[0]
        .insertBefore(
          scriptElement,
          document.getElementsByTagName("script")[0]
        );

      if (
        "destroy_when_complete" in script &&
        script["destroy_when_complete"]
      ) {
        scriptElement.addEventListener("load", () => {
          scriptElement.remove();
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 *
 * @param {*} css
 * @returns
 */
const injectCSS = (css) => {
  const url = chrome.runtime.getURL(css.href);
  if (stylesInjected.includes(url)) {
    return;
  } else {
    stylesInjected.push(url);
    try {
      const cssElement = document.createElement("link");

      cssElement.rel = "stylesheet";
      cssElement.href = url;

      document
        .getElementsByTagName("head")[0]
        .insertBefore(cssElement, document.getElementsByTagName("link")[0]);
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 * Checks if the cheat is in dev Mode, then enable it's features
 * @param {*} listenerMode
 * @returns
 */
const toggleListenerMode = (listenerMode) => {
  if (listenerMode) {
    logger("listenermode", "Enabled");
    return;
  } else {
    logger("listenermode", "Disabled");
    return;
  }
};

const handleCreation = (action, data) => {
  try {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: action, data: data },
        function (response) {
          console.log(response);
          resolve(response);
        }
      );
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

handleWebsite(currentURL);
