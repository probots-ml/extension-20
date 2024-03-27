

basic.forever(function () {
    probots.ledOn(ConnectionPorts.CON7);
    basic.pause(1000)
    probots.ledOff(ConnectionPorts.CON7)
    basic.pause(1000)
})