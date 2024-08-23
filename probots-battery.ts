// Añade tu código aquí
namespace probots {

    //% block="Check Battery Charge"
    //% weight=100
    //% subcategory="Battery"
    //% color=#EE1111
    export function checkBatteryCharge()  {

        led.enable(false);
        let pinCHRG = DigitalPin.P16
        pins.setPull(pinCHRG, PinPullMode.PullUp);
        let reading = pins.digitalReadPin(pinCHRG);

        if (reading == 0) {
                basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `);
        }
        else {
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `);
        }
    }

}