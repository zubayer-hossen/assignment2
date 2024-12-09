

// 1. Function to calculate the difference
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); // Output: 5

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is Odd:", isOdd(7)); 

// 3. Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Smallest Number:", findMin([10, 5, 8, 2, 15])); 

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([10, 5, 8, 2, 15])); 

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}
console.log("Sorted Descending:", sortArrayDescending([10, 5, 8, 2, 15])); 

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased First Letter:", lowercaseFirstLetter("Hello")); 

// 7. Function to find the average of an array
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40])); 

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is Leap Year:", isLeapYear(2024)); 
