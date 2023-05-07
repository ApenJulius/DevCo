function currentTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
}

async function sendMessageBackend(type, action, queries) {
    try {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(
                { type: type, action: action, queries: queries },
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
}
