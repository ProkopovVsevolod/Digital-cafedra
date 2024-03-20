import { Transport } from "./classes";
import { CarsBody, CarsClass, Docs } from "./enums";

const person1 = new Transport.Owner(
    "Попов",
    "Игорь",
    new Date(2002, 1, 15),
    Docs.passport,
    "3622",
    "158657"
)

const person2 = new Transport.Owner(
    "Лагин",
    "Иван",
    new Date(1980, 6, 20),
    Docs.driverCard,
    "5564",
    "7375378"
)

const bmw3 = new Transport.Car(
    CarsBody.SEDAN,
    CarsClass.B, 
   "BMW",
   "series 3",
   2023,
   "VIN856954",
   "662694562",
   person1,
)

const yamakasi = new Transport.Moto(
    "Гоночный",
    true,
    "Yamakasi",
    "model 3412",
    2021,
    "VIN236457",
    "24242424",
    person2
)
    
bmw3.print();
yamakasi.print();


const car1 = new Transport.Car(
    CarsBody.SEDAN,
    CarsClass.B, 
   "BMW",
   "series 3",
   2023,
   "VIN856954",
   "662694562",
   person1,
)

const car2 = new Transport.Car(
    CarsBody.SEDAN,
    CarsClass.C, 
   "BMW",
   "M5 Competition",
   2022,
   "VIN852154",
   "66872572",
   person2,
)

const car3 = new Transport.Car(
    CarsBody.MINIVAN,
    CarsClass.F, 
   "Mercedes",
   "Minivan",
   2022,
   "VIN88451",
   "667454572",
   person2,
)

const carStorage = new Transport.VehicleStorage();
carStorage.vehicleStorage.push(car1, car2, car3, yamakasi);
const carArray = carStorage.getVehile();
carArray.forEach(car => {
    car.print();
})




