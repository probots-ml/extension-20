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


    /**
     * Detects if a sound is at least equal to the selected intensity.
     * @param db select the intensity of the sound
     * @param myPort port of connection
    */
    //% blockId=microphoneDetectSound
    //% block="there is a sound %db=soundIntensity in port %myPort=brickPortADC"
    //% db.defl=soundIntensity.MEDIUM
    //% subcategory="Sound Sensor"
    //% color=#88DD05
    //% weight=99
    export function microphoneDetectSound(db: soundIntensity, myPort: any): boolean {

        let initialValue = 0;
        let getDB = 0;

        for (let i = 0; i < 100; i++) {
            getDB = pins.analogReadPin(getAnalogPin(myPort.P1));
            if (getDB > initialValue) {
                initialValue = getDB;
            }
        }

        //serial.writeLine("db=" + initialValue);

        if (db == soundIntensity.HIGH && initialValue >= 1000) {
            return true;
        }
        else if (db == soundIntensity.MEDIUM && initialValue >= 950) {
            return true;
        }
        else if (db == soundIntensity.LOW && initialValue >= 900) {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * Detects deltas in a sound is at least equal to the selected intensity.
     * @param db select the intensity of the sound
     * @param myPort port of connection
    */
    //% blockId=microphoneDeltaSound
    //% block="delta sound %db=soundIntensity in port %myPort=brickPortADC"
    //% db.defl=soundIntensity.LOW
    //% subcategory="Sound Sensor"
    //% color=#88DD05
    //% weight=98
    export function microphoneDeltaSound(db: soundIntensity, myPort: any): number {

        let getDB = 0;
        let max = 0;
        let min = 1024;
        let delta = 0;

        for (let i = 0; i < 100; i++) {
            getDB = pins.analogReadPin(getAnalogPin(myPort.P1));
            max = Math.max(max, getDB);
            min = Math.min(min, getDB);
        }

        delta = max - min;
       
       return delta;
    /*
        if (db == soundIntensity.HIGH && delta >= 20) {
            return true;
        }
        else if (db == soundIntensity.MEDIUM && initialValue >= 950) {
            return true;
        }
        else if (db == soundIntensity.LOW && initialValue >= 900) {
            return true;
        }
        else {
            return false;
        }
        */
    }

}
