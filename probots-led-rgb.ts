
namespace probots{
    
    //% block="LED RGB on CONN 7 show color %color=ColorLedRGB"
    //% block.loc.es="LED RGB en CONN 7 muestra el color %color=ColorLedRGB"
    //% subcategory="LED RGB"
    //% weight=90 color=#335566 icon="\uf0eb"
    //% help=github:extension-20/docs/led-rgb
    export function rgbOn(color: ColorLedRGB): void {
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
                pins.analogWritePin(probots.getAnalogPin(DigitalPin.P15), 1023); // red
                pins.digitalWritePin(DigitalPin.P14, 0); // blue
                pins.analogWritePin(probots.getAnalogPin(DigitalPin.P13), 128); // green
                break;
            case ColorLedRGB.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(DigitalPin.P15, 1); //red
                pins.digitalWritePin(DigitalPin.P14, 0); //blue
                pins.analogWritePin(probots.getAnalogPin(DigitalPin.P13), 32);
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
    //% weight=80 color=#335566 icon="\uf0eb"
    export function rgbOnByTime(color: ColorLedRGB, duration: number): void {
        rgbOn(color);
        basic.pause(duration);
        rgbOn(ColorLedRGB.Black);
        return
    }

    //% block="RGB LED on CONN 7 turn off"
    //% subcategory="LED RGB"
    //% weight=75 color=#335566 icon="\uf0eb"
    export function rgbOff() {
        rgbOn(ColorLedRGB.Black);
        return
    }
}
