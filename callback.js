'use strict';

console.log('1');

setTimeout(function() {
    console.log('2');
}, 1000);  //1000ms이므로 1초를 의미한다 -> 1초 뒤에 2가 출력됨
// => (arrow function)을 통해 더 짧게 나타낼 수 있다.
// setTimeout(() => console.log('2'), 1000);

console.log('3');

//Sychronous callback 동기 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('MUTSA12기'));

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('비동기 콜백'), 2000);