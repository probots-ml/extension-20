

basic.forever(function () {
   
if (probots.isButtonPressed(probots.brickPort(ConnectionPorts.CON5))) {
    
    serial.writeValue("x", 1)
} else {
    serial.writeValue("x", 0)
}
})