namespace probots{

    //% blockId=showSerialNumber
    //% block="print number $myNum"
    //% weight=99
    //% subcategory="Serial"
    //% color=#F93274
    export function showSerialNumber(myNum: number):void{
        serial.writeNumber(myNum);
        serial.writeLine("");
    }

    //% blockId=showSerialNumber
    //% block="print text $myText"
    //% weight=100
    //% subcategory="Serial"
    //% color=#F93274
    export function showSerialText(myText: string): void {
        serial.writeLine(myText);
    }
}
