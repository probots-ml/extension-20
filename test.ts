basic.forever(function () {
    if (probots.potentiometer(probots.brickPortADC(ADCConnectionPorts.CON1)) > 50) {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
    } else {
        probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
    }
})