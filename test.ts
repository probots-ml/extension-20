let leds_neopixel: probots.Strip = null
probots.showColor(leds_neopixel, Colors.Violet)
basic.pause(100)
probots.showColor(leds_neopixel, Colors.Yellow)
basic.pause(100)
basic.pause(100)
basic.forever(function () {
    leds_neopixel = probots.newStripNeopixel(probots.brickPort(ConnectionPorts.CON1), 8)
})