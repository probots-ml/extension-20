enum DHTtype {
    //% block="DHT11"
    DHT11,
    //% block="DHT22"
    DHT22
}

enum dataType {
    //% block="humidity"
    humidity,
    //% block="temperature"
    temperature
}

enum tempType {
    //% block="Celsius (*C)"
    celsius,
    //% block="Fahrenheit (*F)"
    fahrenheit
}


namespace probots {

    let _temperature: number = -99.0
    let _humidity: number = -99.0
    let _temptype: tempType = tempType.celsius
    let _readSuccessful: boolean = false
    let _sensorresponding: boolean = false


    function queryData(DHT: DHTtype, dataPin: DigitalPin, pullUp: boolean, serialOtput: boolean, wait: boolean) {

        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        let DHTstr: string = (DHT == DHTtype.DHT11) ? "DHT11" : "DHT22"

        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)

        _humidity = -99.0
        _temperature = -99.0
        _readSuccessful = false
        _sensorresponding = false
        startTime = input.runningTimeMicros()

        //request data
        pins.digitalWritePin(dataPin, 0) //begin protocol, pull down pin
        basic.pause(18)

        if (pullUp) pins.setPull(dataPin, PinPullMode.PullUp) //pull up data pin if needed
        pins.digitalReadPin(dataPin) //pull up pin
        control.waitMicros(40)

        if (pins.digitalReadPin(dataPin) == 1) {
            if (serialOtput) {
                serial.writeLine(DHTstr + " not responding!")
                serial.writeLine("----------------------------------------")
            }

        } else {

            _sensorresponding = true

            while (pins.digitalReadPin(dataPin) == 0); //sensor response
            while (pins.digitalReadPin(dataPin) == 1); //sensor response

            //read data (5 bytes)
            for (let index = 0; index < 40; index++) {
                while (pins.digitalReadPin(dataPin) == 1);
                while (pins.digitalReadPin(dataPin) == 0);
                control.waitMicros(28)
                //if sensor still pull up data pin after 28 us it means 1, otherwise 0
                if (pins.digitalReadPin(dataPin) == 1) dataArray[index] = true
            }

            endTime = input.runningTimeMicros()

            //convert byte number array to integer
            for (let index = 0; index < 5; index++)
                for (let index2 = 0; index2 < 8; index2++)
                    if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)

            //verify checksum
            checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
            checksum = resultArray[4]
            if (checksumTmp >= 512) checksumTmp -= 512
            if (checksumTmp >= 256) checksumTmp -= 256
            if (checksum == checksumTmp) _readSuccessful = true

            //read data if checksum ok
            if (_readSuccessful) {
                if (DHT == DHTtype.DHT11) {
                    //DHT11
                    _humidity = resultArray[0] + resultArray[1] / 100
                    _temperature = resultArray[2] + resultArray[3] / 100
                } else {
                    //DHT22
                    let temp_sign: number = 1
                    if (resultArray[2] >= 128) {
                        resultArray[2] -= 128
                        temp_sign = -1
                    }
                    _humidity = (resultArray[0] * 256 + resultArray[1]) / 10
                    _temperature = (resultArray[2] * 256 + resultArray[3]) / 10 * temp_sign
                }
                if (_temptype == tempType.fahrenheit)
                    _temperature = _temperature * 9 / 5 + 32
            }

            //serial output
            if (serialOtput) {
                serial.writeLine(DHTstr + " query completed in " + (endTime - startTime) + " microseconds")
                if (_readSuccessful) {
                    serial.writeLine("Checksum ok")
                    serial.writeLine("Humidity: " + _humidity + " %")
                    serial.writeLine("Temperature: " + _temperature + (_temptype == tempType.celsius ? " *C" : " *F"))
                } else {
                    serial.writeLine("Checksum error")
                }
                serial.writeLine("----------------------------------------")
            }

        }

        //wait 2 sec after query if needed
        if (wait) basic.pause(2000)

    }


    function readData(data: dataType): number {
        return data == dataType.humidity ? _humidity : _temperature
    }


    function selectTempType(temp: tempType) {
        _temptype = temp
    }


    function readDataSuccessful(): boolean {
        return _readSuccessful
    }


    function sensorrResponding(): boolean {
        return _sensorresponding
    }

    /**
    * Get Humidity in the ambient. 
    */

    //% blockId="ambientHumidity"
    //% block="get humidity on %myPort=brickPort"
    //% weight=100
    //% subcategory="DHT11 Sensor"
    //% color=#2835C9
    export function ambientHumidity(myPort: any): number {
        queryData(DHTtype.DHT11, myPort.P0, false, true, true);
        return readData(dataType.humidity);
    }

    //% blockId="ambientTemperature"
    //% block="get humidity on %myPort=brickPort in $scale=tempType"
    //% scale.defl=tempType.celsius
    //% weight=99
    //% subcategory="DHT11 Sensor"
    //% color=#2835C9
    export function ambientTemperature(myPort: any, scale: tempType): number {  
        selectTempType(scale);
        queryData(DHTtype.DHT11, myPort.P0, false, true, true);
        return readData(dataType.temperature);
    }
}

