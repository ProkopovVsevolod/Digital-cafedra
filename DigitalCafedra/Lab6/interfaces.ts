import { Docs,CarsBody, CarsClass } from "./enums";

export interface IVehicle {
    company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;

    printInUpperCase(): string;
}

export interface ICar extends IVehicle {
    carBody: CarsBody;
    carClass : CarsClass;
}
