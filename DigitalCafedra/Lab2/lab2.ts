//Задание 1.1
//Реализовать метод, возвращающий медианное
//значение, получаемое из массива целых чисел
const arrOfNumber: number[] = [1, 4, 7, 9];

const medianValue = (arr: number[]): number => {
    const middle: number = (arr.length + 1) / 2;
    arr = arr.sort((a, b) => a - b );
    
    if (arr.length % 2 === 0) {
        return (arr[middle - 1.5] + arr[middle - 0.5]) / 2;
    } 
    
    else return arr[middle - 1];
    
}

console.log(medianValue(arrOfNumber));

//Задание 1.2

interface Range {
    startRow: number;
    endRow: number;
    startCol: number;
    endCol: number;
}

const findCountNonZeroValues = (matrix: number[][], range: Range): number => {
    const {startRow, endRow, startCol, endCol} = range;
    let counter =  0;
    for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
            if (matrix[row][col] !==  0) {
                counter++;
            }
        }
    }
    return counter;
}

const matrix: number[][] = [
    [1, 5 ,6, 0, 0, 2, 0],
    [0, 5, 0, 1, 1, 0, 0],
    [0, 4, 0, 5, 1, 0, 5],
]

const rangeMatrix: Range = {
    startRow: 0,
    endRow: 2,
    startCol: 0,
    endCol: 6
} as Range
    
console.log(findCountNonZeroValues(matrix, rangeMatrix));


//Задание 2
type NumbersAndString = [number, string, number];

function multNumbers ( array: NumbersAndString): number {   
    const [firstNumber, _, secondNumber] =  array;
    return firstNumber * secondNumber;
}

const ourArrayForEx: NumbersAndString = [4, 'Привет', 3]
console.log(multNumbers(ourArrayForEx))



//Задание 3

enum Vitamins { 
    B1 = "Vitamin B1", 
    B2 = "Vitamin B2", 
    B3 = "Vitamin B3", 
    D = "Vitamin D", 
    C = "Vitamin C", 
    A = "Vitamin A", 
    B12 = "Vitamin B12"
}



console.log(Vitamins.A);
console.log(Vitamins.B1);
console.log(Vitamins.D);


//Задание 4
class Pet {
        name: string = 'Some pet'
        age: number = -1
        speak() {
        return "No speak. I am fish!";
    }
   }

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
   }
}

function printInfoAboutPet <T extends Pet> (pet: T): void {
    console.log(`Имя: ${pet.name}, Возраст: ${pet.age}, Голос: ${pet.speak()}`);
}

const Barsik = new Cat();
printInfoAboutPet(Barsik);

//Задание 5
type VitaminsInfo = {
    vitamin: Vitamins;
    instructions: string;
    dailyCountOfTablets: number;
}

const vitaminsInfo: VitaminsInfo = {
    vitamin: Vitamins.A,
    instructions: "Принимать только положенное количетсво таблеток",
    dailyCountOfTablets: 4
}

console.log(JSON.stringify(vitaminsInfo));