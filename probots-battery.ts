input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    statusWasShowed = false
    showStatusCharge += 1
    if (showStatusCharge >= 2) {
        showStatusCharge = 0
    }
})

let showStatusCharge = 0
let isCharged = 0
let statusWasShowed = false;

namespace probots {
    //% block="Check Battery Charge"
    //% weight=100
    //% subcategory="Battery"
    //% color=#EE1111
    export function checkBatteryCharge()  {
        while (!statusWasShowed)
        {
            if (showStatusCharge == 1) {
                pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
                if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                    isCharged = 0
                } else {
                    isCharged = 1
                }
                if (0 == isCharged) {
                    led.enable(true)
                    basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
                } else if (1 == isCharged) {
                    led.enable(true)
                    basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
                }
            } else {
                led.enable(true)
                if (!statusWasShowed) {
                    statusWasShowed = true

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

}