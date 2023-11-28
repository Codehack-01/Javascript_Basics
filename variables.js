//VARIABLES
//A variable is a named location for storing data in the computer's memory. In other words,
//its a container in which we can store all kinds of data, like numbers, text, piece of code, and even other variables
/* variables declaration is made up of four parts: 
1.The declaration keyword e.g let, var, const
2.The variable name
3.The assignment symbol (=)
4.The variable value
*/

let myName = 'Gbolahan Ademola'
console.log(myName)
//re-assigning the variable
myName = 'Gbolahan Hassan Ademola'
console.log(myName)

//There are several ways to declare a variable in JS
/*--- 1. The let keyword :This is the most common way to declare a variable in JS. it is used to create local variables i.e(variables
    assessible only within a particular block of code)
*/
/* if (true) {
    let message = 'JavaScript is awesome!'
}
console.log(message) */// this would return an error because the message variable is local and only accessible within the block of code,enclosed in the curly braces

/* Gbobal variables on the other hand, are variables accessible from anywhere in your code, if you have to declare a global
variable with your let keyword, you can do so by declaring it outside your code blocks
 */
let message = 'JavaScript is awesome!'
if (true) {
    console.log(message)
}

/*--- 2. The var keyword is the oldest way to declare a variable in JavaScript and used to create gbobal variables */
if (true) {
    var message2 = 'JavaScript is cool!'
}
console.log(message2)

/* 3. The const keyword :This are used to create varaiables that can be reassigned, so we dont accidentally change their values */
/* const age = 21 //if we attempt to reassign the value of the variable, we will get an error
age = 22
console.log(age) */
