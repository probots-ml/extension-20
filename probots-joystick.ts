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
     * Get the value of a joystick x axis, y axis or button state.
     * @param myPort Set the port read the joystick state.
     * @param action Read the the x or y axis or select a button.
     */
    //% block="get value on %myPort=brickPort2ADC of $action=joystickAction"
    //% blockId=joystickAt
    //% $action.defl=joystickAction.X_AXIS
    //% weight=100
    //% subcategory="Joystick"
    //% color=#EE3007
    export function joystickAt(myPort: any, action: joystickAction): number {
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
