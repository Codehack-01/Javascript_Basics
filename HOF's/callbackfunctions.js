/* High Order Functions (HOF's) are functions that takes other functions as arguments or use them as there return variables
They are commonly used in JS to manipulate arrays and simplify complex tasks. When a function is passed as an argument
to another function, it is called a callback function(to be called back at later time).
There are several built-in higher-order functions we can use to manipulate arrays. for example,
every array has a map() function we can use to modify each element in it.
The map() function is a higher-order function that takes a callback fuction as an argument, The callback function is applied
to each element in the array, then the map() function returns a new array with the results of the callback function applied to each
element in the original array
*/
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map (
    (number) => number * number
)
console.log(squaredNumbers)
/* In the example above, the anonymous function (number => number * number) is passed as an argument to the map() function.
In the callback function, the number parameter represents each element in the numbers array 
The map() function applies the callback function to each element in the array and returns a new array named squaredNumbers
with the square of each element in the original array. Let's try another example.
*/
const words = ['this', 'is', 'such', 'a', 'great', 'day']
const capitalizeWords = words.map (
    (word) => word.toUpperCase()
)

console.log(capitalizeWords)
/* In this example, we used the map() function to capitalize each elements in the word array. The map() function does not
modify the original array, so we have to assign it's return value to a new array named capitalizeWords */