basic.forever(function () {
    if (probots.soilMosture(probots.brickPort(ConnectionPorts.CON6))) {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON7))
    } else {
        probots.ledOff(probots.brickPort(ConnectionPorts.CON7))
    }
})