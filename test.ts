basic.forever(function () {
    if (probots.capacitiveSensor(probots.brickPort(ConnectionPorts.CON2))) {
        serial.writeValue("x", 1)
    } else {
        serial.writeValue("x", 0)
        basic.pause(100)
    }
})