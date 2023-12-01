/* In JSON, every object has a prototype. When you create an object, it inherits a prototype, which is an object
that contains other built-in properties and methods you can use on the main object. For example, every object
has a toString() method that returns a string representation of the object, even though you don't add it yourself. */
const computerInfo = {
    brand: 'Apple',
    model: 'MacBook Pro',
    color: 'Silver',
}
console.log(computerInfo.toString())

/* The default string representation of an object is [Object Object]. If you want to get a string representation
of an object that contains the object's properties, you can use the built-in JSON.stringify() method: */
JSON.stringify(computerInfo)

/* To access all the properties and methods of an Object's propertype, you can use the built-in Object.getPrototypeOf method() */
Object.getPrototypeOf(computerInfo)

/* The Object.getPrototypeOf() method returns an object that contains all the properties and methods of the object's
prototype. You can also use it to add new properties and methods to an object's prototype: */
Object.getPrototypeOf(computerInfo).isExpensive = true
console.log(computerInfo.isExpensive)