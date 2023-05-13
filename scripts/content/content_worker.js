const currentURL = window.location.href;
var scriptsInjected = [];
var stylesInjected = [];
var allowedCheats = [];

const logger = new Logger({
    file: true,
    console: true,
    database: false,
});

const getInfo = async () => {
    try {
        const response = await queueSystem.sendMessage("GET", "information");
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

async function handleWebsite(url) {
    try {
        const result = await getInfo();
        if (result) {
            for (const item in result.data) {
                for (const url of result.data[item].urls) {
                    if (currentURL.includes(url)) {
                        const name = result.data[item].name;
                        const version = result.data[item].version;
                        const description = result.data[item].description;
                        const devMode = result.data[item]["devMode"];

                        toggleListenerMode(devMode);
                        const keys = await handleKeybinds();

                        const scripts = result.data[item]["scripts"];
                        const styles = result.data[item]["styles"];
                        if (scripts) {
                            for (const script of scripts) {
                                logger.log(`Injecting ${script.src}`);
                                injectScript(script);
                            }
                        }
                        if (styles) {
                            for (const style of styles) {
                                logger.log(`Injecting ${style.href}`);
                                injectCSS(style);
                            }
                        }

                        // ? Listen for keybinds
                        if (keys) {
                            keys.hotkeys.forEach((key) => {
                                if (key.enabled) {
                                    listenForKeybinds(key.key, key.action);
                                }
                            });
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
                .insertBefore(
                    cssElement,
                    document.getElementsByTagName("link")[0]
                );
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
        logger.log(`Injecting`);
        return;
    } else {
        logger.log(`Injecting`);
        return;
    }
};

async function handleKeybinds() {
    try {
        const response = await queueSystem.sendMessage("GET", "keybinds");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

window.onload = () => {
    handleWebsite(currentURL);
};
