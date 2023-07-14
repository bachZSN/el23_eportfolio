/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

var japBellSound = WA.sound.loadSound("audio/japanese_school_bell.mp3");
var japBellConfig = {
    volume : 0.5,
    loop : false,
    rate : 3,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    japBellSound.play(japBellConfig);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    const soundBellGlobalSubscriber = WA.room.onEnterLayer("soundBellGlobal").subscribe(() => {
        WA.state.bgmIsOn = true;
        japBellSound.play(japBellConfig);
    });
    
    WA.room.onLeaveLayer("soungBellGlobal").subscribe(() => {
       soundBellGlobalSubscriber.unsubscribe(); 
    });

}).catch(e => console.error(e));

export {};
