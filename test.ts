
basic.forever(function () { 
    if (probots.hallSensor(probots.brickPort(ConnectionPorts.CON1)))
    {
        serial.writeValue("h", 1)
    } else{
        serial.writeValue("h", 0)
    }


})