class MessageHandler {
    async handleMessage(request) {
        // handle the incoming message here
        try {
            const requestID = request.requestId;
            const handlerMes = new MessageExecutor();
            const response = await handlerMes.handleMessage(request);
            return { response: response, requestID: requestID };
        } catch (error) {
            console.error(error);
        }
    }
}

class Connection {
    constructor() {
        this.ports = new Set();
        this.messageHandler = new MessageHandler();

        chrome.runtime.onConnect.addListener((port) => {
            this.handleConnect(port);
        });
    }

    handleConnect(port) {
        this.ports.add(port);

        port.onMessage.addListener(async (message) => {
            try {
                const response = await this.messageHandler.handleMessage(
                    message
                );
                port.postMessage(response);
            } catch (error) {
                console.error("Error handling message:", error);
            }
        });

        port.onDisconnect.addListener(() => {
            this.handleDisconnect(port);
        });
    }

    handleDisconnect(port) {
        this.ports.delete(port);
    }
}

new Connection();

class MessageExecutor {
    constructor() {
        this.types = {
            GET: "Getting information",
            POST: "Executing action",
        };

        this.actions = {
            information: informationHandler,
            keybinds: keybindsHandler,
            styles: stylesHandler,
            loggerlevels: loggerLevelsHandler,
        };
    }

    // Define the handler function for incoming messages
    async handleMessage(request) {
        const action = this.actions[request.action];
        if (action) {
            const handler = new action();
            const response = await handler.handleMessage(request);
            return response;
        } else {
            console.error(`Unknown type: ${request.type}`);
            return { error: `Unknown type: ${request.type}` };
        }
    }
}

// Define the base class for all handlers
class MessageHandlerBase {
    async handleMessage(request) {
        console.error(
            `Message handler for '${this.constructor.name}' is not implemented.`
        );
        return { error: "Not implemented." };
    }
}

class informationHandler extends MessageHandlerBase {
    async handleMessage(request) {
        if (request.type === "GET") {
            return { data: await hashTable.get("information") };
        }
    }
}

class stylesHandler extends MessageHandlerBase {
    async handleMessage(request) {
        if (request.type === "GET") {
            return { data: await hashTable.get("styles") };
        }
    }
}

class keybindsHandler extends MessageHandlerBase {
    async handleMessage(request) {
        if (request.type === "GET") {
            return { data: await hashTable.get("keybinds") };
        }
    }
}

class loggerLevelsHandler extends MessageHandlerBase {
    async handleMessage(request) {
        if (request.type === "GET") {
            return { data: await hashTable.get("loggerLevels") };
        }
    }
}
