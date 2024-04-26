/**
 * Available connections ports for the ebrick.
 */
enum ConnectionPorts {
    CON1 = 1,   //p8    p0
    CON2,       //p12   p1
    CON3,       //p16   p2
    CON4,       //p6    p3
    CON5,       //p7    p4
    CON6,       //p9    p10
    CON7,       //p13   p14
    CON8        //p15   p11
};

/**
 * Available I2C connections ports for the ebrick.
 */
enum I2CConnectionPorts {
    CON1 = 1,   
    CON2,       
    CON3,       
    CON4,       
    CON5,       
    CON8  = 8    
};

/**
 * Available ADC connections ports for the ebrick.
 */
enum ADCConnectionPorts {
    CON1 = 1,   
    CON2,       
    CON3,       
    CON4,       
    CON5,       
    CON6  
};

/**
 * Available 4 pins connections ports for the ebrick.
 */
enum ConnectionPorts4Pins {
    CON6 = 6,
    CON7 = 7
};

namespace probots{

/**
 * Description of any pinout connection over each port.
 */
let pinOut: any = {
    1: { P0: DigitalPin.P8,     P1: DigitalPin.P0,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    2: { P0: DigitalPin.P12,    P1: DigitalPin.P1,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    3: { P0: DigitalPin.P16,    P1: DigitalPin.P2,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    4: { P0: DigitalPin.P6,     P1: DigitalPin.P3,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    5: { P0: DigitalPin.P7,     P1: DigitalPin.P4,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    6: { P0: DigitalPin.P9,     P1: DigitalPin.P10, P2: DigitalPin.P5,  P3: DigitalPin.P11},
    7: { P0: DigitalPin.P13,    P1: DigitalPin.P14, P2: DigitalPin.P15, P3: DigitalPin.P16},
    8: { P0: DigitalPin.P15,    P1: DigitalPin.P11, P2: DigitalPin.P19, P3: DigitalPin.P20}
}

//% block="%portToUse"
//% blockId="brickPort"
//% block.locales.es="%portToUse"
//% subcategory="Miscellaneous"
//% weight=100
    export function brickPort(portToUse: ConnectionPorts): any {
    return pinOut[portToUse];
}

    //% block="I2C %portToUse"
    //% blockId="brickPortI2C"
    //% block.locales.es="I2C %portToUse"
    //% subcategory="Miscellaneous"
    //% weight=99
    export function brickPortI2C(portToUse: I2CConnectionPorts): any {
        return pinOut[portToUse];
}

    //% block="4 pins %portToUse"
    //% blockId="brickPort4Pins"
    //% block.locales.es="4 pines %portToUse"
    //% subcategory="Miscellaneous"
    //% weight=98
    export function brickPort4Pins(portToUse: ConnectionPorts4Pins): any {
        return pinOut[portToUse];
    }


    //% block="ADC %portToUse"
    //% blockId="brickPortADC"
    //% block.loc.es="ADC %portToUse"
    //% subcategory="Miscellaneous"
    //% weight=97
    export function brickPortADC(portToUse: ADCConnectionPorts): any {
        return pinOut[portToUse];
    }

export function getAnalogPin(pin: DigitalPin): any {
    switch (pin) {
        case DigitalPin.P0:
            return AnalogPin.P0;
            break;
        case DigitalPin.P1:
            return AnalogPin.P1;
            break;
        case DigitalPin.P2:
            return AnalogPin.P2;
            break;
        case DigitalPin.P3:
            return AnalogPin.P3;
            break;
        case DigitalPin.P4:
            return AnalogPin.P4;
            break;
        case DigitalPin.P5:
            return AnalogPin.P5;
            break;
        case DigitalPin.P6:
            return AnalogPin.P6;
            break;
        case DigitalPin.P7:
            return AnalogPin.P7;
            break;
        case DigitalPin.P8:
            return AnalogPin.P8;
            break;
        case DigitalPin.P9:
            return AnalogPin.P9;
            break;
        case DigitalPin.P10:
            return AnalogPin.P10;
            break;
        case DigitalPin.P11:
            return AnalogPin.P11;
            break;
        case DigitalPin.P12:
            return AnalogPin.P12;
            break;
        case DigitalPin.P13:
            return AnalogPin.P13;
            break;
        case DigitalPin.P14:
            return AnalogPin.P14;
            break;
        case DigitalPin.P15:
            return AnalogPin.P15;
            break;
        case DigitalPin.P16:
            return AnalogPin.P16;
            break;
        case DigitalPin.P19:
            return AnalogPin.P19;
            break;
        case DigitalPin.P20:
            return AnalogPin.P20;
            break;
    }
}

}