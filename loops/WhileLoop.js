/* The while loop is similar to the for loop but doesnt have a final expression. It's used when we dont know how many times
a loop will run. For example, if we have a dice game where we roll a die untill we get a 6. we could get a 6 on the first roll,
or it could take 10 rolls. since we dont know how many times, we cant use a for loop. With the while loop, you can keep
rolling the die as long as the value is not 6. In plain english, writing the while loop would look like this: 
*/
let dieRoll = 0
while (dieRoll !== 6) {
    dieRoll = Math.ceil(Math.random() * 6)
    console.log(`You rolled a ${dieRoll}`)
}

/* If the first roll is 6, the loop will run only once. If it takes 10 rolls, the loop will run 10 times. 
The while loop will continue to run as long as the condition is true.
*/
let dieRolll = 6
while(dieRolll !== 6) {
    dieRolll = Math.ceil(Math.random() * 6)
    console.log(`You rolled a ${dieRolll}`)
    
}

/* In a while loop, we ensure that the condition will eventually be met. Otherwise, the loop will run indefinitely */

/* The do..while loop:
A do...while loop is similar to a while loop, but unlike the while loop, the condition is checked after the loop runs.
The means that the loop will always run atleast once. Example:
*/
let DieRoll = 6
do {
    DieRoll = Math.ceil(Math.random() * 6)
    console.log(`You rolled a ${DieRoll}`)
} while (DieRoll !== 6)