namespace probots {

    /**
     * Detects a objects if there is near a 1 centimeter or less.
     * Attention! Black objects can´t be detected!
     * Ideal to distinguish black from white colors.
     * @param myPort port of connection
    */
    //% block="sensor IR detects objects on %myPort=brickPort"  
    //% weight=100
    //% subcategory="IR Sensor"
    //% color=#A1A5A6
    export function infraredIsOn(myPort: any): boolean {

        return pins.digitalReadPin(myPort.P0) == 1? true : false;
        
    }
}

