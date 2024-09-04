// Añade tu código aquí

let myBattery: probots.BatteryChecker;

input.onLogoEvent(TouchButtonEvent.Pressed, function () {  
    myBattery.showStatusCharge = !myBattery.showStatusCharge;  
})

namespace probots {
    export class BatteryChecker {
        showStatusCharge: boolean;
        statusWasShowed: boolean;
        isCharged: number;

        private soundCharging(): void{
            //music.setVolume(127)
            music.ringTone(262)
            music.rest(music.beat(BeatFraction.Sixteenth))
            music.ringTone(786)          
        }

        private soundCharged(): void{
            //music.setVolume(127)
            music.ringTone(988) 
        }

        checkBattery(): void {
                   
            if (this.showStatusCharge) 
            {
                music.setBuiltInSpeakerEnabled(true)

                pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
                this.statusWasShowed = false

                if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                    this.isCharged = 0
                }
                else {
                    this.isCharged = 1
                }

                if (0 == this.isCharged) {
                   
                    this.soundCharging()
                 
                }
                else if (1 == this.isCharged) {
                                 
                    this.soundCharging()                  
                }
                
            }
            else 
            {
                music.setBuiltInSpeakerEnabled(false)
                if (!statusWasShowed) {
                    statusWasShowed = true
                    music.stopAllSounds()                 
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