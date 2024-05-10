namespace probots {
    /**
     * Detects the amount of light using LDR sensor, in a range from 0 (no light) to 100 (maximum amount of light).
     * @param myPort port of connection
    */
    //% blockId=ldrValue
    //% block="LDR value on %myPort=brickPortADC"
    //% weight=100
    //% subcategory="LDR Sensor"
    //% color=#F93274
    export function ldrValue(myPort: any): number {

        let ldrVal = pins.analogReadPin(getAnalogPin(myPort.P1));
        
        return pins.map(ldrVal,0,1023,0,100);
    }
}

