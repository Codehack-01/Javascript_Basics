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