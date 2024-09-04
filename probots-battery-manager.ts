// Añade tu código aquí

let myBattery: probots.BatteryChecker;

//checkBatteryCharge

input.onLogoEvent(TouchButtonEvent.Pressed, function () {  
    myBattery.showStatusCharge = !myBattery.showStatusCharge;
    //serial.writeString("show=" + myBattery.showStatusCharge.toString())
})

namespace probots {
    export class BatteryChecker {
        showStatusCharge: boolean;
        statusWasShowed: boolean;
        isCharged: number;

        checkBattery(): void {
                   
            while (this.showStatusCharge) {

                //serial.writeString("checkBattery true")

                //pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
                this.statusWasShowed = false

                if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                    this.isCharged = 0
                }
                else {
                    this.isCharged = 1
                }

                if (0 == this.isCharged) {
                    led.enable(true)
                    basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
                }
                else if (1 == this.isCharged) {
                    led.enable(true)
                    basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
                }
                //serial.writeString("batery " + this.isCharged.toString())
            }
            //else {
            {
                if (!statusWasShowed) {
                    statusWasShowed = true
                    led.enable(true)

                    basic.showLeds(`
				. . . . .
				. . . . .
				. . . . .
				. . . . .
				. . . . .
				`)
                }
            }
        }
    }

    export function CreateBatteryChecker(): BatteryChecker {
        let battery = new BatteryChecker();
        battery.showStatusCharge = false;
        return battery;
    }
}