

namespace probots {

    //% block="magnetique fiel detected on %myPort=brickPort"
    //% weight=100
    //% subcategory="Hall Sensor"
    //% color=#99AA21
    export function hallSensor(myPort: any): boolean {
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

