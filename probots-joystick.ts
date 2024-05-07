enum joystickAction {
    //%block="X Axis"
    X_AXIS,
    //%block="Y Axis"
    Y_AXIX,
    //%block="Button"
    BUTTON
}

namespace probots{
    
    /**
    * Get the value of Joystick X axis, Y axis or the button state.
    * @param action get the measurament of joystick axis or button state.
    */
    //% block="get value of %action=joystickAction"  
    //% weight=100
    //% subcategory="Joystick"
    //% color=#EE3007
    export function joystick(action: joystickAction): number {
        switch (action) {
            case joystickAction.X_AXIS:
                return pins.digitalReadPin(DigitalPin.P9);
                break;
            case joystickAction.Y_AXIX:
                return pins.analogReadPin(AnalogPin.P10);
                break;
            case joystickAction.BUTTON:
                let buttonState = pins.digitalReadPin(DigitalPin.P5);
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
