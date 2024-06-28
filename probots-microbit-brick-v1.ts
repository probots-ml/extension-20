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
 * Ports with I2C connections for the ebrick.
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
 * Ports with ADC connections for the ebrick.
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
 * Ports with 4 pins connections for the ebrick.
 */
enum ConnectionPorts4Pins {
    CON6 = 6,
    CON7 = 7
};


/**
 * Ports with 2 analog pins connections.
 */
enum ConnectionPorts2AnalogPins {
    CON6 = 6
};

/**
 * Ports with analog pins pitch.
 */
enum ConnectionPortsAnalogPitch {
    CON1 = 1,
    CON2,
    CON3
};

namespace probots{

    pins.digitalWritePin(DigitalPin.P8, 0);
    pins.digitalWritePin(DigitalPin.P0, 0);
    serial.writeValue("pin8", pins.digitalReadPin(DigitalPin.P8));
    serial.writeValue("pin0", pins.digitalReadPin(DigitalPin.P0));
    
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P11, 0);
    serial.writeValue("pin15", pins.digitalReadPin(DigitalPin.P15));
    serial.writeValue("pin11", pins.digitalReadPin(DigitalPin.P11));

/**
 * Description of any pinout connection over each port.
 */
let pinOut: any = {
    1: { P0: DigitalPin.P8,     P1: DigitalPin.P0,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    2: { P0: DigitalPin.P12,    P1: DigitalPin.P1,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    3: { P0: DigitalPin.P9,     P1: DigitalPin.P2,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    4: { P0: DigitalPin.P6,     P1: DigitalPin.P3,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    5: { P0: DigitalPin.P7,     P1: DigitalPin.P4,  P2: DigitalPin.P19, P3: DigitalPin.P20},
    6: { P0: DigitalPin.P2,     P1: DigitalPin.P10, P2: DigitalPin.P5,  P3: DigitalPin.P11},
    7: { P0: DigitalPin.P13,    P1: DigitalPin.P14, P2: DigitalPin.P15, P3: DigitalPin.P16},
    8: { P0: DigitalPin.P15,    P1: DigitalPin.P11, P2: DigitalPin.P19, P3: DigitalPin.P20}
    }

//% block="%portToUse"
//% blockId="brickPort"
//% subcategory="Miscellaneous"
//% weight=100
    export function brickPort(portToUse: ConnectionPorts): any {
    return pinOut[portToUse];
    }

//% block="I2C %portToUse"
//% blockId="brickPortI2C"
//% subcategory="Miscellaneous"
//% weight=99
    export function brickPortI2C(portToUse: I2CConnectionPorts): any {
        return pinOut[portToUse];
    }

//% block="4 pins %portToUse"
//% blockId="brickPort4Pins"
//% subcategory="Miscellaneous"
//% weight=98
    export function brickPort4Pins(portToUse: ConnectionPorts4Pins): any {
        return pinOut[portToUse];
    }


//% block="ADC %portToUse"
//% blockId="brickPortADC"
//% subcategory="Miscellaneous"
//% weight=97
    export function brickPortADC(portToUse: ADCConnectionPorts): any {
        return pinOut[portToUse];
    }


//% block="ADC 2 wires %portToUse"
//% blockId="brickPort2ADC"
//% subcategory="Miscellaneous"
//% weight=96
    export function brickPort2ADC(portToUse: ConnectionPorts2AnalogPins): any {
        return pinOut[portToUse];
    }

    //% block="%portToUse"
    //% blockId="brickPortPitch"
    //% subcategory="Miscellaneous"
    //% weight=95
    export function brickPortPitch(portToUse: ConnectionPortsAnalogPitch): any {
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