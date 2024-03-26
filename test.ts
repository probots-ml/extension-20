// aquí va el archivo "tests"; esto no se compilará cuando este paquete se utilice como una extensión.
probots.rgbOn(ColorLedRGB.Orange);
basic.pause(1000);
probots.rgbOff();
probots.rgbOnByTime(ColorLedRGB.Orange, 2000);
probots.rgbOnByTime(ColorLedRGB.Cyan,2000);