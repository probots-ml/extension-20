
basic.forever(function () { 
   
serial.writeValue("h",probots.waterLevel(probots.brickPortADC(ADCConnectionPorts.CON5)))

})