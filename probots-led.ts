
//% subcategory="LED"
//% weight=100
//% color=#335566
namespace probots {

    //% block="turn on LED on %myPort=brickPort"
    //% block.loc.es="encender LED en puerto %myPort=brickPort"  
    //% weight=100
    export function ledOn(myPort:any): void {

        pins.digitalWritePin(myPort.P0, 1);
               
        return
    }


    //% block="turn off LED on %myPort=brickPort"
    //% block.loc.es="apagar LED en puerto %myPort=brickPort"
    //% weight=99
    export function ledOff(myPort: any): void {

        pins.digitalWritePin(myPort.P0, 0);

        return
    }
}

