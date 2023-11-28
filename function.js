//In JavaScript, functions are a way to group code that can be reused or executed as many times as needed in a program
/* How to define functions n JS: JS allows us to define functions in different ways . A common way to do this 
is through a function keyword.
syntax: */
//Lets write a function that multiplies ay number by two and returns the result:
function multiplyByTwo(value) {
    const result = value * 2
    return result
}
console.log(multiplyByTwo(10))
/* Function parameters: The parameter of a function are names used to represent real values we intend to provide
when we call a function, the parameter in the above code is "value" */
/* A function call or function invocation is a request to execute a function, we'll see how to do this
when we use the multiplyByTwo function */
/* The return keyword: we use the return keyword to end the execution of a function while providing a specified value */

function multiplyByTwo(value) {
    if (isNaN(value)) { //isNaN means 'Is not a number'
        return 'value must be a number'
    }

    const result = value * 2
    return result
}
console.log(multiplyByTwo(20))
console.log(multiplyByTwo('This is a string'))

/* function parameters VS arguments: when invoking our function, the values we supply to it in place of it's parameter are known as arguments
so in the example above, the number 20  and 'This is a function are arguments' */
/* More on Return statement: without using the return statement to tell our function what to return, its default
value will be undefined.  */
//Example
function multiplyByTwo(value) {
    const result = value * 2
    return result
}
console.log(multiplyByTwo(30))
//The function also returns undefined by default when we provide the return keyword without a value

/* Anonymous functions: we've seen how to use function declarations to define named functions. we can alos use
function declarations to define anonymous functions and Immediately Invoked Function Expressions (IIFE). 
Anonymous functions are functions that are without names; hence the word anonymous.
*/
/* (function () {
    return alert("I'm a function, and I'm anonymous")
})() */

/* Function expression: To reuse an anonymous function, we have to assign it to a variable. This way we can 
reference it by the variable's name. */
/* const alertUser = function () {
    return alert("I'm anonymous, but with a name")
}
alertUser() */

/* Multi-line return statements: when returning an expression in a function, dont add a new line between return and the value */

/* Arrow Functions: JS arroe function also known as "fat arrow" or "lambda" functions are a shorthand way to write
functions expresion in JS, they were introduced in ES6(the 6th major version of JS). An arrow function is defined
using the "fat arrow" syntax, which is a single equals signs followed by a greater than sign(=>) */
function squareByTwo(value) {
    return value * value
}
console.log(squareByTwo(10))
//Assigning variable to this would look this way
const squareNumber = function (value) {
    return value * value
}
console.log(squareNumber(5))

//Using the fat arrow function would look like this
const squareOfNumber = value => value * value
console.log(squareOfNumber(3))
//Arrow functions can also be written in curly brackets
const squareOfNumber2 = (value) => {
    return value * value
}
console.log(squareOfNumber2(7))

/* one of the main benefits of arrow functions is there conciseness. They are especially useful when we need to Write 
a function that takes another function as a parameter(This are called callback functions, and the parent function
that takes the callback function as a parameter is called Higher Order Functions) */