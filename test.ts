basic.forever(function () {
    serial.writeValue("Distancia", probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON1)))
    basic.pause(100)
})