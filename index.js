// Import stylesheets
import './style.css';

// flat() method:
// The flat() method creates a new array with all sub-array elements concatenated recursively up to a specific depth.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
//[1, 2, 3, 4, 5, 6, 7, 8]

// flatMap() method:
// The flatMap() method returns a new array formed by applying a given call-back function into each element of the array and then flattening the results by one array. This method is similar to the map() method and is chained to the flat() method.
const account1 = {
  owner: 'Thilip Dhavanvel',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Udhaya Chandran',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Akshitha Sai',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Daniel Easu',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// flat
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log('flat: ', overalBalance); //flat: 17840

// flatMap
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log('flatMap: ', overalBalance2); //flatMap: 17840

// *********************************************************
// How to Use the flat() and flatMap() Methods to Flatten Arrays in JavaScript
// by Kenechukwu Nwobodo, JULY 26, 2022/#JAVASCRIPT
// https://www.freecodecamp.org/news/flat-and-flatmap-javascript-array-methods/
// *********************************************************

// Array.flat()
// *****************************

//To set the depth parameter
// array.flat(depth);

// The depth value is 1 by default and you can leave it empty.
// The depth value takes a number as its data type.

// array.flat(1) is equal to array.flat().

const array1 = ['mon', 'tues', ['wed', 'thurs', ['fri', 'sat']], 'sun'];

//to concatenate the first subarray with the default value of depth 1
const flattened = array1.flat();
console.log(flattened);
//["mon", "tues", "wed", "thurs", Array ["fri", "sat"], "sun"];

//to concatenate the first subarray and second subarray with the depth 2
const flatDepth2 = array1.flat(2);
console.log(flatDepth2);
// ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"]

// Array.flatMap()
// ********************************

const array2 = [1, 2, [4, 5], 6, 7, [8]];

//using Array.map() method
const flattenedOnly = array2.flat();
console.log(flattenedOnly);
// [1, 2, 4, 5, 6, 7, 8]

// using Array.flatMap()
const flatmapped = array2.flatMap((item) => item);
console.log(flatmapped);
//[1, 2, 4, 5, 6, 7, 8]

// using Array.flatMap() for array1
const flatMapped = array1.flatMap((item) => item);
console.log(flatMapped);
// ["mon", "tues", "wed", "thurs", Array ["fri", "sat"], "sun"];

// Combine flatMap() and flat() methods
const combinedflat = array1.flatMap((item) => item).flat();
console.log(combinedflat);
// ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"]

//Example of more deeper array
const array3 = [1, 2, [3, [4, 5, [6, 7]]]];

const combinedDeeper = array3.flatMap((item) => item).flat(2);
console.log(combinedDeeper);
//[1, 2, 3, 4, 5, 6, 7]
