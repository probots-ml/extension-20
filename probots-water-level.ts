namespace probots {

    /**
     * Read the level of water in a range from 0 (empty water) to 100 (full level).
     * @param myPort port of connection
    */
    //% blockId=level
    //% block="Water leve on %myPort=brickPortADC"
    //% block.loc.es="nivel de agua en el puerto %myPort=brickPortADC"
    //% weight=100
    //% subcategory="Water Level"
    //% color=#F93274
    export function level(myPort: any): number {

        let actualLevel = pins.analogReadPin(getAnalogPin(myPort.P1));
        
        return pins.map(actualLevel, 0, 1023, 0, 100);
    }
}