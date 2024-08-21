

namespace probots {

    //% block="turn on LED on %myPort=brickPort"
    //% block.loc.es="encender LED en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="LED"
    //% color=#335566
    export function ledOn(myPort:any): void {
        led.enable(false);
        pins.digitalWritePin(myPort.P0, 1);
        //pins.digitalWritePin(myPort.P1, 0);
        //led.enable(true);
        return
    }

    //% block="turn on LED on %myPort=brickPort with intensity %intensity"
    //% block.loc.es="encender LED en puerto %myPort=brickPort con itensidad %intensity"
    //% weight=98
    //% subcategory="LED"
    //% color=#335566
    //% intensity.defl=50
    //% intensity.min=0 intensity.max=100
    export function ledOnWithPower(myPort: any, intensity: number): void {
        led.enable(false);
        let intensityMapped = pins.map(intensity, 0, 100, 0, 1023);
        pins.analogWritePin(getAnalogPin(myPort.P1), intensityMapped);
        pins.digitalWritePin(myPort.P0, 1);
        return
    }

    //% block="turn off LED on %myPort=brickPort"
    //% block.loc.es="apagar LED en puerto %myPort=brickPort"
    //% weight=97
    //% subcategory="LED"
    //% color=#335566
    export function ledOff(myPort: any): void {
        led.enable(false);
        pins.digitalWritePin(myPort.P0, 0);
        //pins.digitalWritePin(myPort.P1, 1);
        //led.enable(true);
        return
    }
}

