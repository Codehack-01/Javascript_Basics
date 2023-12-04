/* The for...in loop:
The for...in loop is used to iterate over the enumerable properties of an object. If we have an object with a list of 
properties and we want to access each property, we could use the for loop to iterate over the objects like this:
*/
let person = {
    name: 'Jane',
    age: 27,
    city: 'Kigali',
}
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log(
        `${Object.keys(person)[i]}: ${
            person[Object.keys(person)[i]]
        }`
    )
}

/* while this works, its not easy to read. We can use the for...in loop to write the same code in a more concise way */
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

/* In the example above, we declared a variable named key and assigned it the value of each property in the person
object using the in operator. We then used the key variable to access the key variable to access the value of each property 
in the person object. The in operator in JS IS USED TO CHECK WHETE=HER A SEPCIFIED PROPERTY IS IN AN OBJECT. we can also use
it outside of a loop. example:
*/
if ('name' in person) {
    console.log('The person object has a name property')
}
//we can also use it to check if an element exist in an array
let fruits = ['apple', 'banana', 'orange']
if ('apple' in fruits) {
    console.log('The apple element exists in the fruits array.')
}

/* since we can use the in operator in an Array, we can alsoe use the for...in loop to iterate  over the elements of an array */
let names = ['Jane', 'John', 'Ada']
for (let index in names) {
    console.log(names[index])
}
/* when using the for...in loop to iterate over an array the variable assigned to the in operator will be the index of 
each element in the array. */