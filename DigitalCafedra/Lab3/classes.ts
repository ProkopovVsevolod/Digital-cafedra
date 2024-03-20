import { CarsBody, CarsClass, Docs } from "./enums";
import { ICar, IMotobike, IOwner, IVehicle, IVehicleStorage } from "./interfaces";

export namespace Transport {
    export class Owner implements IOwner {
        sername: string;
        name: string;
        document: Docs;
        birthday: Date;
        serialOfDocument: string;
        numberOfDocument: string;
    
        print(): void {
            console.log(`Фамилия: ${this.sername}  Имя: ${this.name}`)
            console.log(`День рождения: ${this.birthday}  Документ: ${this.document}`)
            console.log(`Серия: ${this.serialOfDocument}  Номер:${this.numberOfDocument}`)
        }
    
        constructor (
            sername: string,
            name: string,
            birthday: Date,
            document: Docs,
            serialOfDocument: string,
            numberOfDocument: string,
        ) {
            this.sername = sername,
            this.name = name,
            this.birthday = birthday,
            this.document = document,
            this.serialOfDocument = serialOfDocument,
            this.numberOfDocument = numberOfDocument
        }
    }
    
    export class Vehicle implements IVehicle {
        private _company: string;
        get company(): string {
            return this._company;
        }
    
        set company(company: string) {
            this._company = company;
        }
    
        private _model: string;
        get model(): string {
            return this._model;
        }
    
        set model(model: string) {
            this._model = model;
        }
    
        private _year: number;
        get year(): number {
            return this._year;
        }
    
        set year(year: number) {
            this._year = year;
        }
    
        private _vin: string;
        get vin(): string {
            return this._vin;
        }
    
        set vin(vin: string) {
            this._vin = vin;
        }
    
        private _regNum: string;
        get regNum(): string {
            return this._regNum;
        }
    
        set regNum(regNum: string) {
            this._regNum = regNum;
        }
    
        private _owner: IOwner;
        get owner(): IOwner {
            return this._owner;
        }
    
        set owner(newOwner: IOwner) {
            this._owner = newOwner;
        }
    
        print(): void {
            console.log(`Компания: ${this.company}  Модель: ${this.model}`)
            console.log(`Год производства: ${this.year}  VIN: ${this.vin}`)
            console.log(`Номер: ${this.regNum}  Владелец:${this.owner}`)
        }
    
        constructor (
            company: string,
            model: string,
            year: number,
            vin: string,
            regNum: string,
            owner: IOwner,
        ) {
            this.company = company;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNum = regNum;
            this.owner = owner;
        }
    }
    
    export class Car implements ICar {     
        company: string;
        model: string;
        year: number;
        vin: string;
        regNum: string;
        carBody: CarsBody;
        carClass : CarsClass;
        owner: IOwner;
        
    
        print(): void {
            console.log(`Компания: ${this.company}  Модель: ${this.model}`)
            console.log(`Год производства: ${this.year}  VIN: ${this.vin}`)
            console.log(`Тип кузова: ${this.year}  Класс автомобиля: ${this.vin}`)
            console.log(`Номер: ${this.regNum}`)
            console.log(`Владелец: ${this.owner.sername} ${this.owner.name}`)
        }
    
        constructor (
            carBody: CarsBody,
            carClass : CarsClass,
            company: string,
            model: string,
            year: number,
            vin: string,
            regNum: string,
            owner: IOwner
        ) {
            this.carBody = carBody,
            this.carClass = carClass,
            this.company = company,
            this.model = model,
            this.year = year,
            this.vin = vin,
            this.regNum = regNum,
            this.owner = owner
        }
    }
    
    export class Moto implements IMotobike {
        motoFrame: string;
        isSport: boolean;
        company: string;
        model: string;
        year: number;
        vin: string;
        regNum: string;
        owner: IOwner;
    
        print(): void {
            console.log(`Компания: ${this.company}  Модель: ${this.model}`)
            console.log(`Год производства: ${this.year}  VIN: ${this.vin}`)
            console.log(`Тип кузова: ${this.year}  Класс автомобиля: ${this.vin}`)
            console.log(`Номер: ${this.regNum}`)
            console.log(`Тип рамы: ${this.motoFrame} Спортивный: ${this.isSport ? "Да" : "Нет"}`)
            
        };
        constructor (
            motoFrame: string,
            isSport: boolean,
            company: string,
            model: string,
            year: number,
            vin: string,
            regNum: string,
            owner: IOwner,
        ) {
            this.motoFrame = motoFrame,
            this.isSport = isSport,
            this.company = company,
            this.model = model,
            this.year = year,
            this.vin = vin,
            this.regNum = regNum,
            this.owner = owner
        }
    }
    
    export class VehicleStorage implements IVehicleStorage<IVehicle> {
        createData: Date;
        vehicleStorage: IVehicle[];
        getVehile(): IVehicle[] {
            return this.vehicleStorage;
        };
    
        constructor () {
            this.createData = new Date;
            this.vehicleStorage = new Array<IVehicle>;
        }
    
    }
}


