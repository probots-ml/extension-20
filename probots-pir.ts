namespace probots {

    //% block="activity was detected on %myPort=brickPort"
    //% weight=100
    //% subcategory="PIR Sensor"
    //% color=#663377
    export function pirSensor(myPort: any): boolean {

        led.enable(false);

        let reading = pins.digitalReadPin(myPort.P0);

        //led.enable(true);

        if (reading == 1) {
            return true;
        }
        else {
            return false;
        }
    }

}
