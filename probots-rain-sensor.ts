namespace probots {

    /**
     * Detects if it is raining.
     * @param myPort port of connection
    */
    //% block="it is raining on %myPort=brickPort"  
    //% weight=100
    //% subcategory="Rain Sensor"
    //% color=#A1A5A6
    export function isRaining(myPort: any): boolean {
        led.enable(false);
        let result = pins.digitalReadPin(myPort.P0);
        led.enable(true);

        if (result == 1) {
            return true;
        } else {
            return false;
        }
    }
}
