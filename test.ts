basic.forever(function () {
    if (probots.isRaining(probots.brickPort(ConnectionPorts.CON1))) {
        serial.writeValue("l", 1)
    } else {
        serial.writeValue("l", 0)
    }
    basic.pause(100)
})