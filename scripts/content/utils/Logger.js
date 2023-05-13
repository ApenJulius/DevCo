async function LogLevel() {
    const f = await queueSystem.sendMessage("GET", "loggerlevels");
    return f.data;
}

class Logger {
    constructor(options) {
        this.options = options || {};
        this.styleHandler = new Styles() || null;
        this.styleHandler.loadStyles();
        this.logLevels = null;
        this.setLogLevels();
    }

    async setLogLevels() {
        this.logLevels = (await LogLevel()) || null;
    }

    log(message, level = this.logLevels.INFO, ...args) {
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
