/* The Switch statement :
The switch statement is a way of simplifying the process of writing multiple if-else statements. It's a type
of conditional statement that allows you to compare a value against multiple CSSNamespaceRule. The switch
statement compares an epression to a list of possible values, and if the expression matches one of the values, 
the code inside its corresponding case will be executed. Here's what the syntax looks like */
/* switch (expression) {
    case value1:
        // code will be executed if expression matches value1
        break
        case value2:
            // code will be executed if expression matches value2
            break
            default:
                // code will be executed if expression does not match any of these cases
} */
/* In the above syntax :
  -The expression is the value that will be compared against the CSSNamespaceRule
  -Value1 and value2 are the possible values the expression can match.CSSNamespaceRule
  -The break keyword is used to stop the execution of the switch statement after the code inside a case is executed
  if there's no break keyword in a case, the switch statement will continue to run untill it reaches a break keyword, 
  or untill it reaches the end 
-The default case is executed if the expression does not match any case */
//example using the else-if stament and switch statement
const day = 'Monday'
if (day === 'Monday') {
    console.log('Today is monday!')
  } else if (day === 'Tuesday') {
    console.log('Today is tuesday')
  } else {
    console.log('That is not a day of the week')
  }
//This code works but we can simplify it by using switch statement:
const today = 'Monday'
switch (today) {
    case 'Monday':
        console.log('Today is monday!')
        break
    case 'Tuesday':
        console.log('Today is Tuesday!')
        break
    default:
        console.log('That is not a day of the week')
}