basic.pause(1000)
basic.forever(function () {
    serial.writeValue("h", probots.ambientHumidity(probots.brickPort(ConnectionPorts.CON2)))
    serial.writeValue("t", probots.ambientTemperature(probots.brickPort(ConnectionPorts.CON2), tempType.celsius))
    basic.pause(200)
})