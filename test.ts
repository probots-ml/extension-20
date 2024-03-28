probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
basic.pause(1000)
probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
basic.pause(1000)
basic.forever(function () {
    if (probots.microphoneDetectSound(soundIntensity.MEDIUM, probots.brickPortADC(ADCConnectionPorts.CON4))) {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
    } else {
        probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
    }
})