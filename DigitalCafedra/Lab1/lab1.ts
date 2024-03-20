//Задание 2
const multNum  = (a:number, b:number):number =>{
    return a * b;
}

const result = multNum(3, 4);
console.log(result)

//Задание 3
let isTrue :boolean = true;
let countOfPerson :number = 10;
let personeName :string = "Peter";
let idOfCar :undefined = undefined;
let info: string = `Имя этого мальчика ${personeName}`


interface Person {
    id: number, 
    name: string, 
    surname: string,
    age: number,
    hasWife?: boolean 
}

let person: Readonly<Person> = {
    id: 1,
    name: "andrew",
    surname: "242",
    age: 23, 
}

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}

const data: ToJsonStringify = {
    id: 4,
    e1: null,
    e2: null,
}

const jsonData: string = JSON.stringify(data);
console.log(jsonData);
   