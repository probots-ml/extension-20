def on_forever():
    global my_battery
    if my_battery == None:
        my_battery = probots.create_battery_checker()
    my_battery.check_battery()
basic.forever(on_forever)
