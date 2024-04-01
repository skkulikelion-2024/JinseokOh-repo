// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1+2}');

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement operators
let counter = 2;
console.log('preIncrement: ${preIncrement}, counter: %{counter}');
const postIncrement = counter++

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
//등등 이런식으로 비교하는 거.

// 6. Logical operators, || or, && and.! not
// not 은 진리값을 반대로 바꿔준다.

// 7. Equality
const stringFive = '5';
const numerFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numerFive);
console.log(stringFive != numerFive);

// === strict equality, no type conversion
console.log(stringFive === numerFive);
console.log(stringFive !== numerFive);

// 0, '', null -> 전부 False 값으로 간주될 수 있음.
// == 으로 False 와 비교하면 괜찮지만 ===으로 하면 아니다. 

// 8. Conditional operators: If
// if, else if, else
const name = 'likelion';
if(name === 'likelion') {
    console.log('Welome,likelion!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value 1 : value 2;
console.log (name === 'likelion' ? 'yes' : 'no')

//10. Switch statement
// use for multiple if checks

//11. Loops
let i = 3;
while (i>0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}
// nested loops for문을 안에 여러 개 넣는 것.

// Break, continue