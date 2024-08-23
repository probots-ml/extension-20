input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    showStatusCharge += 1
    if (showStatusCharge >= 2) {
        showStatusCharge = 0
    }
})

let showStatusCharge = 0
let isCharged = 0

namespace probots {

    //% block="Check Battery Charge"
    //% weight=100
    //% subcategory="Battery"
    //% color=#EE1111
    export function checkBatteryCharge()  {
        if (showStatusCharge == 1) {
            pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
            if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                isCharged = 0
            } else {
                isCharged = 1
            }
            if (0 == isCharged) {
                basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
            } else if (1 == isCharged) {
                basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
            }
        } else {
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