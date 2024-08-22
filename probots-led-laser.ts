namespace probots {

    //% block="turn on Laser on %myPort=brickPort"
    //% weight=100
    //% subcategory="Laser"
    //% color=#FF1122
    export function laserOn(myPort: any): void {
       // pins.digitalWritePin(myPort.P0, 1);
        led.enable(false);
        pins.digitalWritePin(myPort.P1, 1);
        return
    }

   
    //% block="turn off Laser on %myPort=brickPort"
    //% weight=99
    //% subcategory="Laser"
    //% color=#FF1122
    export function laserOff(myPort: any): void {
        //pins.digitalWritePin(myPort.P0, 0);
        led.enable(false);
        pins.digitalWritePin(myPort.P1, 0);
        return
    }
}

