/*

1. Create a variable num and assign it the value 42.
    Use an if statement to check if num is greater than 50. 
    If it is, log "Number is greater than 50" to the console. 
    If it is not, log "Number is not greater than 50" to the console.
    
2. Create a variable str and assign it the value "hello".
    Use a switch statement to check the value of str. 
    If it is "hello", log "Greetings!" to the console. 
    If it is "goodbye", log "Farewell!" to the console. 
    If it is neither, log "Unexpected input" to the console.
    
3. Create a variable bool and assign it the value true.
    Use a ternary operator to check the value of bool. 
    If it is true, log "Boolean is true" to the console. 
    If it is false, log "Boolean is false" to the console.

*/

let num = 42;

if (num>50) {
    console.log("Number is greater than 50");
}
else {
    console.log("Number is not greater than 50");
}

let str = "hello";

switch (str) {
    case 'hello':
        console.log("Greetings!");
        break;
    case 'goodbye':
        console.log("Farewell!");
        break;
    default:
        console.log("Unexpected input");
}

let bool = true;
bool ? console.log("Boolean is true") : console.log("Boolean is false");