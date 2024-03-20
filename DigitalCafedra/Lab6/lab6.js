"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var enums_1 = require("./enums");
var bmw3 = new classes_1.Transport.Car(enums_1.CarsBody.SEDAN, enums_1.CarsClass.B, "BMW", "series 3", 2023, "VIN856954", "662694562");
try {
    delete bmw3.carBody;
    Object.defineProperty(bmw3, "numberOfSeats", { value: 4 });
}
catch (error) {
    console.log("Сработал декоратор sealed");
}
console.log(bmw3);
console.log(bmw3.printInUpperCase());
