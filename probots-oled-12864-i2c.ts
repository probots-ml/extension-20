// Se debe importar la librería:
// https://github.com/probots-ml/OLED12864_I2C

namespace probots{

    /*
    * initialize the OLED screen
    * @param i2cAddress default I2C address value is 60
    */
    //% blockId="createOLED"
    //% block="init OLED in I2C address $i2cAddress"
    //% i2cAddress.defl=60
    //% subcategory="OLED Screen"
    //% color=#442299 
    //% weight=100
    export function createOLED(i2cAddress: number): void {
        OLED12864_I2C.init(i2cAddress)
        OLED12864_I2C.clear()
    }

    //% blockId="oledClearScreen"
    //% block="clear screen"
    //% subcategory="OLED Screen"
    //% color=#442299 
    //% weight=99
    export function oledClearScreen(): void {
        OLED12864_I2C.clear();
    }

    //% blockId="oledSetText"
    //% block="set text $text in line $y at position $x"
    //% text.defl="hello"
    //% y.defl=0
    //% x.defl=0
    //% subcategory="OLED Screen"
    //% color=#442299 
    //% weight=98
    export function oledSetText(x: number, y: number, text: string): void {
        OLED12864_I2C.showString(x, y, text);
    }

    //% blockId="oledSetNumber"
    //% block="set number $myNumber in line $y at position $x"
    //% myNumber.defl=99
    //% y.defl=0
    //% x.defl=0
    //% subcategory="OLED Screen"
    //% color=#442299 
    //% weight=97
    export function oledSetNumber(x: number, y: number, myNumber: number): void {
        OLED12864_I2C.showNumber(x, y, myNumber);
    }
}
