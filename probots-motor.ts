
enum MotorDirection {
    //% block="forward"
    forward,
    //% block="backward"
    backward
}

namespace probots{

    export class Motor {
        pin1: DigitalPin;
        pina1: AnalogPin;
        pin2: DigitalPin;
        pina2: AnalogPin;
        velocity: number;

        setVelocity(vel: number): void {
            let OutputVal = Math.clamp(0, 100, vel) * 10;
            this.velocity = OutputVal;
        }

        setpins(pin1: DigitalPin, pin2: DigitalPin): void {
            this.pin1 = pin1;
            this.pina1 = getAnalogPin(pin1);
            this.pin2 = pin2;
            this.pina2 = getAnalogPin(pin2);
        }
       
        /**
         * Set velocity and direction to a Motor.
         * @param dir direction of motor
         * @param speed velocity of motor
         */
        //% block="motor turn on direction %dir=MotorDirection speed $speed"  
        //% weight=99
        //% subcategory="Motor"
        //% color=#A135D9
        //% speed.min=0 speed.max=100
        motorOn(dir: MotorDirection, speed: number): void {
            this.setVelocity(speed);
            switch (dir) {
                case MotorDirection.forward:
                    pins.analogWritePin(this.pina1, this.velocity);
                    pins.digitalWritePin(this.pin2, 0);
                    break
                case MotorDirection.backward:
                    pins.analogWritePin(this.pina2, this.velocity);
                    pins.digitalWritePin(this.pin1, 0);
                    break
            }
        }

        /**
         * Turn off motor.
         */
        //% block="motor turn off"  
        //% weight=98
        //% subcategory="Motor"
        //% color=#A135D9
        motorOff(): void {
            pins.digitalWritePin(this.pin1, 0);
            pins.digitalWritePin(this.pin2, 0);
        }
    }

    
    /**
    * Add a motor to a specific port.
    * @param myPort port of motor connection
    */
    //% block="create motor on %myPort=brickPort" 
    //% weight=100
    //% subcategory="Motor"
    //% color=#A135D9
    //% blockSetVariable=motor
    export function createMotor(myPort: any): Motor {
        let motor = new Motor();
        motor.setpins(myPort.P0, myPort.P1);
        motor.setVelocity(0);
        return motor;
    }

}