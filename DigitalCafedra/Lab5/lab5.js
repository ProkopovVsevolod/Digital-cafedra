var arrayWithNumber = [];
var record = function (param) {
    arrayWithNumber.push(param);
    console.log('Record: ' + param + ' added!');
};
var remove = function () {
    arrayWithNumber.pop();
    console.log('Record removed!');
};
function startRecording() {
    var intervalId = setInterval(function () {
        record(12345);
        console.log("Массив до удаления", arrayWithNumber);
        var timeoutId = setTimeout(function () {
            remove();
            console.log("Массив после удаления", arrayWithNumber);
        }, 10000);
    }, 10000);
    var longTimer = setTimeout(function () {
        clearInterval(intervalId);
    }, 60000);
}
function sayHello(message) {
    return function () {
        console.log(message);
    };
}
var peterSayHi = sayHello("Привет, Я Пётр");
startRecording();
peterSayHi();
