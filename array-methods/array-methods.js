/*
ARRAY METHODS
source: javascript.info/array
*/

// reference array
var array = [1, 2, 3, 4, 5]

array.push(10)
// outputs: [1,2,3,4,5,10]  =>  adds items to the end of an array
array.pop()
//outputs: [1,2,3,4]    =>  extracts item from the end of an array
array.shift()
// outputs: [2,3,4,5]  => extracts item from the beginning of an array
array.unshift(7)
//outputs: [7,1,2,3,4,5]  =>  adds items to the beginning of an array

//retrieve array of elements removed by doing:
let removedElement = arr.splice(0, 2)
// outputs:[1,2] (gets removed elements)


array.concat([6, 7], 8, 9)
/* outputs: [1,2,3,4,5,6,7,8,9]
copies a new array from original array [1,2,3,4,5] & arguments that are arrays [6,7] plus 8.9 to get final concatenated array */

// using spread operator to copy arrays
let newArr = [6, 7, 8, 9]
let concatenated = [...array, ...newArr]
/* outputs: [1,2,3,4,5,6,7,8,9] */

let arrayLikeObj = {
  0: 'random',
  1: 'word',
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

array.concat(arrayLikeObj)
/* outputs: newArray [1, 2, 3, 4, 5, 'random', 'word']
for array-like objects, setting the Symbol.isConcatSpreadable property to true adds elements instead of entire objects */

array.forEach(e => {
  console.log(e + 1)
})
// outputs: 2,3,4,5,6 => iterates through each element in an array and runs the function

// ******************************************
//        SEARCHING WITH ARRAY METHODS
// ******************************************

array.indexOf(1)
//outputs:  0   => finds index of item from position(optional parameter if none specified, position is 0)
array.lastIndexOf(2)
// outputs: 1  => similar to indexOf() but searches array from right to left

array.includes(2)
// outputs: true  => returns true if item is found in the array
array.includes(2, 3)
//outputs: false => searches from position index 3

const usernames = [
  { id: 1, name: 'Sai' },
  { id: 2, name: 'Shika' },
  { id: 3, name: 'Ty' }
]
let name = usernames.find(item => item.id == 1)
console.log(usernames.name)
// outputs: 'Sai'  => finds an element in an array of objects. returns true if found if not, returns undefined

usernames.findIndex(item => item.id == 1) // outputs: 0  => returns index of where element was found, -1 otherwise

let results = users.filter((item => item.id > 1))
console.log(results)
// outputs [{id:2, name:'Shika'}, {id:3, name:'Ty'}]  => eturns array of all matching elements. returns empty array if nothing found

// ******************************************
//      TRANSFORMING WITH ARRAY METHODS
// ******************************************
let fruits = ['mango', 'blueberries', 'kiwi', 'banana']
let numbers = [2, 10, 6, 8, 4]

fruits.map(item => item.length * 2)
// => [12, 12, 10, 8] ** calls the function on each item in the array and returns an array of the results

fruits.sort()
// outputs: ['mango', 'blueberries', 'kiwi', 'banana']] ** sorts an array as strings 

numbers.sort()
//outputs: [2,4,6,8,10] =>  .sort() uses strings to sort, a compare function needs to be passed

numbers.sort((a, b) => a - b)
//outputs: [2,4,6,8,10]  => sorts numbers in ascending order

numbers.sort((b, a) => a - b)
//outputs:[10, 8, 6, 4, 2]  => sorts by descending order

fruits.reverse()
// outputs: ['banana', 'kiwi'. 'blueberries','mango'] => reverses elements in an array

let places = 'Boston, Brooklyn, Los Angeles'
places.split('')
// outputs: ['B', 'o', 's', 't', 'o', 'n', etc.]  => an empty string splits into individual chars
places.split(',')
// outputs: ['Boston', 'Brooklyn', 'Los Angeles]  => splits a string into an array by specified punctiation


let arrPlaces = ['Boston', 'Brooklyn', 'Los Angeles']
arrPlaces.join('!')
/* outputs:['Boston!Brooklyn!LosAngleles!]
=>returns an array into a string joined by glue between them
*/



