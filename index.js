// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// flat() method:
// The flat() method creates a new array with all sub-array elements concatenated recursively up to a specific depth.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());


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
	.map(acc => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
 
console.log(overalBalance);
 
// flatMap
const overalBalance2 = accounts
	.flatMap(acc => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
 
console.log(overalBalance2);
