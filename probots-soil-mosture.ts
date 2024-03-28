namespace probots {

    //% block="high soil mosture on %myPort=brickPort"
    //% block.loc.es="humedad del suelo alta en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Soil Mosture"
    //% color=#BC21BC
    export function soilMosture(myPort: any): boolean {
        return pins.digitalReadPin(myPort.P0) === 1 ? false : true;
    }

    //% block="level soil mosture on %myPort=brickPort between 0 to 100"
    //% block.loc.es="nivel de humedad del suelo en puerto %myPort=brickPort entre 0 y 100"  
    //% weight=99
    //% subcategory="Soil Mosture"
    //% color=#BC21BC
    export function soilMostureLevel(myPort: any): number {
        return pins.map(pins.analogReadPin(getAnalogPin(myPort.P1)), 0, 1023, 0 , 100);
    }
}

