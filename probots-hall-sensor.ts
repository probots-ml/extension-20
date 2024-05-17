
let lastHallState = 0;

namespace probots {

    //% block="magnetique fiel detected on %myPort=brickPort"
    //% weight=100
    //% subcategory="Hall Sensor"
    //% color=#99AA21
    export function hallSensor(myPort: any): boolean {
        led.enable(false);
        let reading = pins.digitalReadPin(myPort.P0);
        led.enable(true);
        if (reading != lastHallState) {
            lastHallState = reading;
            return true;
        }
        else {
            return false;
        }
    }

    //% block="hall value on %myPort=brickPort"
    //% weight=99
    //% subcategory="Hall Sensor"
    //% color=#99AA21
    export function hallSensorValue(myPort: any): number {
        led.enable(false);
        let reading = pins.digitalReadPin(myPort.P0);
        led.enable(true);
        return reading;
    }
}

