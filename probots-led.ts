


namespace probots {

    //% block="turn on LED on %myPort=brickPort"
    //% block.loc.es="encender LED en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="LED"
    //% color=#335566
    export function ledOn(myPort:any): void {
        pins.digitalWritePin(myPort.P0, 1);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }


    //% block="turn on LED on %myPort=brickPort with intensity %intensity"
    //% block.loc.es="encender LED en puerto %myPort=brickPort con itensidad %intensity"
    //% weight=98
    //% subcategory="LED"
    //% color=#335566
    //% intensity.default=50
    //% intensity.min=0 intensity.max=100
    export function ledOnWithPower(myPort: any, intensity: number): void {
        let intensityMapped = pins.map(intensity, 0, 100, 0, 1024);
        pins.analogWritePin(getAnalogPin(myPort.P0), intensityMapped);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }

    //% block="turn off LED on %myPort=brickPort"
    //% block.loc.es="apagar LED en puerto %myPort=brickPort"
    //% weight=97
    //% subcategory="LED"
    //% color=#335566
    export function ledOff(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 0);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }
}

