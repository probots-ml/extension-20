probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
basic.pause(1000)
probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
basic.pause(1000)
basic.forever(function () {
    if (probots.soilMosture(probots.brickPort(ConnectionPorts.CON4))) {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
    } else {
        probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
    }
    basic.showNumber(probots.soilMostureLevel(ConnectionPorts.CON4));
})