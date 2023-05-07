let savedLoggerLevels;

// Define the message handler function
function handleMessage(request, sender, sendResponse) {
    const messageHandler = new MessageHandler();
    messageHandler.handleMessage(request, sendResponse);
}

// Add a listener for incoming messages from content scripts
chrome.runtime.onMessage.addListener(handleMessage);

class MessageHandler {
    constructor() {
        this.types = {
            GET: InfoHandler,
            POST: ExecutionHandler,
        };
    }

    // Define the handler function for incoming messages
    handleMessage(request, sendResponse) {
        console.log(request);
        console.log(this.types);
        const action = this.types[request.type];
        if (action) {
            const handler = new action();
            handler.handleMessage(request, sendResponse);
        } else {
            console.error(`Unknown type: ${request.type}`);
            sendResponse({ error: `Unknown type: ${request.type}` });
        }
    }
}

// Define the base class for all handlers
class MessageHandlerBase {
    handleMessage(request, sendResponse) {
        console.error(
            `Message handler for '${this.constructor.name}' is not implemented.`
        );
        sendResponse({ error: "Not implemented." });
    }
}

/**
 * Handle information queries
 */
class InfoHandler extends MessageHandlerBase {
    constructor() {
        super();
        this.actions = {
            getInformation: GetInformationHandler,
            getKeybinds: GetKeybindsHandler,
            getStyles: GetStylesHandler,
            getLoggerLevels: GetLoggerLevelsHandler,
        };
    }

    handleMessage(request, sendResponse) {
        const action = this.actions[request.action];
        if (action) {
            const handler = new action();
            handler.handleMessage(request, sendResponse);
        } else {
            console.error(`Unknown query: ${request.action}`);
            sendResponse({ error: `Unknown query: ${request.action}` });
        }
    }
}

/**
 * Handle execution queries
 */
class ExecutionHandler extends MessageHandlerBase {
    constructor() {
        super();
        this.actions = {
            refreshConnection: RefreshConnectionHandler,
            analysisInformation: AnalysisInformationHandler,
            toggleExtension: ToggleExtensionHandler,
        };
    }

    handleMessage(request, sendResponse) {
        const action = this.actions[request.action];
        if (action) {
            const handler = new action();
            handler.handleMessage(request, sendResponse);
        } else {
            console.error(`Unknown action: ${request.action}`);
            sendResponse({ error: `Unknown action: ${request.action}` });
        }
    }
}

// Define the handler classes for each action
class TestConnectionHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ status: "ok" });
    }
}

class RefreshConnectionHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ status: "ok" });
    }
}

class GetInformationHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ data: savedData });
    }
}

class AnalysisInformationHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ data: savedData });
    }
}

class GetStylesHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ data: savedThemes });
    }
}

class GetKeybindsHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ data: savedKeybinds });
    }
}

class ToggleExtensionHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        sendResponse({ status: "ok" });
    }
}

class GetLoggerLevelsHandler extends MessageHandlerBase {
    handleMessage(request, sendResponse) {
        loadLoggerLevels();
        sendResponse({ data: savedLoggerLevels });
    }
}
