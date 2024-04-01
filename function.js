function printHello() {
    console.log(`Hello`);
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
 
function changeName(obj) {
    obj.name = 'coder';
}
const likelion = {name: 'likelion'};
changeName(likelion);
console.log(likelion);

function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'likelion');

let globalMessage = 'global'; 
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage);
}
printMessage();

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
}

const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
    print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;
const simpleMutiply = (a, b) => {
    return a * b;
};

(function hello() {
    console.log('IIFE');
})();