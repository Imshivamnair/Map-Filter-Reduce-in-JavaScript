/*Certainly! Here's a more comprehensive example that demonstrates the use of map, filter, and reduce in JavaScript:

javascript*/

// Example array of numbers
const numbers = [1, 2, 3, 4, 5];

// Example using map: Doubling each number
const doubled = numbers.map((num) => num * 2);
console.log('Doubled:', doubled); // Output: [2, 4, 6, 8, 10]

// Example using filter: Keeping only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // Output: [2, 4]

// Example using reduce: Calculating the sum of all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // Output: 15


/*In this example:

map is used to create a new array where each number is doubled.
filter is used to create a new array containing only the even numbers.
reduce is used to calculate the sum of all numbers in the array.
Feel free to modify the array or the operations to experiment with different scenarios and see how these functions can be applied to various use cases.*/