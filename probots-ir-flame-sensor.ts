namespace probots {

    /**
        * Detect presence of a fire (flame).
        * @param myPort port of connection
       */
    //% blockId=flameSensor
    //% block="It is a presence of flame in %myPort=brickPortADC"
    //% block.loc.es="Se detecta la presencia de una llama en %myPort=brickPortADC"
    //% weight=100
    //% subcategory="IR Flame Sensor"
    //% color=#28C2B9
    export function flameSensor(myPort: any): boolean {     
       
        led.enable(false);
        let irFlame = pins.analogReadPin(getAnalogPin(myPort.P1));
        led.enable(true);
        
        if(irFlame >= 512)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

