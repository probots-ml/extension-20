basic.forever(function () {
    if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON1))) {
        probots.laserOn(probots.brickPort(ConnectionPorts.CON7))
        basic.pause(200)
        probots.laserOff(probots.brickPort(ConnectionPorts.CON7))
        basic.pause(500)
    } else {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON7))
        basic.pause(500)
        probots.ledOff(probots.brickPort(ConnectionPorts.CON7))
        basic.pause(500)
        probots.ledOnWithPower(probots.brickPort(ConnectionPorts.CON7), 12)
        basic.pause(500)
        probots.ledOff(probots.brickPort(ConnectionPorts.CON7))
    }
})
