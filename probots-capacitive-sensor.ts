namespace probots {

    //% block="capacitive sensor touched on %myPort=brickPort"
    //% block.loc.es="sensor capacitivo en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Capacitive Sensor"
    //% color=#663377
    export function capacitiveSensor(myPort: any): boolean {
        led.enable(false);
        let reading = pins.digitalReadPin(myPort.P0);
        led.enable(true);
        if (reading == 0) {
            return false;
        }
        else {
            return true;
        }
    }

}
