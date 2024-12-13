namespace probots {

    /**
     * Get a value of potentiometer. The range of reading could be between 0 from 100.
     * @param myPort port of connection
    */
    //%blockId=potentiometer
    //% block="value of potentiometer in %myPort=brickPortADCLowerPower"
    //% weight=100
    //% subcategory="Potentiometer"
    //% color=#663377
    export function potentiometer(myPort: any): number {
        //led.enable(false);
        //let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        //led.enable(true);
        let analogValue = potentiometerAnalogRead(myPort)
        
        return pins.map(analogValue, 0, 750, 100, 0);
    }

    
    function potentiometerAnalogRead(myPort: any): number {
        led.enable(false);
        let analogValue = Math.clamp(0, 750, pins.analogReadPin(getAnalogPin(myPort.P1)))
        return analogValue;
    }
}