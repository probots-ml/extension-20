basic.forever(function () {
    serial.writeValue("x", probots.potentiometer(probots.brickPortADCLowerPower(ConnectionPortsADCLowerPower.CON5)))
})