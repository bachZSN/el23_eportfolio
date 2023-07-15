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
    console.log("Scripting Room API ready");
    console.log("Player tags: ", WA.player.tags);


});