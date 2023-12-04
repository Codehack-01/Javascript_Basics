/* Conditional statements: we've learnt about basic conditional statements and how to use the if-else statement to execute 
code based on a condition. Conditional statements are used to control the flow of a program, just like you live
your everyday life. You make decisions based on your circumstances and execute different actions accordingly. Example: */

/* Else-if statements in JS: To check multiple conditions, you can use an else-if clause. The else-if cluase allows you to chain
several conditions together so that if the first condition is not met, the second condition is checked, and so on. example: */
if (typeof 'Hello' === 'number') {
    console.log('The first condition was met!')
} else if (typeof 10 === 'number') {
    console.log('The second condition was met!')
} else {
    console.log('None of the condition were met.')
}
//NOTE: An else-if statement is only evaluated if the preceding condition is not met
if (typeof 'Hello' === 'string') {
    console.log('The first condition was met!')
} else if (typeof 10 === 'number') {
    console.log('The second condition was met')
} else {
    console.log('None of the conditions were met')
}
//When you run the above code, the first statement returns 

/* If you want to want to evaluate the second condition regardless of the output of the first, you should use an if statement
instead. Here's an example: */
if (typeof 'Hello' === 'string') {
    console.log('The first condition was met!')
} if (typeof 10 === 'number') {
    console.log('The second condition was met!')
} else {
    console.log('None of the condition were met.')
}

//The else clause
if (typeof 'Hello' === 'number') {
    console.log('The first condition was met!')
} if (typeof 10 === 'string') {
    console.log('The second condition was met!')
} else {
    console.log('None of the condition were met.')
}