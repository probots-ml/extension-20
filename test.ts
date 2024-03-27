probots.rgbOn(ColorLedRGB.Yellow)
basic.pause(3000);
probots.rgbOff();
basic.pause(500);

basic.forever(function () {
    probots.rgbOn(ColorLedRGB.Red)
    basic.pause(1000)
    probots.rgbOff()
    basic.pause(1000)
    probots.rgbOnByTime(ColorLedRGB.Green, 1000)
    probots.rgbOff()
    probots.rgbOnByTime(ColorLedRGB.Blue, 1000)
    probots.rgbOff()
    probots.rgbOnByTime(ColorLedRGB.Orange, 5000)
})