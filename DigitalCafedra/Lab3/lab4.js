"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var enums_1 = require("./enums");
var person1 = new classes_1.Transport.Owner("Попов", "Игорь", new Date(2002, 1, 15), enums_1.Docs.passport, "3622", "158657");
var person2 = new classes_1.Transport.Owner("Лагин", "Иван", new Date(1980, 6, 20), enums_1.Docs.driverCard, "5564", "7375378");
var bmw3 = new classes_1.Transport.Car(enums_1.CarsBody.SEDAN, enums_1.CarsClass.B, "BMW", "series 3", 2023, "VIN856954", "662694562", person1);
var yamakasi = new classes_1.Transport.Moto("Гоночный", true, "Yamakasi", "model 3412", 2021, "VIN236457", "24242424", person2);
bmw3.print();
yamakasi.print();
var car1 = new classes_1.Transport.Car(enums_1.CarsBody.SEDAN, enums_1.CarsClass.B, "BMW", "series 3", 2023, "VIN856954", "662694562", person1);
var car2 = new classes_1.Transport.Car(enums_1.CarsBody.SEDAN, enums_1.CarsClass.C, "BMW", "M5 Competition", 2022, "VIN852154", "66872572", person2);
var car3 = new classes_1.Transport.Car(enums_1.CarsBody.MINIVAN, enums_1.CarsClass.F, "Mercedes", "Minivan", 2022, "VIN88451", "667454572", person2);
var carStorage = new classes_1.Transport.VehicleStorage();
carStorage.vehicleStorage.push(car1, car2, car3, yamakasi);
var carArray = carStorage.getVehile();
carArray.forEach(function (car) {
    car.print();
});
