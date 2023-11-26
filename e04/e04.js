/* 

1. Create a function `square` that takes a single parameter x and returns the square of x.
2. Create a function `sum` that takes two parameters x and y and returns the sum of x and y.
3. Create a function `isPositive` that takes a single parameter x and 
returns true if x is positive, and false if x is negative or zero.
4. Write a function named `calculateArea` that takes a width and a height as 
arguments and returns the area of a rectangle.
5. Write a function named `calculateVolume` that takes a length, width, and height as 
arguments and returns the volume of a rectangular prism.
6. Write a function named `convertCelsiusToFahrenheit` that takes a temperature 
in Celsius as an argument and returns the equivalent temperature in Fahrenheit

*/


function square(x) {
        return x*x;
    }
function sum(x, y) {
        return x+y;
    }
function isPositive(x) {
    return x>0 ? true : false;
}
function calculateArea(x, y) {
    return x*y;
}
function calculateVolume(x, y, z) {
    return x*y*z;
}
function convertCelsiusToFahrenheit(x) {
    return (x * 9/5) + 32;
}
console.log(square(2)); // 4
console.log(square(4)); // 16
console.log(sum(2, 3)); // 5
console.log(sum(4, 5)); // 9
console.log(isPositive(2)); // true
console.log(isPositive(-2)); // false
console.log(calculateArea(10, 5)); // Output: 50
console.log(calculateVolume(10, 5, 2)); // Output: 100
console.log(convertCelsiusToFahrenheit(0)); //output 32
