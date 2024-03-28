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
     * Detects a sound using a microphone, setting the intensity of the sound.
     * @param db select the intensity of the sound
     * @param myPort port of connection
    */
    //% blockId=microphoneDetectSound
    //% block="there is a sound %db=soundIntensity in port %myPort=brickPort"
    //% subcategory="Sound Sensor"
    //% color=#555505
    //% weight=100
    //% block.loc.es="sonido %db=soundIntensity in puerto %myPort=brickPort"
    export function microphoneDetectSound(db: soundIntensity, myPort: any): boolean {
        
        let initialValue = 0;
        let getDB = 0;

        for(let i = 0; i < 100; i++)
        {
            getDB = pins.analogReadPin(getAnalogPin(myPort.P1));
            if(getDB > initialValue)
            {
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
}
