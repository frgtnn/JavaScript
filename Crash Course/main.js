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

// const s = 'Hello World';

// console.log(s.length); //s.length <-- Check how many characters are in the string
// //s.substring(0, 5)); - it will show us only 'Hello ', we can also add .toUpperCase() - it would return 'HELLO '

//Arrays - variables that hold multiple values

// const fruits = ['apples', 'oranges', 'pears']; // we can have multiple values in one string
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop(); //pops the last one off

// console.log(Array.isArray(fruits)); //true, cause it is array.
// console.log(fruits.indexOf('oranges')); // index of 'oranges' value
// console.log(fruits); // arrays are always 'zero based'

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.firstName, person.lastName); // i can seperate two logs with ",".
// console.log(person.address.city);

// const { firstName, lastName, address: {city }} = person;
// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person); //email has been added.

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// for(let i = 0; i < 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.id); //todo.id/text
// }

//forEach, map, filter

// const todoCompleted = todos.filter(function(todo) { //todos.map, todos.filter
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

const x = 10;

if (x === 10) {
    console.log('x is 10');
}