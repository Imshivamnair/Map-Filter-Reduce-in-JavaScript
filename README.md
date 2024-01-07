# Map-Filter-Reduce-in-JavaScript

In JavaScript, map, filter, and reduce are higher-order functions that allow you to perform operations on arrays in a concise and functional way.

1. map:
The map function is used to transform each element of an array based on a provided function and create a new array with the results.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
// doubled is now [2, 4, 6, 8, 10]

2. filter:
The filter function is used to create a new array containing only the elements that satisfy a specified condition.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers is now [2, 4]

3. reduce:
The reduce function is used to reduce an array to a single value by applying a function to each element, accumulating the results.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// sum is now 15


In the reduce example, the initial value (0 in this case) is optional, but it's a good practice to provide it to avoid unexpected behavior.

Here's a more detailed breakdown:

i. map: Transforms each element in an array.

const doubled = numbers.map((num) => num * 2);

ii. filter: Creates a new array with elements that satisfy a condition.
const evenNumbers = numbers.filter((num) => num % 2 === 0);

iii. reduce: Reduces an array to a single value.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

These functions are powerful tools for working with arrays in a functional programming style, making your code more concise and expressive.
