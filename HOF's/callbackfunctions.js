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

/*  CREATING hIGH-ORDER FUNCTIONS:
We can create our high-order function ourselves. All we need to do is add a function parameter or return another function
when it is called. Here's an example of a high-order function that takes a callback function as an argument
*/
const higherOrderFunction = (callback) => {
    const string = 'HOFs are really cool!'
    callback(string)
}
higherOrderFunction(console.log)
/* Our HOF takes a callback function as an argument, then calls that function with the string 'HOFs are really cool!'.
In this case, supplying console.log() as an argument to the higherOrderFunction() logs the string to the console 
We can also return a function from another function. Here is an exam of HOF that returns a callback function:
*/
const callMeTwice = () => console.log
callMeTwice()('Hey, this works!')
/* In this example, the callMeTwice(). function returns the console.log() function, so, when we call callMeTwice(), what we get is the
console.log() function. so, we will have to call the result of callMeTwice() to use the console.log() function.
chaining function like this is known as CURRYING. In currying, each function call returns another function that can be called 
again with a different argument. */

/* Built-in HOFs and Array Methods
1.--- forEach() : The forEach() function is an array method that executes a callback function on each of it's elements. Unlike the map()
function, the forEach() function does not return a new array and does not modify the original array either. Instead it iterates
through the elememts of an array and performs an operation on each of them.
We can use the forEach() to log each element in an array to the console or perform an action with each of them and push the results to a
new array.
*/
const namesOfPeople = ['ademola', 'jude', 'oluchi', 'kanye', 'tiwa']
namesOfPeople.forEach((name => console.log(name)))
//Titlecasing the names of people in our array and push into a new array
const titleCasedNames = []
namesOfPeople.forEach((name) => {
    const titleCasedName =
    name[0].toUpperCase() + name.slice(1)
    titleCasedNames.push(titleCasedName)
})
console.log(titleCasedNames)
/* In this example, we use the forEach() function to iterate through the namesOfPeople Array. For each string in the Array,
we capitalize it's first letter using the square bracket notation and the toUpperCase() method. */

/*-------- 2. Filter : The filter() function is another array method we can use to filter out elements that meets a condition,
for example, if we have an array of countries, we can use the filter() function to filter out countries that starts with 'N' */
const countries = ['Nigeria', 'UK', 'Netherlands', 'Canada', 'USA', 'Norway']
const countriesThatStartWithN = countries.filter (
    (country) => country.startsWith('N')
)
console.log(countriesThatStartWithN)
/* In JS every string has a 'startsWith()'me thod that returns true if the string starts with the character we specify 
In our example, the filter method  takes a callback function with a parameter named country representing each element in the 
countries array.
NOTE: we can also use the square bracket notation or the charAt() method to check if a string starts with a character, the charAt()
method returns the character at the specified index in a string:
*/
const countriesThatStartWithU = countries.filter(
    (country) => country.charAt(0) === 'U'
)
console.log(countriesThatStartWithU)
//we can use the filter() function to find out elements that don't meet a condition, lets filter out countriesthatdontstart with letter 'N'
const countriesThatDontStartWithN = countries.filter(
    (country) => !country.startsWith('N')
)
console.log(countriesThatDontStartWithN)

/*3. sort()
The sort() method is used to sort the elements of an array. The sort() method modifies the original array and returns the sorted array
By default, the sort() method sorts the elements of an array in ascending order.
Examples:
*/
const unsortNumbers = [7, 4, 3, 1, 5, 2, 8, 6]
unsortNumbers.sort()
console.log(unsortNumbers)
//we can also sort an array of strings
const favoritesColors = [
    'red', 'blue', 'green', 'yellow', 'orange'
]
favoritesColors.sort()
console.log(favoritesColors)// see the blue comes first, and the string are arranged alphabetically
//To change the sort() to descending order, since it ascends by default
const famousBirthYears = [
    1990, 2001, 1989, 2023, 2005, 1993, 2020
]
famousBirthYears.sort((a, b) => b - a) //we returned b-a so that the second element comes before the first element
console.log(famousBirthYears)
//if we wanted to sort the array in ascending order, we would return a - b so that the first element comes before the bigger number
famousBirthYears.sort((a,b) => a - b)
console.log(famousBirthYears)

/* 4.----- reversed(): 
we can use the reverse() method to reverse the order of the elements in an Array. The reverse method
modifies the original array */
const agesOfStudents = [13, 10, 15, 12, 11, 14]
agesOfStudents.reverse()
console.log(agesOfStudents)//Notice that the reverse method doesnt sort the element of an array

/* 5.-----reduce() : 
The reduce() method reduces an array to a single value. it iterates through an array,performs an action
on each elements, and returns a single value. for exmaple if we want add all the elements in array we can use the
reduce method */
const participantPoints = [10, 20, 30, 40, 50]
const totalPoints = participantPoints.reduce(
    (a, b) => a + b
)
console.log(totalPoints)
//The reduce() method takes a callback function with two parameters, a and b representing two elements in the array
const minusedPoints = participantPoints.reduce (
    (a, b) => a - b
)
console.log(minusedPoints)// 10 - 20 -30 - 40 - 50
const multipliedPoints = participantPoints.reduce(
    (a, b) => (a * b)
)
console.log(multipliedPoints)
//we can use the reduce() method to concatenate the elements in an array of strings
const favoriteDishes = ['jollof', 'burger', 'yam', 'meatloaf', 'pizza']
const favoriteDishesString = favoriteDishes.reduce(
    (a, b) => a + ', ' + b
)
console.log(favoriteDishesString)

/* 6.---- every(): 
The every() method checks if all elements in an array meet a condition. it returns a boolean value
for exmaple, if we want to check if all the elements in an array are greater than 5, we can do so with every() method
*/
const participantAges = [20, 25, 14, 29, 30, 17]
const areAllParticipantsOlderThan18 =
participantAges.every((age) => age > 18 )
console.log(areAllParticipantsOlderThan18)

const areAllParticipantsOlderThan10 = participantAges.every((age) => age > 10)
console.log(areAllParticipantsOlderThan10)

/* 7.-----some() and includes(): 
The some method is similar to every() method, but unlike the every() method, it checks
if at least one Element in an array meets a condition, and then returns a boolean value. Example: */
const cities = ['Massachusetts', 'Enugu', 'Vienna', 'Abuja', 'London']
const atLeastOneCityHasE = cities.some((city) =>
city.includes('e')
)
console.log(atLeastOneCityHasE)
/* In JS, the includes() method checks if a string contains a specified substring, or if an array contains a
specified Element. */
console.log(cities.includes('Abuja'))

/* 8.----find() :
The find() method returns the first element in an array that meets a condition. Example */
const quantities = [7, 3, 9, 13, 5, 11]
const firstQuantityGreaterThan10 = quantities.find((quantity) => quantity > 10
)
console.log(firstQuantityGreaterThan10) /* returns 13 cause it is the first element that meets the condition, if there is no
element that meets the condition it returns false */

/* 9.----findIndex() :
we can use the findIndex() method to find the index of the first element in an array that meets a condtion,
if no element in the array meets the condition, the findIndex() method will return -1
 */