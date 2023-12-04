/* The for...of loop is similar to the for..in loop, but it iterates over the values of an array instead 
of the indexes. Let's rewrite the names loop exapmle using the for..of loop */
let names = ['Jane', 'John', 'Ada']
for (let name of names) {
    console.log(name)
}

/* When accessing the elements of an array using the for...of loop, the variable assigned to the of operator
will be the value of each element in the array. We can also use for...of loop to iterate over the characters of a string */

let name = 'jane'
for (let character of name) {
    console.log(character)
}