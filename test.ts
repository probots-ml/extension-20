basic.forever(function () {
    serial.writeValue("x", probots.microphoneDeltaSound(soundIntensity.LOW, probots.brickPortADC(ADCConnectionPorts.CON1)))
})