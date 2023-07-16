/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

var japBellSound = WA.sound.loadSound("../audio/japanese_school_bell.mp3");
var japBellConfig = {
    volume : 1,
    loop : false,
    rate : 3,
    detune : 0,
    delay : 0,
    seek : 0,
    mute : false
}
var bgmSound = WA.sound.loadSound("../audio/bgm.mp3");
var bgmConfig = {
    volume : 0.05,
    loop : true,
    rate : 1,
    detune : 0,
    delay : 0,
    seek : 0,
    mute : false
}

WA.onInit().then(() => {
    initBootstrap();
    setUpBgmLayer();
    setUpBellLeverLayer();
    setUpTestSwitchLayer();
}).catch(e => console.error(e));


/// play bell sound
function playBellSound() {
    japBellSound.play(japBellConfig);
}

/// flips WA stored bell variable
function flipBellVariable() {
    WA.state.bellIsOn = !WA.state.bellIsOn;
}

/// play bgm
function playBgm() {
    bgmSound.play(bgmConfig);
}

/// stop bgm
function stopBgm() {
    bgmSound.stop();
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
    WA.room.onEnterLayer("Util/bgmLayer").subscribe(() => {
        WA.ui.openPopup("bgmPopUp", "Hintergrundmusik abspielen", [
            {
                label: "Spielen",
                className: "success",
                callback: (popup) => {
                    playBgm();
                    popup.close();
                }
            },
            {
                label: "Stoppen",
                className: "primary",
                callback: (popup) => {
                    stopBgm();
                    popup.close();
                }
            }
        ])
    });
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
        ]);
    });

    WA.state.onVariableChange("bellIsOn").subscribe((value) => {
        if (value) {
            playBellSound();
        }
    });
}

/// loading switch PopUps and functions for layer
function setUpTestSwitchLayer() {
    WA.room.onEnterLayer("Util/switchTestLayer").subscribe(() => {
        WA.ui.openPopup("switchTestPopUp", "Test ändern auf", [
            {
                label: "Einführung",
                className: "success",
                callback: (popup) => {
                    switchToAnfangstest();
                    popup.close();
                }
            },
            {
                label: "Abschluss",
                className: "success",
                callback: (popup) => {
                    switchToEndTest();
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

        ]);
    });
}

/// switching on beginning test
function switchToAnfangstest() {
    WA.room.setProperty("Util/urlOnyxTest", "openWebsite", "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/40617082880?6");
    WA.room.setProperty("Util/urlOnyxTest", "openWebsiteTriggerMessage", "Leertaste um den Einführungstest zu beginnen");
}

/// switching on end test
function switchToEndTest() {
    WA.room.setProperty("Util/urlOnyxTest", "openWebsite", "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/40713125888?4");
    WA.room.setProperty("Util/urlOnyxTest", "openWebsiteTriggerMessage", "Leertaste um den Abschlusstest zu beginnen");
}