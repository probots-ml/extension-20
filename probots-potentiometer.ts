namespace probots {

    /**
     * Get a value of potentiometer. The range of reading could be between 0 from 100.
     * @param myPort port of connection
    */
    //% block="value of potentiometer in %myPort=brickPort"
    //% block.loc.es="valor del potenciómetro en puerto %myPort=brickPort"  
    //% jsdoc.loc.es="Devuelve el valor del potenciómetro de 0 a 100"
    //% weight=100
    //% subcategory="Potentiometer"
    //% color=#663377
    export function potentiometer(myPort: any): number {
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        return pins.map(analogValue, 0, 1023, 0, 100);
    }

}