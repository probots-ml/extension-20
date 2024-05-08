// Enum data to use in microphone
enum soundIntensity {
    //% block="low"
    LOW,
    //% block="medium"
    MEDIUM,
    //% block="high"
    HIGH
}

namespace probots{
    /**
     * Detects a sound using a microphone, reading the intensity.
     * The sound intensity can vary from 0 to 100.
     * @param myPort port of connection
    */
    //% blockId=microphoneRead
    //% block="get the intensity of a sound in port %myPort=brickPortADC"
    //% subcategory="Sound Sensor"
    //% color=#88DD05
    //% weight=100
    export function microphoneRead(myPort: any): number {  
        let getDB = 0;     
        getDB = pins.analogReadPin(getAnalogPin(myPort.P1));
        getDB = pins.map(getDB, 0, 1023, 0, 100);
        return getDB;   
    }
}
