/*---- Operators are symbols that perform actions on values. For example, when you write 2 + 3 on your claculator, 
you use the plus operator to add two values. Types of operators includes:
1. Arithmetic operators
2. String Operators
3. Assignment Operators
4. Comparison Operators
5. Logical Operators
*/

/*---- 1. Arithmetic operators are used to perform mathematical calculations like , +,-,*,/,%, **. 
we also use the increment(++) and decrement operators(--) to increase or decrease value of a variable by 1
These operators can be placed before or after an operand*/
console.log(10 + 2)
console.log(10 - 2)
console.log(10 * 2)
console.log(10 / 2)

/* when placed before the operand, the operators are called prefix operations, meaning the operation is applied
before the value is returned giving us a new value */
//Example
let firstValue = 3
console.log(++firstValue)

/* when placed after the operand, they are called postfix operators; the operation is applied to the variable
after the current value is returned. */
//Example
let secondValue = 5
console.log(secondValue++)
console.log(secondValue)// notice we have to log the variable separately to get its new value, this is bcos when you use postfix operator,
//the value is returned first, and then the operator is applied.
/* NOTE: The increment and decrement operators reassigns new values, so you can only do the with variables declare with the let keyword
if you use const keyword, you will get an error  */

/*---- 2. The concatenation operator/ string : In JS, we use the concatenation operator to concatenate Strings, the plus +
symbol serves as the concatenation operator when one or more of the operands are strings
*/
console.log('Hello' + ' ' + 'Everyone')
console.log(' James ' + 'Bond ' + 7)
console.log(10 + 'years from now' + "I'll be a 100 years old")

/* 3.---- The assignment operator: we use the assignment operators to assign a value to a variable, you've seen (=) in action
There are also compound assignment operators in JSON, which include: +=, -=, *=, /= and %=
 */
let age = 10
age += 5 //This is same as writing age = age + 5
console.log('Age =',age)

age = 10 
age *= 5 // 50
age /= 5 // 10
age -= 5 // 5
age %= 5 // 0


/* 4. Comparison Operators: Are used to compare two value and return a boolean value (true/false) 
based on a computer's result. example of these includes

. == : equal to
. != : not equal to
. > : greater than
. < : less than
. >= : greater than or equal to
. <= : less than or equal to
. === ; strict equal to (compares both the values and type of the operands)
. !== : strict not equal to (compares both the values and type of the operands)
*/
//Examples
console.log(10 == 10)
console.log(10 == 15)
console.log(10 != 5)
console.log(10 > 5)
console.log(10 < 5)
console.log(10 >= 10)
console.log(10 >= 11)
console.log(10 <= 10)
console.log(10 <= 9)
console.log(10 === 10)
console.log(10 === '10')
console.log(10 !== 9)

/* 5.Logical Operators: In JS, we use logical operators to perform logical operations like AND (&&),
OR(||) and NOT (!). 
- AND : returns true if both operands are true, and false if either operand is false
- OR : returns true if any of the operand is true, and false uf both operand is false
- NOT : returns true if the both operand is false.
*/
console.log(10 > 5 && 7 < 10)
console.log(10 > 5 && 7 > 10)
console.log(10 > 5 || 7 > 10)
console.log(10 < 5 || 7 > 10)
