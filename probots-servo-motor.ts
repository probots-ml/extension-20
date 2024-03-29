
namespace probots{
    /**
     * Servo motor that can turn between 0 to 180 degrees.
     */
    //% block="Servo on %myPort=brickPortADC degrees $degrees"
    //% weight=100
    //% subcategory="Servo Motor"
    //% color=#99AA21
    //% degrees.min=0 degrees.max=180 degrees.defl=90
    export function servoProbot(myPort: any, degrees: number) {
        return pins.servoWritePin(getAnalogPin(myPort.P0), degrees)
    }
}
