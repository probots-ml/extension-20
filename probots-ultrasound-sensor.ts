namespace probots {
    /**
     * Get the distance in centimeters from an object. The maximum distance is 5 meters.
     * @param myPort port of connection
    */
    //% block="distance on %myPort=brickPort"
    //% block.loc.es="distancia en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Ultrasound Sensor"
    //% color=#F025A8
    export function ultrasoundDistance(myPort: any): number {
        // send pulse
        let maxCmDistance = 500;
        pins.setPull(myPort.P1, PinPullMode.PullNone);
        pins.digitalWritePin(myPort.P1, 0);
        control.waitMicros(2);
        pins.digitalWritePin(myPort.P1, 1);
        control.waitMicros(10);
        pins.digitalWritePin(myPort.P1, 0);
        // read pulse
        const d = pins.pulseIn(myPort.P0, PulseValue.High, maxCmDistance * 58);
        return Math.idiv(d, 58);
    }
}