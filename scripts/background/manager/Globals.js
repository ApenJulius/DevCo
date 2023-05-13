importScripts("service_workerUtils.js");
importScripts("manager/Store.js");
importScripts("messageHandler.js");

const messageHandler = new MessageHandler();
const hashTable = new HashTable(500);
