enum joystickAction {
    //%block="X Axis"
    X_AXIS,
    //%block="Y Axis"
    Y_AXIX,
    //%block="Button"
    BUTTON
}

namespace probots {  
    /**
    * Get the value of Joystick X axis, Y axis or the button state.
    * @param myPort use port with 2 analog in pins and 1 digital in pin.
    * @param action get the measurament of joystick axis or button state.
    */
    //% block="get value on %myPort=brickPort2ADC of %action=joystickAction"
    //% weight=100
    //% subcategory="Joystick"
    //% color=#EE3007
    export function joystickAt(myPort: any, action: any): number {
        switch (action) {
            case joystickAction.X_AXIS:
                return pins.digitalReadPin(myPort.P1);
                break;
            case joystickAction.Y_AXIX:
                return pins.analogReadPin(myPort.P0);
                break;
            case joystickAction.BUTTON:
                let buttonState = pins.digitalReadPin(myPort.P3);
                if (buttonState == 0) {
                    buttonState = 1;
                } else {
                    buttonState = 0;
                }
                return buttonState;
                break;
            default:
                return 0;
                break;
        }
    }
}
