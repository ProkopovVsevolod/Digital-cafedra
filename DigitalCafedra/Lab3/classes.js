"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var Owner = /** @class */ (function () {
        function Owner(sername, name, birthday, document, serialOfDocument, numberOfDocument) {
            this.sername = sername,
                this.name = name,
                this.birthday = birthday,
                this.document = document,
                this.serialOfDocument = serialOfDocument,
                this.numberOfDocument = numberOfDocument;
        }
        Owner.prototype.print = function () {
            console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this.sername, "  \u0418\u043C\u044F: ").concat(this.name));
            console.log("\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this.birthday, "  \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ").concat(this.document));
            console.log("\u0421\u0435\u0440\u0438\u044F: ".concat(this.serialOfDocument, "  \u041D\u043E\u043C\u0435\u0440:").concat(this.numberOfDocument));
        };
        return Owner;
    }());
    Transport.Owner = Owner;
    var Vehicle = /** @class */ (function () {
        function Vehicle(company, model, year, vin, regNum, owner) {
            this.company = company;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNum = regNum;
            this.owner = owner;
        }
        Object.defineProperty(Vehicle.prototype, "company", {
            get: function () {
                return this._company;
            },
            set: function (company) {
                this._company = company;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (vin) {
                this._vin = vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "regNum", {
            get: function () {
                return this._regNum;
            },
            set: function (regNum) {
                this._regNum = regNum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (newOwner) {
                this._owner = newOwner;
            },
            enumerable: false,
            configurable: true
        });
        Vehicle.prototype.print = function () {
            console.log("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ".concat(this.company, "  \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model));
            console.log("\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430: ".concat(this.year, "  VIN: ").concat(this.vin));
            console.log("\u041D\u043E\u043C\u0435\u0440: ".concat(this.regNum, "  \u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446:").concat(this.owner));
        };
        return Vehicle;
    }());
    Transport.Vehicle = Vehicle;
    var Car = /** @class */ (function () {
        function Car(carBody, carClass, company, model, year, vin, regNum, owner) {
            this.carBody = carBody,
                this.carClass = carClass,
                this.company = company,
                this.model = model,
                this.year = year,
                this.vin = vin,
                this.regNum = regNum,
                this.owner = owner;
        }
        Car.prototype.print = function () {
            console.log("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ".concat(this.company, "  \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model));
            console.log("\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430: ".concat(this.year, "  VIN: ").concat(this.vin));
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.year, "  \u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.vin));
            console.log("\u041D\u043E\u043C\u0435\u0440: ".concat(this.regNum));
            console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this.owner.sername, " ").concat(this.owner.name));
        };
        return Car;
    }());
    Transport.Car = Car;
    var Moto = /** @class */ (function () {
        function Moto(motoFrame, isSport, company, model, year, vin, regNum, owner) {
            this.motoFrame = motoFrame,
                this.isSport = isSport,
                this.company = company,
                this.model = model,
                this.year = year,
                this.vin = vin,
                this.regNum = regNum,
                this.owner = owner;
        }
        Moto.prototype.print = function () {
            console.log("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ".concat(this.company, "  \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model));
            console.log("\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430: ".concat(this.year, "  VIN: ").concat(this.vin));
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.year, "  \u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.vin));
            console.log("\u041D\u043E\u043C\u0435\u0440: ".concat(this.regNum));
            console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this.motoFrame, " \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439: ").concat(this.isSport ? "Да" : "Нет"));
        };
        ;
        return Moto;
    }());
    Transport.Moto = Moto;
    var VehicleStorage = /** @class */ (function () {
        function VehicleStorage() {
            this.createData = new Date;
            this.vehicleStorage = new Array;
        }
        VehicleStorage.prototype.getVehile = function () {
            return this.vehicleStorage;
        };
        ;
        return VehicleStorage;
    }());
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
