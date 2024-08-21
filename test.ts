

basic.forever(function () {
    if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON2))) {
        serial.writeValue("x", 1)
    } else {
        serial.writeValue("x", 0)
        
    }
})