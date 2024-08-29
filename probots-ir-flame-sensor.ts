namespace probots {

    /**
        * Detect presence of a fire (flame) adjusting the sensitivity between 0 and 100.
        * @param myPort port of connection
       */
    //% blockId=flameSensor
    //% block="It is a presence of flame in %myPort=brickPortADC with sensitivity $sensitivity"
    //% weight=100
    //% subcategory="IR Flame Sensor"
    //% color=#28C2B9
    //%sensitivity.min=0 sensitivity.max=100  sensitivity.defl=90 
    export function flameSensor(myPort: any, sensitivity: number): boolean {     
       
        led.enable(false);
        let irFlame = pins.analogReadPin(getAnalogPin(myPort.P1));
        //led.enable(true);
        let sen = pins.map(sensitivity,100,0,0,1023)
        
        if (irFlame >= sen)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

