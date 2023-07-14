import { bootstrapExtra } from "@workadventure/scripting-api-extra/dist";

console.log('Script started successfully!');

let currentPopup: any = undefined;

WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);
    
    WA.room.area.onEnter('clock').subscribe(()  => {
        var anleitung = new String("Anleitung fuer das Bedienen der Station 1");


        currentPopup = WA.ui.openPopup("popup", anleitung.toString(), []);
    })

        WA.room.area.onLeave('clock').subscribe(closePopup)

        bootstrapExtra().then(() => {
            console.log('Scripting API Extra ready');
        }).catch(e => console.error(e));
    }
}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}