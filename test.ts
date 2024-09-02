basic.forever(function () {
    probots.checkBatteryCharge()
    if (probots.soilMosture(probots.brickPortADC(ADCConnectionPorts.CON1), probots.potentiometer(probots.brickPortADC(ADCConnectionPorts.CON2)))) {
        probots.ledOn(probots.brickPort(ConnectionPorts.CON3))
    } else {
        probots.ledOff(probots.brickPort(ConnectionPorts.CON3))
    }
})