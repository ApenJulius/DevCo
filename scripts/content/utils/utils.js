async function logger(type, source) {
    let styles = await getTheme("whiteTheme");
    switch (type) {
        case "injection":
            console.log(
                `%cInjection%c - ${source} at %c${currentTime()}%c`,
                `background-color: ${styles.colors.injectionBg}; padding: ${styles.colors.injectionPadding}; border-radius: ${styles.colors.injectionBorderRadius}; font-weight: ${styles.colors.injectionFontWeight}; text-color: ${styles.colors.injectionText};`,
                `background-color: ${styles.colors.bg}; color: ${styles.colors.textColor};`,
                "color: #0081D5; font-weight: bold;",
                `background-color: ${styles.colors.bg}; color: ${styles.colors.textColor};`
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
