const getThemeInfo = async () => {
    try {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(
                { action: "getStyles" },
                function (response) {
                    resolve(response);
                }
            );
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

async function getTheme(theme) {
    try {
        let info = await getThemeInfo();
        console.log(info.data.themes[theme]);
        return info.data.themes[theme];
    } catch (error) {
        console.warn(error);
    }
}

getTheme("whiteTheme");


const Styles = {
    injectionBubble:
        "background-color: #0081D5; padding: 4px; border-radius: 4px; font-weight: bold;",
    normalRest:
        "background-color: transparent; padding: 0; color: black; font-weight: normal;",
};
