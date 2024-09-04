basic.forever(function on_forever() {

    if (myBattery == null) {
        myBattery = probots.CreateBatteryChecker();
    }
    
	myBattery.checkBattery()
})
