/* The ternary operator is a shorthand way to write an if-else statement. It's a conditional operator that takes
three operands: a condition, an expression to execute if the condition is true, and an expression to execute 
if the condition is false. Syntax: */

//condition ? expression1: expression2

//writing a condtion with the normal if-else statemet VS ternary operator
let age = 18
if (age >= 18) {
    console.log('You can vote')
} else {
    console.log('You can vote')
}

//Here's hoe we can do it using ternary operator
let Age = 18
Age >= 18
? console.log('You can vote')
: console.log('You cant vote')

/* The ternary operator is more shorter to read than the if-else statement but can be difficult to read in cases 
like this. It's mainly used wen assining value to a varible based on a condition: */
let Age2 = 18
let canVote = age >= 18 ? true : false
console.log(canVote)

let score = 80
let grade = score >=90 ? 'A' : score>= 70 ? 'B' : 'C'
console.log(grade)