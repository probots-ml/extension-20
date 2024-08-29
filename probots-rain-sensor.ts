namespace probots {

    /**
     * Detects if it is raining, and ajust sensitivity between 0 and 100.
     * @param myPort port of connection
    */
    //% block="it is raining on %myPort=brickPortADC with sensitivity $sensitivity"
    //% weight=100
    //% subcategory="Rain Sensor"
    //% color=#A1A5A6
    //% sensitivity.min=0 sensitivity.max=100  sensitivity.defl=50
    export function isRaining(myPort: any, sensitivity: number): boolean {
        led.enable(false);
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        //led.enable(true);

        let sen = pins.map(sensitivity, 0, 100, 0, 1023)

        if (analogValue < sen) {
            return true;
        } else {
            return false;
        }
    }
   
}
