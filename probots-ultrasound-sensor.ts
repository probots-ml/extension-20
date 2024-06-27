namespace probots {
      let _lastTimeOfReading:  number = 0;
      let _lastDistance: number = 0;
      
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
        
        //serial.writeValue("time", input.runningTime())
        if(input.runningTime() > _lastTimeOfReading)
        {       
            // send pulse
            let maxCmDistance = 500;
            pins.digitalWritePin(myPort.P0, 0);
            pins.digitalWritePin(myPort.P1, 0);
            
            pins.setPull(myPort.P0, PinPullMode.PullNone);
            pins.setPull(myPort.P1, PinPullMode.PullNone);

            pins.digitalWritePin(myPort.P1, 0);
            control.waitMicros(2);

            const p1 = pins.pulseIn(myPort.P1, PulseValue.High, maxCmDistance * 58);
            pins.digitalWritePin(myPort.P1, 1);    
            control.waitMicros(10);

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