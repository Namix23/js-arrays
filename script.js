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