/* The following are JS exerices from basic to advance :
Here are some JavaScript exercises focusing on syntax and data types.
Feel free to try solving them, and if you have any questions or want to check your answers, I'm here to help.
*/

/* Exercise 1: Variables and Data Types
1.Declare a variable called myNumber and assign it the value 42.
2.Create a variable named myString and assign it a string value of your choice.
3.Define a constant variable called PI and give it the value 3.14.
4.Create a variable isTrue and set it to a boolean value of your choice. */

//1
const myNumber = 42
console.log(myNumber)
//2
let myString = 'Javascript is great, you should learn it!'
console.log(myString)
//3
const pi = 3.14
console.log(Math.ceil(pi))
//4
const isTrue = true
console.log(isTrue)

/* Exercise 2: Working with Strings
1.Create a variable called firstName and set it to your first name.
2.Create a variable called lastName and set it to your last name.
3.Concatenate the firstName and lastName variables to form a full name and store it in a variable called fullName.
4.Create a variable called sentence and use string interpolation to combine fullName with a message. For example,
"Hello, [fullName]! How are you today?" */
//1
let firstName = 'Gbolahan'
//2
let lastName = 'Ademola'
//3
let fullName = (firstName + ' ' + lastName)
console.log(fullName)
//4
let sentence = ('Hello ' + fullName + '!' + ' How are you today?')
console.log(sentence)

/* Exercise 3: Arrays
1.Create an array called fruits with the elements "apple," "banana," and "orange."
2.Add "grape" to the end of the fruits array.
3.Remove the first element from the fruits array.
4.Find the length of the fruits array.
5.Given an array of numbers, write a function findMax that returns the maximum number in the array.
6.Write a function filterEvens that takes an array of numbers and returns a new array containing only the even numbers.
7.Create a function calculateAverage that takes an array of numbers and returns the average.
8.Write a function capitalizeWords that takes an array of words and returns a new array with each word capitalized.
 */
//1
const fruits = ['apple', 'banana', 'orange']
//2
fruits.push('grape')
console.log(fruits)
//3
fruits.shift()
console.log(fruits)
//4
console.log(fruits.length)
//5

/* Exercise 6: Functions
1.Create a function called add that takes two parameters, a and b, and returns their sum.
2.Write a function called isEven that takes a number as an argument and returns true if it's even and false if it's odd.
3.Define a function greet that takes a name parameter and logs a greeting message.
4.Create a function called reverseArray that takes an array as an argument and returns a new array with its elements in reverse order.
5.Write an if-else statement to check if a variable temperature is greater than 30. If true, log "It's a hot day!",
otherwise log "It's not too hot today."
*/
//1
function add (a,b){
    const result = a + b
    return result
}
//add(5,6)
console.log(add(5,6))
//2
function isEven (value) {
    //value = isNaN
    if (value % 2 === 0) {
        console.log('true')
    } else {
        console.log('false')
    }
    return value
}
isEven(6)

function greet() {
    const myGreeting = 'Hello, I am ademola'
    return myGreeting
}
console.log(greet())

/* function reverseArray(arr) {
    let result = arr.reverse()
    return result
}
console.log(reverseArray('mango', 'apple', 'cherry')) */
//4
function reverseArray(arr) {
    return arr.reverse()
}
let originalArray = ['mango', 'cherry', 'apple']
let reversedArray = reverseArray(originalArray)
console.log(reversedArray)
//5
function tempUnit(value){
    if (value > 30) {
        console.log ("It's a hot day")
    } else {
        console.log("It's not too hot today")
    }
}
tempUnit(35)
tempUnit(25)

/* let arrayNumbers = [1, 5, 2, 8, 3]
function findMax() {
    return Math.max(arrayNumbers)
}
console.log(findMax()) */
function findMax(numbers) {
    return Math.max(numbers)
}
const numbers = [1, 5, 2, 8, 3]
const maxNumber = findMax(numbers)
console.log(maxNumber)

