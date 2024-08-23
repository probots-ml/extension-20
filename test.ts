basic.forever(function () {
    probots.checkBatteryCharge()
    if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON7))) {
        probots.buzzerActiveOn(probots.brickPort(ConnectionPorts.CON1))
    } else {
        probots.buzzerActiveOff(probots.brickPort(ConnectionPorts.CON1))
    }
})