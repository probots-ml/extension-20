
basic.forever(function () { 
   
serial.writeValue("h",probots.soilMostureLevel(probots.brickPortADC(ADCConnectionPorts.CON5)))

})