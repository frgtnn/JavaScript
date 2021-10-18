// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

//let, const (block-level scope)
//always use const, let should be used only when u are sure u gonna change the value in the future

//String, Numbers, Boolean, null, undefined, Symbol

// const name = 'John'; // string
// const age = 30; //number
// const rating = 4.5; // <- it is just a number
// const isCool = true; //boolean
// const x = null; //null
// const y = undefined; //undefined
// console.log(typeof isCool); //typeof gives us possibility to check what kind of value is it (boolean, number etc.)

// Concatenation
// const name = 'John';
// const age = 30;
// console.log('My name is ' + name + ' and I am ' + age); old one, not recommended
//Template String 
// console.log(`My name is ${name} and I am ${age}`); //ES6  

const s = 'Hello World';

console.log(s.length); //s.length <-- Check how many characters are in the string
//s.substring(0, 5)); - it will show us only 'Hello ', we can also add .toUpperCase() - it would return 'HELLO '