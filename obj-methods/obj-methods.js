/*

SOURCE: https://zellwk.com/blog/looping-through-js-objects/
_________________________________________
ITERATING THOUGH OBJECTS
AND METHODS TO USE ON OBJECTS

The problem with a for...in loop is that it iterates through properties in the Prototype chain. When you loop through an object with the for...in loop, you need to check if the property belongs to the object. You can do this with hasOwnProperty.
_________________________________________

*/

//reference obj
const noOfFruit = {
  mango: 3,
  banana: 5,
  kiwi: 2,
  avocado: 4
}

/* convert the object into an array with Object.keys()
 creates an array that contains the properties of an object. */
const keys = Object.keys(noOfFruit)
console.log(keys)  // [mango, banana, kiwi, avocado]

/* Object.values() creates an array that contains the values of every 
   property in an object.*/
const values = Object.values(noOfFruit)
console.log(values)   // [3, 5, 2, 4]


/*Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value. */

const entries = Object.entries(noOfFruit)
console.log(entries)
/*
prints:
[
  [mango, 3],
  [banana, 5],
  [kiwi, 2],
  [avocado, 4]
]
*/


/*
_______________________________________
LOOPING THOUGH OBJECT**

Once you’ve converted the object into an array with Object.keys, Object.values, or Object.entries, you can loop through it as if it was a normal array.


If you use Object.entries you might want to destructure the array into its key and property.
_______________________________________
*/

// reference obj
const noOfPlants = {
  succulent: 3,
  monstera: 5,
  air: 2,
  jade: 4
}

const entries = Object.entries(noOfPlants)[3]
console.log(entries) // PRINTS ['jade', 4]



const keys = Object.keys(noOfPlants)
for (const key of keys) {
  console.log(keys)
  // PRINTS: ["succulent", "monstera", "air", "jade"]
}


const values = Object.values(noOfPlants)[2]
// PRINTS: 2 (for air)

/* 
__________________________________________________________
ITERATING THROUGH OBJECT WIth OBJECT.KEYS().forEach(currentValue,index,array)

callback: a callback function that operates on each element in the array.
currentValue: the current element in the array the callback operates upon.
array: the actual array that forEach is looping over.
thisArg: the user is giving the option of specifying a ‘this’ argument.
__________________________________________________________
*/

Object.keys(obj).forEach((key, index) => {
  // key: the name of the object key
  // index: the ordinal position of the key within the object 
})

