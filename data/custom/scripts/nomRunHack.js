"use strict";

// ? Information to understand about the game. The game is using LocalStorage to store the game data.
// ? The gameLoop and the scripts are obfuscated and the fileName is __game-scripts.js.
// * Happy hacking :D

const nomRunHack = {
    localStorageKey: "om-nom-run:OmNomRunv0.9.9",

    /**
     * Setting coins using LocalStorage
     * @param {*} amount
     */
    setCoins: function (amount) {
        let info = localStorage.getItem(this.localStorageKey);

        if (info) {
            info = JSON.parse(info);
            info.coins = amount;
            localStorage.setItem(this.localStorageKey, JSON.stringify(info));
        }
    },
};

// ? To run this, type in console: nomRunHack.setCoins(whatever amount you want);