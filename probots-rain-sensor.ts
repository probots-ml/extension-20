namespace probots {

    /**
     * Detects if it is raining.
     * @param myPort port of connection
    */
    //% block="it is raining on %myPort=brickPortADC"
    //% weight=100
    //% subcategory="Rain Sensor"
    //% color=#A1A5A6
    export function isRaining(myPort: any): boolean {
        led.enable(false);
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        //led.enable(true);

        if (analogValue < 512) {
            return true;
        } else {
            return false;
        }
    }
   
}
