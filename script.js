//Basic Data Types

//string
//number
//bigInt
//boolean
//undefined
//null
//symbol

//Arrays
let myArray = [50, 10, 30];
myArray.push(100);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.sort();
console.log(myArray);

let fruits = ["apple", "banana", "orange"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

fruits.pop();
fruits.toSorted();
console.log(fruits);

let fruit = ["peach", "raspberry", "banana"];
console.log(fruit.length);
console.log(fruit[fruit.length-1]);

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];

const spread = [...array1, ...array2];
console.log(spread);

console.log(spread.slice(2, 5));

//object literal
// const human = {
//   firstName: "Nataly", 
//   lastName: "Namix", 
//   age: 31
// };

// //dot notation
// console.log (human.firstName);

// //bracket notation
// console.log(human[`firstName`]);

//to use a function I create, I need to call it
function sayHi(){
  console.log("Hi!");
  console.log("How are you?");
};

sayHi();

//defining a function that takes input

//parameters are the infoo a function wants
//arguments are the info I supply when I call it

function greetMe(firstName, lastName){
  console.log(`Hello ${firstName} ${lastName}!`);
  console.log("How are you?")
};
greetMe("Nataly", "Namix");

const human = {
  firstName: "Nataly",
  lastName: "Namix",
  age: 31,
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};