namespace probots {

    //% block="turn on Laser on %myPort=brickPort"
    //% block.loc.es="encender Láser en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Laser"
    //% color=#FF1122
    export function laserOn(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 1);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }

    //% block="turn Laser on %myPort=brickPort with intensity %intensity"
    //% block.loc.es="encender Láser en puerto %myPort=brickPort con itensidad %intensity"
    //% weight=98
    //% subcategory="Laser"
    //% color=#FF1122
    //% intensity.defl=50
    //% intensity.min=0 intensity.max=100
    export function laserOnWithPower(myPort: any, intensity: number): void {
        let intensityMapped = pins.map(intensity, 0, 100, 0, 1023);
        pins.analogWritePin(getAnalogPin(myPort.P0), intensityMapped);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }

    //% block="turn off Laser on %myPort=brickPort"
    //% block.loc.es="apagar Láser en puerto %myPort=brickPort"
    //% weight=97
    //% subcategory="Laser"
    //% color=#FF1122
    export function laserOff(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 0);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }
}

