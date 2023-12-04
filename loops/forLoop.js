/* The For Loop:
lets say we have an array of numbers, [1, 2, 3, 4, 5], and want to multiply each element by 2. We could use the
Map() method to do this: */
let numbers = [1, 2, 3, 4, 5]
let doubles = numbers.map((number) => number * 2)
console.log(doubles)

/* each time we use the map method, the process is the same: we call the method on an Array, pass in a callback
function, and return a new Array.
on the other hand , a for loop allows for more controls over the iteration process. With the for loop, we can add
conditions and directly manipulate elements in an array rather than returning a new array */
//using for loop
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
}
console.log(numbers)

/* The for loop is made of three parts, initialization, the CSSConditionRule, and final expression

The Initialization: is where we declare a variable and set it equal to a starting value. In this case, we set i equal to 0
we use the variable to keep track of the index of the array, and we can name it whatever we want .

The condition: is a boolean expression that determines the number of times a loop will run and when it will stop. without it
the loop will continue execute indefenitely

The final Expression: Is where we increment or decrement the variable. In our example , we increment i by 1 in each
loop iteration. so the first time the loops runs, i is 0, The second time, i is 1.

Since, the for loop gives us more control over the iteration process, we can also keep the values of the 
original array and create a new one with the doubled values if we want to, here's how to do that:
*/
//let numbers = [1, 2, 3, 4, 5]
let doubled = []
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2)
}
console.log(doubled)

/* Here, we first create an empty array called doubled, then we use the for loop to iterate over the numbers array. 
inside the for loop, we pushed the doubled value of each element into the doubled array. */

/* The continue keyword: The continue keyword is used to skip current iteration of a loop and continue with the next one. 
For example, if we want to print all the numbers from 1 to 10 except 5. */
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}

/* The break keyword : is used to exit a loop */
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}