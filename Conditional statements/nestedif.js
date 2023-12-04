/* Sometimes, you'll need to check multiple conditions inside a single condition. For example, if your laptop
works, but the battery is low, you might want to charge instanceof. If the laptop works and the battery is 50%
or more, you might want to use it. If the laptop works, but the internet connection is unavailable, you might 
want to restart the router. You can use regular if-else statements to check all these conditions:
Nesting if statements is a great way to simlify your code when you have multiple conditions that depends on one. */
let laptopWorks = true
let batteryLow = true
let internetUnavailable = true
let batteryIsCharged = false

if (laptopWorks) {
    if (batteryLow) {
        console.log('charged it')
    } else if (internetUnavailable) {
        console.log('Restart the router')
    } else if (batteryIsCharged) {
        console.log('Use it')
    }
}
//If you want to handle the case of ehrn laptop doesnt work, you can add an else clause to parent condition:
if (laptopWorks) {
    if (batteryLow) {
        console.log('charged it')
    } else if (internetUnavailable) {
        console.log('Restart the router')
    } else if (batteryIsCharged) {
        console.log('Use it')
    } else {
        console.log ('The laptop is broken. it needs fixing')
    }
}

//When writing conditional statements you can omit the curly braces if you only have one statement inside the condition:
if (laptopWorks) {
    if (batteryLow) console.log('charge it')
    else if (internetUnavailable) console.log('Restart your Router')
    else if (batteryIsCharged) console.log('Use it')
} else {
    console.log('The laptop is broken. It needs fixing')
}
//We could also write the else clause without curly braces, but using it makes it easier to read.