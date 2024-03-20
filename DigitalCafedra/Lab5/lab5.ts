const arrayWithNumber: number[] = [];

const record = (param: number):void => {
    arrayWithNumber.push(param);
    console.log('Record: ' + param + ' added!');
}

const remove = ():void => {
    arrayWithNumber.pop();
    console.log('Record removed!');
}

function startRecording():void {

    const intervalId = setInterval(() => {
        record(12345);
        console.log("Массив до удаления", arrayWithNumber)
        const timeoutId = setTimeout(() => {
            remove();
            console.log("Массив после удаления",arrayWithNumber)
        }, 10000); 
    }, 10000);

    const longTimer = setTimeout(() => {
        clearInterval(intervalId);
    }, 60000)

}

function sayHello(message: string): () => void {
    return () => {
       console.log(message);
    };
}

const peterSayHi = sayHello("Привет, Я Пётр");
startRecording();
peterSayHi();


