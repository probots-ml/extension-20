
basic.forever(function () { 
    //serial.writeValue("ldr", probots.getldrValue(probots.brickPortADC(ADCConnectionPorts.CON4)))
    //serial.writeValue("d",probots.ultrasoundDistance(probots.brickPort(ConnectionPorts.CON5)))
    if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON5))){
        serial.writeValue("b", 1)
        basic.showNumber(1)
    }
    else{
        serial.writeValue("b", 0)
        basic.showNumber(0)
    }

})