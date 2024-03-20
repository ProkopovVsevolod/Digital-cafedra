import { sealed, upperString } from "./decorators";
import { CarsBody, CarsClass, Docs } from "./enums";
import { ICar, IVehicle } from "./interfaces";

export namespace Transport {
    
    @sealed
    export class Car implements ICar {     
        company: string;
        model: string;
        year: number;
        vin: string;
        regNum: string;
        carBody: CarsBody;
        carClass : CarsClass;
        
        @upperString
        printInUpperCase(): string {
            return `Компания: ${this.company} Модель: ${this.model}
            Год производства: ${this.year}  VIN: ${this.vin}
            Тип кузова: ${this.year}  Класс автомобиля: ${this.vin}
            Номер: ${this.regNum}`
        }
    
        constructor (
            carBody: CarsBody,
            carClass : CarsClass,
            company: string,
            model: string,
            year: number,
            vin: string,
            regNum: string,
        ) {
            this.carBody = carBody,
            this.carClass = carClass,
            this.company = company,
            this.model = model,
            this.year = year,
            this.vin = vin,
            this.regNum = regNum
        }
    }
}


