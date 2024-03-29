basic.forever(function () {
    if (probots.ambientHumidity(probots.brickPort(ConnectionPorts.CON1)) > 50) {
        probots.rgbPortOnByTime(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Red, 1000)
    }
    if (probots.ambientTemperature(probots.brickPort(ConnectionPorts.CON1), tempType.celsius) > 20) {
        probots.rgbPortOnByTime(probots.brickPort4Pins(ConnectionPorts4Pins.CON7), ColorLedRGB.Blue, 1000)
    }
})
