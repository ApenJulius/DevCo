"use strict";

function finishSubmission() {
    if (
        suspect == undefined ||
        weapon == undefined ||
        answerLocation == undefined ||
        answerDate == undefined
    ) {
        console.error("Wait for the game to start!");
        return;
    } else {
        const suspectInformation = suspect;
        const weaponInformation = weapon;
        const locationInformation = answerLocation;
        const dateInformation = answerDate;

        let answer = `${suspectInformation.name} with a ${weaponInformation.name} at ${locationInformation.name} in ${dateInformation}`;

        document.getElementById("answer_field").value = answer;

        var submitButton = document.getElementById("answer_submit");
        submitButton.click();
    }
}
