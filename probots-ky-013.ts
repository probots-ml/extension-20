
namespace probots{

    /*
    int SensorPin = A0;
    int Vo;
    float R1 = 10000;
    float logR2, R2, T;
    float c1 = 0.001129148, c2 = 0.000234125, c3 = 0.0000000876741;

    void setup() {
        Serial.begin(9600);
    }

    void loop() {
        Vo = analogRead(SensorPin);
        R2 = R1 * (1023.0 / (float)Vo - 1.0); //Calcular la resistencia
        logR2 = log(R2);
        T = (1.0 / (c1 + c2 * logR2 + c3 * logR2 * logR2 * logR2)); // Temperatura en ºK
        T = T - 273.15; //pasar a ºC
        // T = (T * 9.0)/ 5.0 + 32.0; //pasar de ºC a ºF
        Serial.print("Temperatura: ");
        Serial.print(T);
        Serial.println(" C");
        delay(500);
    }
    */

    /**
        * Detect de temperature in °C.
        * @param myPort port of connection
       */
    //% blockId=temperatureKY013
    //% block="Get Temperature on %myPort=brickPortADC"
    //% block.loc.es="Obtener temperature en %myPort=brickPortADC"
    //% weight=100
    //% subcategory="Temperature Sensor"
    //% color=#39F2A4
    export function temperatureKY013(myPort: any): number {

        //int SensorPin = A0;
        //int Vo;
        let R1: number = 10000;
        let logR2: number;
        let  R2:number;
        let  T: number;
        const c1 = 0.001129148;
        const c2 = 0.000234125;
        const c3 = 0.0000000876741;

        let Vo = pins.analogReadPin(getAnalogPin(myPort.P1));
        /*if (showInSerialPort) {
            serial.writeLine("LDR " + ldrVal);
        }*/
        //Vo = analogRead(SensorPin);
        R2 = R1 * (1023.0 / Vo - 1.0); //Calcular la resistencia
        //logR2 = log(R2);
        logR2 = Math.log(R2);
        T = (1.0 / (c1 + c2 * logR2 + c3 * logR2 * logR2 * logR2)); // Temperatura en ºK
        T = T - 273.15; //pasar a ºC
        // T = (T * 9.0)/ 5.0 + 32.0; //pasar de ºC a ºF
        //Serial.print("Temperatura: ");
        //Serial.print(T);
        //Serial.println(" C");
        //return pins.map(ldrVal, 0, 1023, 0, 100);
        return T;
    }
}
