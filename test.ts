
basic.forever(function () { 
   
   serial.writeValue("U",probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON5)) )

})