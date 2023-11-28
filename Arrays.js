/* In JS, we use arrays to store multiple values in a single variable.
These values can be of any data typeof, including numbers, strings, and even other arrays.
You can also think of an array as a data structure that storesa list of items . Arrays are a fundamental building blocks 
of many JS programs. They are used in various contexts, from simple data lists to more complex data structures */

/* Declaring and Initializing Arrays: You can use the Array constructor or the square bracket [] notation to create an
empty Array. In Js we use constructors to create data structures with a specific set of properties.
To use a constructor, we need the "new" keyword: */
const myArray = new Array()
//To create an empty array using the square bracket notation, you can write;
const myArray2 = []
//Both statements create an empty array that you can add elements to later.
/* You can also initialize an array with elements by passing them as arguments to the Array constructor or using the square
bracket notation and separating the elements with commas. */
const favoriteFruits = new Array (
    'apple',
    'banana',
    'orange'
)
console.log(favoriteFruits)
const favoriteFruit = ['apple', 'banana', 'orange']
console.log(favoriteFruit)

/* Accessing and modifying Array Elements:
To access elements in an Array, you can use the square bracket Notification, along with the index of the element you want to access.
The index of an array starts from 0, which represents the first element in the Array. */
console.log(favoriteFruit[0]) //Accessing first element
console.log(favoriteFruits[1]) //Accessing second element
//You can modify the elements in an array by reassigning the value of a specific index. Example;
favoriteFruits[0] = 'strawberry'
console.log(favoriteFruits[0])

//Array Length : The length property of an array returns the number of elements in it. Example
console.log(favoriteFruits.length)//unlike array index, the length of an array is not zero-based

/* Array Methods : Arrays have several methods that you can use to manipulate and interact with the data stored in them. 
These methods are built-in functions that are available to every JavaScript array. some of these includes
- push() //adds one or more elements to the end of an array
- pop() //removes the last element from an array
- shift() //removes the first element from an array
- unshift() //adds one or more elements to the beginning of an array
- indexOf() //returns the index of the first occurence of an element in an array
- slice() //returns a shallow copy of a portion of an array into a new array object
- splice() //changes the content of an array by removing or replaing existing elements and/or adding new elements in place
- join() //joins all elements of an array into a string
*/
//Examples

const Fruits = ['apple', 'banana', 'orange', 'strawberry']
Fruits.push('mango', 'pineapple')
console.log(Fruits)

Fruits.pop()//removes last element from the array which is pineapple
console.log(Fruits)

Fruits.shift()//removes first element from the array which is apple
console.log(Fruits)

Fruits.unshift('lemon', 'grape') //adds to the begining of the array
console.log(Fruits)

console.log(Fruits.indexOf('banana'))
console.log(Fruits.indexOf('lime'))//retuns -1 if element isnt present in array
const topThreeFruits = Fruits.slice(0,3) //used to extract portion of an array.if you dont specify the ending index, the slices goes to the end

console.log(topThreeFruits)
const FruitInBasket = Fruits.slice(2)
console.log(FruitInBasket)
//The slice() method can also take a negative index
const LastFruit = Fruits.slice(-1)
console.log(LastFruit)

Fruits.splice(0, 2, 'carrot', 'cherry')// replaced the first and second fruit with carrot and cherry
console.log(Fruits)
Fruits.splice(0, 2)
console.log(Fruits) //removed the first 2 fruits

const FruitString = Fruits.join()
console.log(FruitString) //joins all elements of an array into a string
const newFruitString = Fruits.join(' and ')
console.log(newFruitString)

Fruits.reverse()
console.log(Fruits) //reverses the elements in a array

