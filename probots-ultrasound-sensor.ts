namespace probots {
      let _lastTimeOfReading:  number;
      let _lastDistance: number;
      
    /**
     * Get the distance in centimeters from an object. The maximum distance is 5 meters.
     * @param myPort port of connection
    */
    //% block="distance on %myPort=brickPort"  
    //% weight=100
    //% subcategory="Ultrasonic Sensor"
    //% color=#F025A8
    export function ultrasoundDistance(myPort: any): number {
        
        led.enable(false);

        if(input.runningTime() > _lastTimeOfReading)
        {       
            // send pulse
            let maxCmDistance = 400;
            pins.digitalWritePin(myPort.P1, 1);
            control.waitMicros(20);
            pins.digitalWritePin(myPort.P1, 0);

            // read pulse
            const d = pins.pulseIn(myPort.P0, PulseValue.High, maxCmDistance * 58);

            
            _lastDistance =  Math.idiv(d, 58);

            _lastTimeOfReading = input.runningTime() + 100;
        }

        led.enable(true);

        return _lastDistance;
    }
}