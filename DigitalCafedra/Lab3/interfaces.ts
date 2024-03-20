import { Docs,CarsBody, CarsClass } from "./enums";

export interface IOwner {
    sername: string;
    name: string;
    birthday: Date;
    document: Docs;
    serialOfDocument: string;
    numberOfDocument: string;

    print(): void;
}

export interface IVehicle {
    company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;
	owner: IOwner;

    print(): void;
}

export interface ICar extends IVehicle {
    carBody: CarsBody;
    carClass : CarsClass;
}

export interface IMotobike extends IVehicle {
    motoFrame: string;
    isSport: boolean;
}

export interface IVehicleStorage<T extends IVehicle>  {
    createData: Date;
    getVehile(): Array<T>;
    vehicleStorage: Array<T>;
}