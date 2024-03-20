var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Задание 1.1
//Реализовать метод, возвращающий медианное
//значение, получаемое из массива целых чисел
var arrOfNumber = [1, 4, 7, 9];
var medianValue = function (arr) {
    var middle = (arr.length + 1) / 2;
    arr = arr.sort(function (a, b) { return a - b; });
    if (arr.length % 2 === 0) {
        return (arr[middle - 1.5] + arr[middle - 0.5]) / 2;
    }
    else
        return arr[middle - 1];
};
console.log(medianValue(arrOfNumber));
var findCountNonZeroValues = function (matrix, range) {
    var startRow = range.startRow, endRow = range.endRow, startCol = range.startCol, endCol = range.endCol;
    var counter = 0;
    for (var row = startRow; row <= endRow; row++) {
        for (var col = startCol; col <= endCol; col++) {
            if (matrix[row][col] !== 0) {
                counter++;
            }
        }
    }
    return counter;
};
var matrix = [
    [1, 5, 6, 0, 0, 2, 0],
    [0, 5, 0, 1, 1, 0, 0],
    [0, 4, 0, 5, 1, 0, 5],
];
var rangeMatrix = {
    startRow: 0,
    endRow: 2,
    startCol: 0,
    endCol: 2
};
console.log(findCountNonZeroValues(matrix, rangeMatrix));
function multNumbers(array) {
    var firstNumber = array[0], _ = array[1], secondNumber = array[2];
    return firstNumber * secondNumber;
}
var ourArrayForEx = [4, 'Привет', 3];
console.log(multNumbers(ourArrayForEx));
//Задание 3
var Vitamins;
(function (Vitamins) {
    Vitamins["B1"] = "Vitamin B1";
    Vitamins["B2"] = "Vitamin B2";
    Vitamins["B3"] = "Vitamin B3";
    Vitamins["D"] = "Vitamin D";
    Vitamins["C"] = "Vitamin C";
    Vitamins["A"] = "Vitamin A";
    Vitamins["B12"] = "Vitamin B12";
})(Vitamins || (Vitamins = {}));
console.log(Vitamins.A);
console.log(Vitamins.B1);
console.log(Vitamins.D);
//Задание 4
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printInfoAboutPet(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(pet.age, ", \u0413\u043E\u043B\u043E\u0441: ").concat(pet.speak()));
}
var Barsik = new Cat();
printInfoAboutPet(Barsik);
var vitaminsInfo = {
    vitamin: Vitamins.A,
    instructions: "Принимать только положенное количетсво таблеток",
    dailyCountOfTablets: 4
};
console.log(JSON.stringify(vitaminsInfo));
