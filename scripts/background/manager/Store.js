class SessionStorage {
    constructor() {
        this.data = {};
        importScripts("manager/Loader.js");

        this.loader = new Loader();
        this.sessionStorage = chrome.storage.session;
    }

    async set(key, value) {
        this.sessionStorage.set({ key: value }).then(() => {
            this.data[key] = value;
        });
    }

    get(key) {
        if (this.data[key] !== undefined) {
            return this.data[key];
        } else {
            this.sessionStorage.get([key]).then((result) => {
                this.data[key] = result[key];
                return this.data[key];
            });
        }
    }

    clear() {
        try {
            this.sessionStorage.clear().then(() => {
                this.data = {};
            });
        } catch (error) {
            console.error(error);
        }
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
        importScripts("manager/Loader.js");

        this.loader = new Loader();
    }

    async hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    async set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    async get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                console.log(sameKeyItem[1]);
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    async remove(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    async clear() {
        this.table = new Array(this.size);
    }

    async display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }

    async _loadAll() {
        const keyBinds = await this.loader.loadKeybinds();
        const styles = await this.loader.loadStyles();
        const information = await this.loader.loadInformation();
        const loggerLevels = await this.loader.loadLoggerLevels();

        this.set("keybinds", keyBinds);
        this.set("styles", styles);
        this.set("information", information);
        this.set("loggerLevels", loggerLevels);
    }
}
