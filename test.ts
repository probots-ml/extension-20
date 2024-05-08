basic.forever(function () {
    serial.writeValue("Distancia", probots.ultrasoundDistanceNew(probots.brickPort(ConnectionPorts.CON1)))
    basic.pause(100)
})