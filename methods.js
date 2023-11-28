/*----JavaScrip String Methods:
JS has several built in methods we can use to manipulate strings . Let's take a look at some of the most common ones */

/* 1.toUpperCase() :
This method is used to convert a string to uppercase. It does not change the original string, Instead it returns a new string
*/
let message = 'Hello World' 
console.log(message.toUpperCase())
console.log(message) // original string doesnt change

/* 2. toLowerCase() :
The toLowerCase() method converts a string to lowercase. it doesnt change the original string. */
console.log(message.toLowerCase())

/* 3. trim()
The trim() method removes whitespace from the beginning and end of a String.
 */
let message2 = ' Hello World '
console.log(message2.trim())

/* One important concept to understand is that these methods are chainable, meaning you can call one method after another
on the same string to perform multiple operations in a single line of code */
let message3 = ' Hello World '
console.log(message.trim().toUpperCase())

/*---- JS Math Functions :
JS has a built-in Math object that has properties and methods for mathematical constants and operations */

//1.Math.round(): returns the value of a number rounded to nearest significant figure
console.log(Math.round(4.7))

//2.Math.ceil() : returns the value of a number rounded to the nearest interger, the "ceil" stands for "ceiling"
console.log(Math.ceil(4.2))

//3.Math.floor() : returns the value of a number rounded down to the nearest interger
console.log(Math.floor(4.7))
console.log(Math.floor(4))

//4.Math.random() : returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random())
console.log(Math.random() * 10) //generates random number between 0 to 10

//5.Math.max() : returns the largest value of a set of numbers
console.log(Math.max(1, 2, 3, 4, 5))
console.log(Math.max()) //calling with no argument will return -infinity
console.log(Math.max(1, 2, 3, 4, 5, 'a')) //a non number argument will return NaN(Not a Number)

//6.Math.min() : returns the smallest value of a set of number
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.floor(Math.random() * 10))//the Math function can also be used to perform complex task

