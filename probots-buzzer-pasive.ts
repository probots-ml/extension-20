// 2024-04-26
// Only allowed to connect in ports 6 and 7
// because the use of ports with no use of I2C.
// This sensor use the pin #6, normaly used by SDA 
// in the rest of ports

// 2024-05-13
// AnalogPitch only for pins P0, P1, P2


namespace probots {

    //% block="play %note=TONE by $time ms on %myPort=brickPortPitch"
    //% weight=100
    //% subcategory="Pasive Buzzer"
    //% color=#A31298
    export function buzzerPasiveOn(note:TONE, time:number, myPort: any): void {
 
        pins.analogSetPitchPin(myPort.P1);
        pins.analogPitch(note, time);
        return
    }

  
}