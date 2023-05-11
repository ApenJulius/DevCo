class Store {
    constructor() {
        importScripts("manager/Loader.js");

        this.loader = new Loader();

        this.request = indexedDB.open("DevCo", 1);

        this.request.onerror = (event) => {
            console.error("Database error: " + event.target.errorCode);
        };

        this.request.onupgradeneeded = (event) => {
            this.db = event.target.result;
            const objectStore = db.createObjectStore("data", { keyPath: "id" });
            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("timestamp", "timestamp", {
                unique: false,
            });
        };

        this.request.onsuccess = (event) => {
            this.db = event.target.result;
        };

        this.db = this.request;

        console.log(this.db);
    }

    addData(key, data) {
        const transaction = this.db.transaction([key], "readwrite");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.add(data);

        request.onerror = function (event) {
            console.error("Error adding data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            console.log("Data added successfully");
        };
    }

    updateData(key, data) {
        const transaction = this.db.transaction([key], "readwrite");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.put(data);

        request.onerror = function (event) {
            console.error("Error updating data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            console.log("Data updated successfully");
        };
    }

    removeData(key, id) {
        const transaction = this.db.transaction([key], "readwrite");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.delete(id);

        request.onerror = function (event) {
            console.error("Error removing data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            console.log("Data removed successfully");
        };
    }

    getData(key, id) {
        const transaction = this.db.transaction([key], "readonly");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.get(id);

        request.onerror = function (event) {
            console.error("Error getting data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            const data = event.target.result;
            console.log("Data retrieved successfully: ", data);
        };
    }

    getAllData(key) {
        const transaction = this.db.transaction([key], "readonly");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.getAll();

        request.onerror = function (event) {
            console.error("Error getting all data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            const data = event.target.result;
            console.log("All data retrieved successfully: ", data);
        };
    }

    clearData(key) {
        const transaction = this.db.transaction([key], "readwrite");
        const objectStore = transaction.objectStore(key);
        const request = objectStore.clear();

        request.onerror = function (event) {
            console.error("Error clearing data: ", event.target.error);
        };

        request.onsuccess = function (event) {
            console.log("Data cleared successfully");
        };
    }

    updateAllAvailableData() {
        this.updateData("styles", this.loader.loadStyles());
        this.updateData("keybinds", this.loader.loadKeybinds());
        this.updateData("information", this.loader.loadInformation());
        this.updateData("loggerLevels", this.loader.loadLoggerLevels());
    }
}
