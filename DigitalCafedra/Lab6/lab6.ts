import { Transport } from "./classes";
import { CarsBody, CarsClass} from "./enums";

const bmw3 = new Transport.Car(
    CarsBody.SEDAN,
    CarsClass.B, 
   "BMW",
   "series 3",
   2023,
   "VIN856954",
   "662694562",
)
try {
	delete bmw3.carBody;
    Object.defineProperty(bmw3, "numberOfSeats", {value: 4})
} catch (error) {
	console.log("Сработал декоратор sealed");
}
console.log(bmw3);
console.log(bmw3.printInUpperCase());
  

	// delete Transport.Car.prototype.printInUpperCase;



