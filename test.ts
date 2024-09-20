probots.startAndInitRGBSensor()
basic.forever(function () {
    basic.pause(100)
    serial.writeValue("d", probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON3)))
    serial.writeValue("r", probots.getSensorData(RGB.RED))
})