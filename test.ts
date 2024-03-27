basic.forever(function () {
    if (probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON3)) > 70) {
        probots.rgbOn(ColorLedRGB.Red)
    } else {
        probots.rgbOn(ColorLedRGB.Green)
    }
})
