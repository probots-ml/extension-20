enum ColorLedRGB {
    //% block=red
    Red = 0,
    //% block=green
    Green,
    //% block=blue
    Blue,
    //% block=orange
    Yellow,
    //% block=yellow
    Orange,
    //% block=violet
    Violet,
    //% block=cyan
    Cyan,
    //% block=white
    White,
    //% block=black
    Black
}

namespace probots{
    
    //% block="LED RGB on CONN 7 show color %color=ColorLedRGB"
    //% subcategory="LED RGB"
    //% weight=100 color=#335566 icon="\uf0eb"
    export function rgbOn(color: ColorLedRGB) {
        switch (color) {
            case ColorLedRGB.Black:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case ColorLedRGB.White:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case ColorLedRGB.Red:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case ColorLedRGB.Green:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case ColorLedRGB.Blue:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case ColorLedRGB.Yellow:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            case ColorLedRGB.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(DigitalPin.P15, 1); //red
                pins.digitalWritePin(DigitalPin.P14, 0); //blue
                pins.analogWritePin(probots.getAnalogPin(DigitalPin.P13), 128);
                break;
            case ColorLedRGB.Violet:
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case ColorLedRGB.Cyan:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                break;
            default: break;
        }
        return
    }


    //% block="RGB LED on CONN 7 show color %color=colores_rgb by %duration|ms"
    //% subcategory="LED RGB"
    //% weight=90 color=#335566 icon="\uf0eb"
    export function rgbOnByTime(color: ColorLedRGB, duration: number) {
        rgbOn(color);
        basic.pause(duration);
        rgbOn(ColorLedRGB.Black);
        return
    }

    //% block="RGB LED on CONN 7 turn off"
    //% subcategory="LED RGB"
    //% weight=80 color=#335566 icon="\uf0eb"
    export function rgbOff() {
        rgbOn(ColorLedRGB.Black);
        return
    }
}
