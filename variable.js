'use strict';
// 모던하게 개발 공부하기

// 2. Variable, rw(read/write)
// let(added in ES6)
let globalName = 'global name';
{
    let name = 'likelion';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var hoisting: 끌어올려주다의 의미. 선언이 제일 위로 올라감. 


// 3. Constants, r(read only)

const daysInWeek = 7;
const maxNumber = 5;


const count = 17; //integer
const size = 17.1; // decimal numver
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 4. Variable types
//primitive, single item: number, strin, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a numver' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 12338383828828827176352571n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

const canRead = true;
const test = 3<1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol - 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2);

const ellie = {name: 'likelion', age: 20};

//Dynamic typing (프로토타입을 만들 땐 용이하지만 나중에 골치 아픔)
//TS가 자바의 단점을 해소하기 위해 만들어짐

