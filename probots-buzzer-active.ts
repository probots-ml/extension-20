// 2024-04-26
// Only allowed to connect in ports 6 and 7
// because the use of ports with no use of I2C.
// This sensor use the pin #6, normaly used by SDA 
// in the rest of ports

// 2024-05-20
// The pins connection was changed to P0

// 2024-08-29
// Problems with PNP transistor: always sound. Solution, power with 3.3 Volts

namespace probots{

    //% block="turn buzzer on on %myPort=brickPortLowerPower"
    //% weight=100
    //% subcategory="Active Buzzer"
    //% color=#A39122
    export function buzzerActiveOn(myPort: any): void {   
        led.enable(false) 
        pins.digitalWritePin(myPort.P0, 0);
        return
    }

    //% block="turn buzzer off on %myPort=brickPortLowerPower"
    //% weight=99
    //% subcategory="Active Buzzer"
    //% color=#A39122
    export function buzzerActiveOff(myPort: any): void {
        led.enable(false)
        pins.digitalWritePin(myPort.P0, 1);
        return
    } 
}
