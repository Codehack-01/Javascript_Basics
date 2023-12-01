/* The JavaScript timimg methods are built-in higher-Order functions that allow us to schedule the execution of a functionat a 
later time or at a regular Intervals. Most commonly used timimg methods are: */

/* 1.-----setTimeout() :
The setTimeout() method allows us to schedule the execution of a function after a specified number of milliseconds.
The setTimeout() method takes two arguments: the function to be executed and the number of milliseconds to wait
before executing the function. Let's display a message after 5 seconds */
const displayMessage = () => {
    console.log('Hello, world!')
}
setTimeout(displayMessage, 5000)

/* 1 second is a thousand milliseconds and 5 seconds is 5000 milliseconds.
The setTimeout() method also returns a number that represents the ID of the timer immediately after it is called. we can use the 
this ID to cancel the timer. First, let's assign the setTimeout method to a variable: */
const displayMessage2 = () => {
    console.log('Hello world!')
}
const timerId = setTimeout(displayMessage2, 5000)
console.log(timerId)

/* This will still display the message after 5 seconds, but now we have the ID of the timer in the timerId variable.
lets use it to cancel the timer before it executes the displayMessage() function. we will use the clearTimeout()
method to do so. The clearTimeout() method takes the ID of the timer as an argument and cancels the timer. */
const displayMessage3 = () => {
    console.log('hello world! ')
}
const timerID = setTimeout(displayMessage3, 5000)
clearTimeout(timerID)

/* The clearTimeout() method will cancel the timer before it executes the displayMessage() function.
So when you run this code, the displayMessage() function will not be executed */

/* 2. setInterval() ;
The setInterval() method allows us to schedule the execution of a function at regular intervals. For example,
if we want to display our message every 5 seconds, we can use the setInterval() method to do so. 
The setInterval() method takes two arguments : the function to be executed and the number of milliseconds to wait
before executing the function again. We can directly call the method or assign it to a variable. Like the setTimeout()
method, the setInterval() method also returns a number that represents the ID of the timer.
Let's use the setInterval() method to run the displayMessage() function every 1 second:
 */
const displayMessage4 = () => {
    console.log('Hello, world!')
}
const interval = setInterval(displayMessage4, 1000)
/* This will display the message "Hello world!" every 1 second. we can use the clearInterval() ,method to cancel the timer
The clearInterval() method takes the ID of the timer as an argument and cancels the timer. */
clearInterval(interval)