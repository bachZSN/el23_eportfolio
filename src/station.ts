/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

var japBellSound = WA.sound.loadSound("../audio/japanese_school_bell.mp3");
var japBellConfig = {
    volume : 0.5,
    loop : false,
    rate : 3,
    detune : 0,
    delay : 0,
    seek : 0,
    mute : false
}

WA.onInit().then(() => {
    initBootstrap();
    setUpBgmLayer();
    setUpBellLeverLayer();

}).catch(e => console.error(e));


/// play bell sound
function playBellSound() {
    japBellSound.play(japBellConfig);
}

/// flips WA stored bell variable
function flipBellVariable() {
    WA.state.bellIsOn = !WA.state.bellIsOn;
}

/// init bootstrap
function initBootstrap() {
    console.log("Scripting Room API ready");
    console.log("Player tags: ", WA.player.tags);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
}

/// setup the popup and function of the bgm
function setUpBgmLayer() {

}

/// setup the popup and function of the bell
function setUpBellLeverLayer() {
    WA.room.onEnterLayer("Util/leverLayer").subscribe(() => {
        WA.ui.openPopup("klingelPopUp", "Möchtest du die Glocke läuten", [
            {
                label: "Läuten",
                className: "success",
                callback: (popup) => {
                    flipBellVariable();
                    flipBellVariable();
                    popup.close();
                }
            },
            {
                label: "Schließen",
                className: "primary",
                callback: (popup) => {
                    popup.close();
                }
            }
        ])
    });

    WA.state.onVariableChange("bellIsOn").subscribe((value) => {
        if (value) {
            playBellSound();
        }
    });
}
