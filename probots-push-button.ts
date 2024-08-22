namespace probots {
    
    //% block="button was pressed on %myPort=brickPort"
    //% weight=100
    //% subcategory="Push Button"
    //% color=#663377
    export function isButtonPressed(myPort: any): boolean {
    
        led.enable(false);
        
        pins.setPull(myPort.P0, PinPullMode.PullUp);
        let reading = pins.digitalReadPin(myPort.P0);

        //led.enable(true);
        
        if (reading == 0) {
            return true;
        }
        else {
            return false;
        }
    }
   
}
