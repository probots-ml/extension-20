namespace probots {

    //% block="limit switch was reached on %myPort=brickPort"
    //% block.loc.es="final de carrera activo en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Limit Switch"
    //% color=#FF0099
    export function isLimitSwitchReached(myPort: any): boolean {

        led.enable(false);
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
