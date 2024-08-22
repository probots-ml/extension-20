basic.forever(function () {
  
    serial.writeValue("l", probots.waterLevel(probots.brickPort(ConnectionPorts.CON1))) 
    basic.pause(100)
    
})