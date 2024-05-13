namespace probots {
      
    /**
     * Get the distance in centimeters from an object. The maximum distance is 5 meters.
     * @param myPort port of connection
    */
    //% block="distance on %myPort=brickPort"  
    //% weight=100
    //% subcategory="Ultrasonic Sensor"
    //% color=#F025A8
    export function ultrasoundDistance(myPort: any): number {
        led.enable(false);

        // send pulse
        let maxCmDistance = 500;
        pins.digitalWritePin(myPort.P1, 0);
        control.waitMicros(10);
        pins.digitalWritePin(myPort.P1, 1);

        led.enable(true);
        
        // read pulse
        const d = pins.pulseIn(myPort.P0, PulseValue.High, maxCmDistance * 58);
        return Math.idiv(d, 58);
    }
}