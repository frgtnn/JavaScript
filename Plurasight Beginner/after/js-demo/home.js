// let price = 12;
// showMessage(price); /*typeof price, price + 1, price * 3, price / 3, price % 5 (shows the remainder), price += 1 - the same as price = price +1*/ 
//                     /* taxRate, ++price <- gives us 12+1, 

// let price = 1.1 + 1.3;

// showMessage(price);

// let amount = 0;

// showMessage(amount);

// let message = 'Hello "\World\"'; /* we can also use double quotes, "\World\" to make quotes around words*/

// showMessage(message);


// let name = 'Andrea';
// let message = `Hello 

// ${name}`; /* it give us whitespace between hello and andrea*/

// showMessage(message);
// console.log(message);

// let message = 'Hello';
// /*message = message + ' World' gives us "Hello World" -- substring(1) it cuts first letter of 'Hello' word --  message.length (shows how many letters we in word)*/
// showMessage(message) ;

// let amount = 123;
// amount = amount.toString();
// showMessage(typeof amount); it gives us string

// let amount = Number.parseFloat("123.12"); /*it gives as number if we use typeof), if we use A123.12 it will show "NaN", in the end of 123.12 we don't have this reaction*/

// showMessage(typeof amount);

// let saved = true;
// saved = !saved; /*!saved -- gives us 'false'*/
// showMessage(saved);

// let saved = 10;
// saved = null;
// showMessage(saved);
// console.log(saved); -- we use this to wipeout our code.

// let person = {
//     firstName: 'John',
//     lastName: 'Adams'
// };

// console.log(person.firstName);


// let price = 20;
// if (price !== 15) {
//     showMessage('discounted');
// }

// false = false, 0, "" or ", null, endefined, NaN 
// truthy everything not falsy, true, >0, "0"

// if ("0") { //without "" it wouldn't show 'true'
//     showMessage('true');
// }

// if ( +(1.1 + 1.3).toFixed(2) === 2.4) { //if i would remove !, and make it === -> it would show 'true'
//     let message = 'true'
//     showMessage(message);
// }

// let price = 1;
// if (price > 10) {
//     showMessage('true');
// }
// else if (price > 5) {
//     showMessage('greater than 5');
// }
// else if (price < 4) {
//     showMessage('less than 4');
// }

// let message = (price > 10) ? 'expensive' : 'cheap;, if price is greater than then, true is 'expensive' if not it would be false 'cheap'

// let price = 20;

// let message = (price < 10) ? 'yes' : 'no';
// showMessage(message);
// price > 10 ? showMessage ('yes') : showMessage('no'); // parentheses around price > 10, are not required. But it should be used, to be more clear.

// if (true) {
//     let value = 'yes'
//     showMessage(value);
// }

// console.log(value); - it will give us an error, because let works only in strict block!!!!!!!

// if (true) {
//     var value = 'yes';
//     showMessage(value);
// }

// console.log(value); we shouldn=t use "var" because it goes out of the block, and it might be confusing for other ppl when they see our code and work on it!!!!


// if (true) {
//     const value = 'yes';
//     showMessage(value);
// }

// console.log(value);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let i = 4;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// let i = -4;
// do {
//     console.log(i);
//     i--;
// } while (i > 0); it will execute always almost one

// function logMessage() {
//     console.log('Here is a message');
// }

// logMessage();

// let fn = function Fuction () {
//     console.log('Here is a message');
// }

// fn(); we used second name of fuction i mean "fuction Fuction ()" is for debugging purposes, it makes easier to find buggs in the future :)


// let fn = function Fuction (message, firstName) {
//     console.log(message);
//     console.log(firstName);
// }

// fn('Hello', 'John'); //if we forget one of the arguments, we will get 'undefined' bug in the console.

// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode); // if we would forget "return", and we are going to use console.log, we'll see undefined in the console.

// let key = 42;

// function getSecretCode(value) {
//     let code = value * key;
//     return code;
// } //function can use variables outside the function, but we can't use variables defined in the function, so function will find let key = 42;
// //but we couldn't use variable code which is inside the fuction

// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// let key = 42;

// function getSecretCode(value) {
    
//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in keyGenerator: ', key);
//         return key;
//     } //function finished executing

//     let code = value * keyGenerator();
//     console.log(' in getSecretCode: ', key);
//     return code; // key is global right now "42"

// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// changePercentOff(50); <-- we defined another function in utils.js and we can change "percent-off" parameter 

// let mySymbol = Symbol();


// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false
//     [mySymbol]: 'secretInformation'
// };

// person.age = 33;
// // person['age'] = 34;

// showMessage(person.age);

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false,
//     showInfo: function(realAge) {
//         showMessage(this.name + ' is ' + realAge);
//     }
// };

// person.showInfo(34);
// // showMessage (typeof person.showInfo);


// let message = 'Hello';

// function changeMessage(message) {
//     message = 'Hi!';
// }

// changeMessage(message);

// showMessage(message);

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false
// };

// function incrementAge(person) {
//     person.age++;
// }

// incrementAge(person);

// showMessage(person.age);

// !!! Somme example of documentation from developer.mozilla

// let now = new Date();
// showMessage(now.toDateString());

// showMessage(Math.random());

// let s = 'Hello';
// showMessage(s.charAt(0));

// DOM Interfaces - again from mozilla developer.
//HTMLElemnt - style property gives us possibility to overwrite css to style our web page

// const header = document.getElementById('message');

// header.style.fontWeight = '400';
// header.style.color = '#000';

// const button = document.getElementById('see-review');

// button.addEventListener('click', function() {
//     console.log('click');
// });

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
   
    const review = document.getElementById('review');

    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});