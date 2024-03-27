namespace probots {

    //% block="value of potentiometer in %myPort=brickPort"
    //% block.loc.es="valor del potenciómetro en puerto %myPort=brickPort"  
    //% jsdoc.loc.en="Return the potentiometer value from 0 to 100"
    //% jsdoc.loc.es="Devuelve el valor del potenciómetro de 0 a 100"
    //% weight=100
    //% subcategory="Potentiometer"
    //% color=#663377
    export function potentiometer(myPort: any): number {
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P1))
        return pins.map(analogValue, 0, 1023, 0, 100);
    }

}