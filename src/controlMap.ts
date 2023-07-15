/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import {getLayersMap, findLayerBoundaries} from '@workadventure/scripting-api-extra';
import {ITiledMapTileLayer} from "@workadventure/tiled-map-type-guard/dist/ITiledMapTileLayer";
import {openConfig} from '@workadventure/scripting-api-extra';

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

const layersAll = await getLayersMap();
const soundStuffLayer = layersAll.get("sound") as ITiledMapTileLayer;

//const paintArea =  ;

const paintControlArea = WA.room.area.create({
    name: "paintControlArea",
    x: 7,
    y: 18,
    width: 4,
    height: 4
});

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    japBellSound.play(japBellConfig);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    WA.room.onEnterLayer("soundBellGlobal").subscribe(() => {
        WA.state.bgmIsOn = true;
        japBellSound.play(japBellConfig);
    });
    
    //WA.room.onLeaveLayer("soundBellGlobal").subscribe(() => {
    //   soundBellGlobalSubscriber.unsubscribe(); 
    //});

    let soundBellPopUp;
    WA.room.onEnterLayer("soundLever").subscribe(() => {
        soundBellPopUp = WA.ui.openPopup("bellControlPopUp", "Möchtest du die Glocke läutern", [
            {
                label: "Läuten",
                className: "success",
                callback: (popup) => {
                    japBellSound.play(japBellConfig);
                    popup.close();
                }
            },
            {
                label: "Schließen",
                className: "primary",
                callback: (popup) => {
                    popup.close();
                    logBoundariesSoundLayer();
                }
            }
        ]);
    });

    WA.room.onLeaveLayer("soundLever").subscribe(() => {
        //soundBellPopUp.close();
    });

    //WA.state.onVariableChange('bgmIsOn')
}).catch(e => console.error(e));

export {};

function logBoundariesSoundLayer() {
    const boundaries = findLayerBoundaries(soundStuffLayer);
    console.log(soundStuffLayer);
    console.log('Top:' , boundaries.top);
    console.log('Left:' , boundaries.left);
    console.log('Bottom:' , boundaries.bottom);
    console.log('Right:' , boundaries.right);
}

