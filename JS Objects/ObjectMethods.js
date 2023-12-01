/* There are other methods available on the built-in object that you can use to add, modify, and retrieve data from any object.
You've already seen the object.defineProperty() method. Let's explore some other useful methods */

/* 1.----- Object.keys():
The Object.keys() method returns an array of a given object's enumerable property names.
Let's get the keys of the computerInfo object:
*/
const computerInfo = {
    brand: 'Apple',
    model: 'MacBook Pro',
    color: 'Silver',
}
console.log(Object.keys(computerInfo))

/* 2. Object.values():
The object.values() method returns an array of a given object's enumerable property values: */
console.log(Object.values(computerInfo))

/* 3. Object.entries():
The Object.entries() method returns an array of a given object's enumerable property [key, value] pairs: */
console.log(Object.entries(computerInfo))

/* 4. Object.assign():
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.Object
It returns the modified target object. Let's create a new object named newComputerInfo and copy the properties of the
computerInfo Object to it: */
const newComputerInfo = Object.assign({}, computerInfo)
console.log(newComputerInfo)

/* 5. Object.freeze():
The Object.freeze() method freezes an object so it can't be modified. Let's freeze the computerInfo object and try to modify it */
Object.freeze(computerInfo)
computerInfo.brand = 'Dell'
console.log(computerInfo.brand)

/* 6. Object.seal():
The Object.seal() method seals an Object, preventing new properties from being added to it and marking
all existing properties as non-configurable. Example: */
Object.seal(computerInfo)
computerInfo.price = 20000
console.log(computerInfo.price)