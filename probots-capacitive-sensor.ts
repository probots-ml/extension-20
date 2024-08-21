namespace probots {

    //% block="capacitive sensor is on %myPort=brickPort"
    //% block.loc.es="sensor capacitivo en puerto %myPort=brickPort"  
    //% weight=100
    //% subcategory="Capacitive Sensor"
    //% color=#663377
    export function capacitiveSensor(myPort: any): boolean {
        led.enable(false);
        let reading = pins.digitalReadPin(myPort.P0);
        led.enable(true);
        if (reading == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    let capacitiveSensorLastValue = 0;
    //% block="capacitive sensor has toggled %myPort=brickPort"  
    //% weight=99
    //% subcategory="Capacitive Sensor"
    //% color=#663377
    export function capacitiveSensorHasChanged(myPort: any): boolean {
        led.enable(false);
        let reading = pins.digitalReadPin(myPort.P0);
        led.enable(true);
        if (reading != capacitiveSensorLastValue) {
            capacitiveSensorLastValue = reading;
            return true;
        }
        else {
            return false;
        }
    }

}
