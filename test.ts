basic.forever(function () {   
    serial.writeValue("d", probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON1)))
})
