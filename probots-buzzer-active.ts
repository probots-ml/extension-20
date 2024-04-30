// 2024-04-26
// Only allowed to connect in ports 6 and 7
// because the use of ports with no use of I2C.
// This sensor use the pin #6, normaly used by SDA 
// in the rest of ports

namespace probots{

    //% block="turn buzzer on on %myPort=brickPort4Pins"
    //% weight=100
    //% subcategory="Active Buzzer"
    //% color=#A39122
    export function buzzerActiveOn(myPort: any): void {    
        pins.digitalWritePin(myPort.P3, 1);
        return
    }

    //% block="turn buzzer off on %myPort=brickPort4Pins"
    //% weight=99
    //% subcategory="Active Buzzer"
    //% color=#A39122
    export function buzzerActiveOff(myPort: any): void {
        pins.digitalWritePin(myPort.P3, 0);
        return
    } 
}
