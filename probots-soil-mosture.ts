namespace probots {

    /**
         * Detects a if there is enough humidity in the soil.
         * @param myPort port of connection
    */
    //% block="high soil mosture on %myPort=brickPort"
    //% weight=100
    //% subcategory="Soil Mosture"
    //% color=#BC21BC
    export function soilMosture(myPort: any): boolean {
        led.enable(false)
        let result =  pins.digitalReadPin(myPort.P0);
        //led.enable(true);
        if(result == 1){
            return false;
        } else {
            return true;
        }
    }


    /**
         * Get the level of soil humidity. The value goes from 0 (dry) to 100 (wet).
         * @param myPort port of connection
        */
    //% block="level soil mosture on %myPort=brickPortADC"
    //% block.loc.es="nivel de humedad del suelo en puerto %myPort=brickPortADC"  
    //% weight=99
    //% subcategory="Soil Mosture"
    //% color=#BC21BC
    export function soilMostureLevel(myPort: any): number {
        led.enable(false);
        let soilMostureValue = pins.map(pins.analogReadPin(getAnalogPin(myPort.P1)), 1023, 0, 0, 100)
        //serial.writeLine("soil=" + soilMostureValue);
        led.enable(true);
        return soilMostureValue;
    }
}

