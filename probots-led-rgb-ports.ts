/**
 * Colors to use in a RGB LED.
 */
enum ColorLedRGB {
    //% block=red
    Red = 0,
    //% block=green
    Green,
    //% block=blue
    Blue,
    //% block=yellow
    Yellow,
    //% block=orange
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

namespace probots {

    //% blockId=rgbPortOn
    //% block="LED RGB on %myPort=brickPort4Pins show color %color=ColorLedRGB"
    //% subcategory="LED RGB"
    //% weight=90 color=#99AA05
    export function rgbPortOn(myPort: any, color: ColorLedRGB): void {
        
        //2024-05-10: invert green and blue
        //2024-08-22: led.enable(false)
        let ledRed = myPort.P2;
        let ledGreen = myPort.P0;
        let ledBlue = myPort.P1;

        led.enable(false);
        pins.digitalWritePin(ledRed, 0);
        pins.digitalWritePin(ledGreen, 0);
        pins.digitalWritePin(ledBlue, 0);

        switch (color) {
            case ColorLedRGB.Black:
                pins.digitalWritePin(ledRed, 0);
                pins.digitalWritePin(ledGreen, 0);
                pins.digitalWritePin(ledBlue, 0);
                break;
            case ColorLedRGB.White:
                pins.digitalWritePin(ledRed, 1);
                pins.digitalWritePin(ledGreen, 1);
                pins.digitalWritePin(ledBlue, 1);
                break;
            case ColorLedRGB.Red:
                pins.digitalWritePin(ledRed, 1);
                pins.digitalWritePin(ledGreen, 0);
                pins.digitalWritePin(ledBlue, 0);
                break;
            case ColorLedRGB.Green:
                pins.digitalWritePin(ledRed, 0);
                pins.digitalWritePin(ledGreen, 1);
                pins.digitalWritePin(ledBlue, 0);
                break;
            case ColorLedRGB.Blue:
                pins.digitalWritePin(ledRed, 0);
                pins.digitalWritePin(ledGreen, 0);
                pins.digitalWritePin(ledBlue, 1);
                break;
            case ColorLedRGB.Yellow:
                pins.analogWritePin(probots.getAnalogPin(ledRed), 1023); // red
                pins.analogWritePin(probots.getAnalogPin(ledGreen), 128); // green
                pins.digitalWritePin(ledBlue, 0); // blue               
                break;
            case ColorLedRGB.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(ledRed, 1); //red
                pins.analogWritePin(probots.getAnalogPin(ledGreen), 32);
                pins.digitalWritePin(ledBlue, 0); //blue
                break;
            case ColorLedRGB.Violet:
                pins.digitalWritePin(ledRed, 1);
                pins.digitalWritePin(ledGreen, 0);
                pins.digitalWritePin(ledBlue, 1);
                break;
            case ColorLedRGB.Cyan:
                pins.digitalWritePin(ledRed, 0);
                pins.digitalWritePin(ledGreen, 1);
                pins.digitalWritePin(ledBlue, 1);
                break;
            default: break;
        }
        return
    }

    //% blockId=rgbPortOnByTime
    //% block="RGB LED on %myPort=brickPort4Pins show color %color=colores_rgb by %duration|ms"
    //% subcategory="LED RGB"
    //% weight=80 
    //% weight=90 color=#99AA05
    export function rgbPortOnByTime(myPort: any, color: ColorLedRGB, duration: number): void {
        rgbPortOn(myPort, color);
        basic.pause(duration);
        rgbPortOn(myPort, ColorLedRGB.Black);
        return
    }

    //% blockId=rgbPortOff
    //% block="RGB LED on %myPort=brickPort4Pins turn off"
    //% subcategory="LED RGB"
    //% weight=75
    //% weight=90 color=#99AA05
    export function rgbPortOff(myPort: any) {
        rgbPortOn(myPort, ColorLedRGB.Black);
        return
    }
}
