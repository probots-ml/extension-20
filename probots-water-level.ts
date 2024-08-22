namespace probots {

    /**
     * Read the level of water in a range from 0 (empty water) to 100 (full level).
     * @param myPort port of connection
    */
    //% blockId=waterLevel
    //% block="water level on %myPort=brickPortADC"
    //% weight=100
    //% subcategory="Water Level"
    //% color=#F93274
    export function waterLevel(myPort: any): number {
        led.enable(false);
        let actualLevel = pins.analogReadPin(getAnalogPin(myPort.P1));
        //led.enable(true);
        return pins.map(actualLevel, 1023, 0, 0, 100);
    }
}