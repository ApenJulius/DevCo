class Styles {
    constructor() {
        this.styles = null;
    }

    /**
     * Loading all the styles.
     */
    async loadStyles() {
        sendMessageBackend("GET", "getStyles").then((response) => {
            this.styles = response ? response.data : null;
        });
    }

    /**
     * Get the style for a specific theme and key
     * @param {*} theme
     * @param {*} key
     * @returns
     */
    getStyle(theme, key) {
        const themeData = this.styles?.themes?.[theme];
        if (themeData) {
            const styleData = themeData[key];
            if (styleData) {
                return styleData;
            }
        }
        return null;
    }

    getFormattedText(theme, key, ...args) {
        const styleData = this.getStyle(theme, "texts");

        const textFormat = styleData?.[key + "Text"];

        if (textFormat) {
            const bubble =
                this.getStyle(theme, "colors")?.bubble || "transparent";
            const bubbleBg =
                this.getStyle(theme, "colors")?.[key + "Bg"] || "transparent";

            const bubbleText = this.getStyle(theme, "colors")?.[key + "Text"];

            const foregroundBubble = this.getStyle(theme, "colors")?.[
                "foregroundBubble"
            ];
            const foreground =
                this.getStyle(theme, "colors")?.[key + "Foreground"] ||
                "transparent";

            const formattedArgs = args.map((arg) => `${arg}`);
            const textStyles = [
                `background-color: ${bubbleBg}; ${bubble}; color: ${bubbleText};`,
                "background-color: transparent; color: black;",
                `background-color: ${foreground}; ${foregroundBubble}; color: ${bubbleText};`,
                ...formattedArgs,
            ];
            return [textFormat, ...textStyles];
        }
        return null;
    }
}
