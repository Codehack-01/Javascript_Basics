/* When checking for multiple cases of a value or variable, the switch statement is usually more efficient
than the if-else statement cause it requires fewer lines of code and is easier to read. However, that is
not always the case. If you are working with multiple conditions, the switch statement might become difficult
to manage. Example:*/
const day = 'Monday'
const month = 'January'
switch (day) {
    case 'Monday':
        switch (month) {
            case 'January':
                console.log('Today is a weekday in January!')
                break
            default:
                console.log('Today is a weekday!')
        }
        break
    default: 
    console.log('Today is a weekday!')
}
/* While this code works its not readable. The nested statement is difficult to understand, and its easy to make a mistake 
when writing it. This is why it's better to use an if-else statement in this case: */
const today = 'Monday'
const Month = 'January'
if (day === 'Monday' && month === 'January') {
    console.log('Today is a weekday in January!')
} else {
    console.log('That is not a day of the week')
}

/* When you need to nest a switch statement, its good to consider an if-else statement instead. Writing
complex if-else statement can easily lead to mistake in your code. */
//Using switch statement to check if a number is greater or less than a certain value
const num = 5

switch (num) {
    case num > 5:
        console.log('num is greater than 5')
    break
    case num < 5:
        console.log('Num is less than 5')
    break
    default:
        console.log('num is equal to 5')
}