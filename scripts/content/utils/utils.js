function currentTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
}

class QueueSystem {
    constructor() {
        this.messageQueue = [];
        this.currentID = 0;
        this.port = null;

        this.setupConnection();
        this.setupListener();
    }

    setupConnection() {
        this.port = chrome.runtime.connect({ name: "content" });
    }

    async sendMessage(type, action, queries) {
        const requestId = this.randomId();

        this.port.postMessage({
            type,
            action,
            queries,
            requestId,
        });

        return new Promise((resolve, reject) => {
            const messageHandler = (response) => {
                if (response.requestID === requestId) {
                    this.port.onMessage.removeListener(messageHandler);
                    if (response.error) {
                        reject(new Error(response.error));
                    } else {
                        resolve(response.response);
                    }
                }
            };
            this.port.onMessage.addListener(messageHandler);
        });
    }

    setupListener() {
        chrome.runtime.onConnect.addListener((port) => {
            if (port.name !== "content") return;

            port.onMessage.addListener(async (message) => {
                try {
                    const { type, action, queries, requestId } = message;
                    const messageHandler = new MessageHandler();
                    const response = await messageHandler.handleMessage({
                        type,
                        action,
                        queries,
                    });
                    port.postMessage({ data: response, requestId });
                } catch (error) {
                    console.error(error);
                    port.postMessage({ error: error.message, requestId });
                }
            });
        });
    }

    randomId() {
        return Math.floor(Math.random() * 100000 + 1);
    }
}

const queueSystem = new QueueSystem();
