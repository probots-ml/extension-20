

basic.forever(function () {
    if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON1))) {
        serial.writeValue("x", 1)
    } else {
        serial.writeValue("x", 0)
        basic.pause(50);
    }
})