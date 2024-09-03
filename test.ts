basic.forever(function () {
    basic.pause(100)
    serial.writeValue("x", probots.potentiometer(probots.brickPortADC(ADCConnectionPorts.CON2)))
})