probots.createOLED(60)
probots.oledSetText(0, 0, "Bienvenido")
/*
basic.pause(1000)
basic.forever(function () {
    if (probots.ambientHumidity(probots.brickPort(ConnectionPorts.CON1)) > 50) {
        probots.rgbPortOnByTime(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Red, 1000)
        probots.oledClearScreen()
        probots.oledSetText(0, 0, "Humedad")
        probots.oledSetNumber(0, 1, probots.ambientHumidity(probots.brickPort(ConnectionPorts.CON1)))
    }
    if (probots.ambientTemperature(probots.brickPort(ConnectionPorts.CON1), tempType.celsius) > 20) {
        probots.rgbPortOnByTime(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Blue, 1000)
        probots.oledClearScreen()
        probots.oledSetText(0, 0, "Temperatura")
        probots.oledSetNumber(0, 1, probots.ambientTemperature(probots.brickPort(ConnectionPorts.CON1), tempType.celsius))
    }
})
*/