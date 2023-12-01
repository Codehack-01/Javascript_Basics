/* Imagine you have a car and want to keep track of it's color, make, model, and milage. You could create a variable for 
each of these properties: */
const carColor = 'red'
const carMake = 'Tesla'
const carModel = 'Cybertruck'
const carMileage = 30

/* But what if you had 10 cars? You would have to create 4 variables for each carColor, giving you 40 variables in total.
And what if you wanted to add a new property? Like the type of fuel the car uses? You would have to create 10 new variables.
As you keep creating variables, it will become harder to know which ones are related to each other or which cars they belong to. */

/* With JS objects, you can group related data in a single variable. So instead of creating four different variables for
your first car, you can create one that stores all four properties. And if you want to add a new property, you can do
so without creating a new variable. Here's what using an object to store your car's data would look like: */

const myCar = {
    color: 'red',
    make: 'Tesla',
    model: 'Cybertruck',
    mileage: 30
}

/* In the example above, we created a variable named myCar and assigned it an Object. You'll recognize objects by the curly braces
surrounding them,followed by a list of key-value pairs. Each key-value pair is a property of the Object. In our example, the first property
is the color of the car. its key is the color and value 'red'. Unlike the variable declaration, the key and value are separated by a colon,
and a comma separates each property
*/

/* To access a property of an Object, you can use dot notation or bracket notation. Dot notation is the most common way to access 
properties; first you type the name of the Object, followed by a period, and then the name of the property. 
Here's how you would use dot-notation to access the value of the color property: */
console.log(myCar.color)
//And here is how you would use bracket notation:
console.log(myCar['color'])

/* Bracket notation is useful when you want to access a property whose name is stored in a variable. For example,
let's create a variable named propertyName and assign it to the string "color": */
const propertyName = 'color'
console.log(myCar[propertyName])

/* Rules and Guidelines for creating objects:
When creating objects, there are a few things to keep in mind:
*/

/* 1. Property names of an object must be unique: 
Multiple properties can have the same value, but if you try to create a property with the same name as an
existing property, the new property will override the old one. Also, if an object has multiple properties with the
same name, only be last one will be used. Example: */
const myFavoriteBook = {
    title: 'The Hobbit',
    title: 'The Lord of the Rings',
}
console.log(myFavoriteBook.title)

/* 2. Property names must be strings:
When you use a non-string as a property name, it will be converted to a string. For example,
the following code will create a property named "1": */
const myFavoriteDress = {
    1: 'green'
}
//console.log(myFavoriteDress.1) will return syntax error

/* 3. Invalid JS identifiers must be enclosed in quotes:
Objects keys can be any String, including an empty String. However, if the key is a string that is not a valid JS identifier,
it must be enclosed in quotes. For example, adding space to a key will result in a syntax error: */
const myFavoriteMeal = {
    //plate type: "ceramic" will return a syntax error
}
//But enclosing the key in quotes will make it a valid property name
const myFavoriteMeal2 = {
    "plate type": "ceramic"
    //"": "valid but not recommended" will return syntax error
}
console.log(myFavoriteMeal2["plate type"])
/* Notice that we used the bracket notation to access the property. You cant use the dot notation when the 
key contains spaces or other invalid characters. */
const myFavoriteCar = {
    'engine*type': 'electric',
}
//console.log(myFavoriteCar.engine * type) will return error
console.log(myFavoriteCar['engine*type'])

/* 4. Property names are case-sensitive :
Remember that JavaScript is a case-sensitive language. This also applies to object properties. Example :*/
const myFavoriteMovie = {
    title: 'Titanic',
    Title: 'The lion king' 
}
console.log(myFavoriteMovie.title)
console.log(myFavoriteMovie.Title)

/* 5. Property values can be any valid JS expression:
The value of a property can be any valid JS expression, including a function. When a function is used as a property value,
it's called a method, which is why we've been using the term "method" when referring to inbuilt JS functions like console.log().
let's create an object with a method named sayHello: */
const person = {
    fullName: 'Victor Otedola',
    sayHello: function() {
        console.log('Hello! My name is ' + this.fullName)
    },
}
person.sayHello()

/* In the example AnimationPlaybackEvent, we created an object named person with a fullName property and a method named sayHello.
The sayHello method uses the 'this' keyword to access the name property of the object.
When you use the 'this' keyword inside a method, it refers to the object on which the method is being called. In this case,
this refers to the person object.

You can also use an arrow function as a method, but the 'this' keyword will not work the same way, instead, it's value
will be determined by the context in which the method is called:
*/
const person2 = {
    fullName: 'Linda Chima',
    sayHello: () => {
        console.log('Hello! My name is ' + this.fullName)
    }
}
person2.sayHello()
person2.sayHello()

/* The this keyword doesnt work the same way as the first example because it is used in an arrow function. In this case,
this refers to the global object which doesn't have a fullName property. This can get confusing
so its best to avoid using the arrow functions().
*/

/* Adding, Modifying and Removing Properties:  */