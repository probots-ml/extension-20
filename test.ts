let leds_neopixel = probots.newStripNeopixel(probots.brickPort(ConnectionPorts.CON2), 8, 100)
basic.forever(function () {
    probots.showRainbow(leds_neopixel)
   
    basic.pause(500)
})