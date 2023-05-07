class Logger {
    constructor(options) {
        this.options = options || {};
        this.styleHandler = new Styles() || null;
        this.styleHandler.loadStyles();
    }

    log(message, level = LogLevel.INFO, ...args) {
        const formattedMessage = this.formatMessage(message, level, ...args);
        this.writeLog(formattedMessage);
    }

    formatMessage(message = "", level, ...args) {
        const theme = this.styleHandler.styles?.defaultTheme || "whiteTheme";

        const formattedText = level.allowedArgs
            ? this.styleHandler.getFormattedText(
                  theme,
                  level.name.toLowerCase(),
                  ...args
              )
            : this.styleHandler.getFormattedText(
                  theme,
                  level.name.toLowerCase(),
                  message
              );

        return formattedText;
    }

    writeLog(message) {
        if (this.options.file) {
            // write to file
            // ...
        }

        if (this.options.console) {
            // write to console
            console.log(...message);
        }

        if (this.options.database) {
            // write to database
            // ...
        }
    }
}
