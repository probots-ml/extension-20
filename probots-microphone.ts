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

    let lastMax = 0;
    let lastMin = 0;

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

        let deltaSound = microphoneDeltaSound(myPort);

        if (db == soundIntensity.HIGH && deltaSound >= 25) {
            return true;
        }
        else if (db == soundIntensity.MEDIUM && deltaSound >= 15) {
            return true;
        }
        else if (db == soundIntensity.LOW && deltaSound >= 5) {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * Read the intensity of a sound using the microphone, using a range from 0 to 100.
     * @param myPort port of connection
    */
    //% blockId=microphoneDeltaSound
    //% block="get sound in port %myPort=brickPortADC"
    //% subcategory="Sound Sensor"
    //% color=#88DD05
    //% weight=98
    export function microphoneDeltaSound(myPort: any): number {

        let getDB = 0;
        let max = 0;
        let min = 1024;
        let delta = 0;

        for (let i = 0; i < 100; i++) {
            getDB = pins.analogReadPin(getAnalogPin(myPort.P1));
            max = Math.max(max, getDB);
            min = Math.min(min, getDB);
        }

        delta = 0.5 * (max + lastMax) - 0.5 * (min + lastMin);
    
        lastMax = max;
        lastMin = min;

        return pins.map(delta, 0 , 1023, 0 , 100);   
    }

}
