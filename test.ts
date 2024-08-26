basic.forever(function () {
    //probots.buzzerPasiveOn(TONE.A, 1000, probots.brickPortPitch(ConnectionPortsAnalogPitch.CON1))
    probots.brickPortPitch(ConnectionPortsAnalogPitch.CON1)

    pins.analogSetPitchPin(probots.getAnalogPin(probots.brickPortPitch(ConnectionPortsAnalogPitch.CON1).P0));
pins.analogPitch(800, 1000);
   
    basic.pause(1000)
})