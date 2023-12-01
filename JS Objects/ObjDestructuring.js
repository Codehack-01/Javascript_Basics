/* Object destructuring is another way to access the properties of an Object. With destructing, we can extract values from
an object and assign them to variables with the same name as the Oject's properties. It is done by enclosing the properties
in curly braces {} on the left-hand side of the assigment operator =. */
const attendee = {
    name: 'Ademola Gbolahan',
    age: 30,
    email: 'ademolaprojectdreams@gmail.com',
    ticketType: 'VIP',
}
//Now, lets access the properties of the attendee object using destructuring:
const {name, age, email, ticketType} = attendee
console.log(name)
console.log(age)
console.log(email)
console.log(ticketType)

//we dont have to destructure all the properties of the objects at once. We can destructure only the properties we need:
//---const { name } = attendee

//We can also assign default values to the variables in case the object doesn't have the property
const {name2, isPaid = false} = attendee
console.log(isPaid)

/* We can assign a different name to the variable by using the column: and the new name after the property name.
This is usefull when we want to avoid naming conflicts */
const {name: attendeeName} = attendee
console.log(attendeeName)

/* -------Destructuring arrays
we can also similarly destructure arrays. Let's create an array that stores the names of the attendees at a conference: */
const attendeeNames = [
    'Peter Okoye',
    'Paul Okoye',
    'Lynda Okoye',
    'Rita Okoye',
]
/* To destructure the Array, we enclose the elements in square brackets [] on the left-hand side of the assignment
operator =. since the elements of an array are not named, we can only destructure them in the order they appear
in the array. so the first element of the array will be assigned to the first variables, the second element to the
second variable. and so on */

const [
    firstAttendee,
    secondAttendee,
    thirdAttendee,
    fourthAttendee,

] = attendeeNames
console.log(firstAttendee)
console.log(thirdAttendee)

//we can also destructure only the elements we need by destructuring the elements we dont need with commas.
//const [firstAttendee, , thirdAttendee] = attendeeNames