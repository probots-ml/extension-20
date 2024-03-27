namespace probots {

    //% block="value of potentiometer in %myPort=brickPort"
    //% block.loc.es="valor del potenciómetro en puerto %myPort=brickPort"  
    //% jsdoc.loc.en="Return de potentiometer value from 0 to 100"
    //% weight=100
    //% subcategory="Potentiometer"
    //% color=#663377
    export function potentiometer(myPort: any): number {
        let analogValue = pins.analogReadPin(getAnalogPin(myPort.P0))
        return pins.map(analogValue, 0, 1023, 0, 100); 
    }

}