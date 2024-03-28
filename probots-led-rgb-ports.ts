
namespace probots {

    //% block="LED RGB on %myPort=ConnectionPorts4Pins show color %color=ColorLedRGB"
    //% block.loc.es="LED RGB en %myPort=ConnectionPorts4Pins muestra el color %color=ColorLedRGB"
    //% subcategory="LED RGB"
    //% weight=90 color=#99AA05
    export function rgbPortOn(myPort: any, color: ColorLedRGB): void {
        switch (color) {
            case ColorLedRGB.Black:
                pins.digitalWritePin(myPort.P2, 0);
                pins.digitalWritePin(myPort.P1, 0);
                pins.digitalWritePin(myPort.P0, 0);
                break;
            case ColorLedRGB.White:
                pins.digitalWritePin(myPort.P2, 1);
                pins.digitalWritePin(myPort.P1, 1);
                pins.digitalWritePin(myPort.P0, 1);
                break;
            case ColorLedRGB.Red:
                pins.digitalWritePin(myPort.P2, 1);
                pins.digitalWritePin(myPort.P1, 0);
                pins.digitalWritePin(myPort.P0, 0);
                break;
            case ColorLedRGB.Green:
                pins.digitalWritePin(myPort.P2, 0);
                pins.digitalWritePin(myPort.P1, 0);
                pins.digitalWritePin(myPort.P0, 1);
                break;
            case ColorLedRGB.Blue:
                pins.digitalWritePin(myPort.P2, 0);
                pins.digitalWritePin(myPort.P1, 1);
                pins.digitalWritePin(myPort.P0, 0);
                break;
            case ColorLedRGB.Yellow:
                pins.analogWritePin(probots.getAnalogPin(myPort.P2), 1023); // red
                pins.digitalWritePin(myPort.P1, 0); // blue
                pins.analogWritePin(probots.getAnalogPin(myPort.P0), 128); // green
                break;
            case ColorLedRGB.Orange:
                //100% red 64.7% green 0% blue
                pins.digitalWritePin(myPort.P2, 1); //red
                pins.digitalWritePin(myPort.P1, 0); //blue
                pins.analogWritePin(probots.getAnalogPin(myPort.P0), 32);
                break;
            case ColorLedRGB.Violet:
                pins.digitalWritePin(myPort.P2, 1);
                pins.digitalWritePin(myPort.P1, 1);
                pins.digitalWritePin(myPort.P0, 0);
                break;
            case ColorLedRGB.Cyan:
                pins.digitalWritePin(myPort.P2, 0);
                pins.digitalWritePin(myPort.P1, 1);
                pins.digitalWritePin(myPort.P0, 1);
                break;
            default: break;
        }
        return
    }


    //% block="RGB LED on %myPort=ConnectionPorts4Pins show color %color=colores_rgb by %duration|ms"
    //% subcategory="LED RGB"
    //% weight=80 
    //% weight=90 color=#99AA05
    export function rgbPortOnByTime(myPort: any, color: ColorLedRGB, duration: number): void {
        rgbPortOn(myPort, color);
        basic.pause(duration);
        rgbPortOn(myPort, ColorLedRGB.Black);
        return
    }

    //% block="RGB LED on %myPort=ConnectionPorts4Pins turn off"
    //% subcategory="LED RGB"
    //% weight=75
    //% weight=90 color=#99AA05
    export function rgbPortOff(myPort: any) {
        rgbPortOn(myPort, ColorLedRGB.Black);
        return
    }
}
