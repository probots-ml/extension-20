namespace probots {

    //% block="turn relay on on %myPort=brickPort"
    //% weight=100
    //% subcategory="Relay"
    //% color=#A39122
    export function relayOn(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 1);
        return
    }

    //% block="turn relay off on %myPort=brickPort"
    //% weight=99
    //% subcategory="Relay"
    //% color=#A39122
    export function relayOff(myPort: any): void {
        pins.digitalWritePin(myPort.P0, 0);
        return
    }
}
