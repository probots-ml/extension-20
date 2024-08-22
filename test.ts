basic.forever(function () {
    probots.laserOn(probots.brickPort(ConnectionPorts.CON2))
    basic.pause(1000)
    probots.laserOff(probots.brickPort(ConnectionPorts.CON2))
    basic.pause(1000)
})