/****************************************
           ARRAY METHODS
    SOURCE: MDN & JAVASCRIPT.INFO
****************************************/


/*______________________________________
     ADD AND REMOVE ITEMS FROM ARRAY
______________________________________*/


// reference array
var arr = [2, 4, 6, 8]
var anothaOne = [10, 12, 14, 16]

arr.push(10)     // adds 10 to end of array
//                outputs: [2, 4, 6, 7, 8, 10] 

arr.pop()        // extracts value from end of array
//                  outputs [2, 4, 6, 8] 

arr.shift()     //  extracts value from beginning of array
//                  outputs [4, 6, 7, 8] 

arr.unshift(0)  // adds value to beginning of array
//                 outputs [0, 2, 4, 6, 8]


arr.slice(0, 3)  // returns new array copying items from start to end index (not inclusive)
//                   outputs: [2, 4, 6] 


// join an array with spread operator
let joinedArr = [...arr, ...anothaOne]
console.log(joinedArr)  // outputs [2, 4, 6, 8, 10, 12, 14, 16]


//join array with concat()
arr.concat(anotherOne)   // outputs [2, 4, 6, 8, 10, 12, 14, 16]


/*
splice() can: insert, remove and replace elements. it modifies the array from start index, 
removes delete count and inserts elm1, elm2 in its place

syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
*/

let colors = ['grey', 'green', 'yellow', 'orange']

/* deletion: will return an array of deleted elements without changing original array */
let removedColors = colors.splice(1, 3)
console.log(removedColors) // outputs ['green', 'yellow', 'orange'] of deleted colors
console.log(colors)        // ['grey'] the remaining element in colors array

/* replacing */
let replacedColors = colors.splice(2, 1, 'pink', 'white')
console.log(colors)      // outputs ['grey', 'green', 'pink', 'white', 'orange']


/* additonal MDN example */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


/*______________________________________
        SEARCHING IN AN ARRAY
______________________________________*/

/* includes()
determines whether an array includes specified value in its entries => returns a boolean
*/
let flowers = ['cherry blossom', 'sunflower', 'lily', 'lavender']
console.log(flowers.includes('sunflower'))
// outputs: true

console.log(flowers.includes('tiger lily'))
//outputs: false


/* filter() 
- creates a new array with elements that the test provided by the function
*/
console.log(flowers.filter(flower => flower.length > 4))
// output: ['cherry blossom', 'sunflower', 'lavender']

console.log(flowers.filter(flower => flower.length === 8))
// output ['lavender']

const removeDuplicateNums = (nums) => {
  let removed = nums.filter((el, index, arr) => arr.indexOf(el) === index)
  console.log(removed)
}
removeElement([1, 2, 2, 3, 3, 3, 4, 4, 4]) // outputs [1,2,3,4]


/*
findIndex() - returns index of the first element in that array that satisfies the provided testing function. returns -1 if no element has passed the test */

const searchIndex = () => {
  let arr = [1, 2, 3, 4, 5]
  arr.findIndex(el => el === 5)
}
searchIndex()
/* outputs 4 because 5 is held in the 4th index */

const searchFruits = () => {
  let fruits = ['mango', 'kiwi', 'banana', 'blueberries']
  console.log(fruits.findIndex(fruit => fruit === 'mango'))
}
searchFruits()
/* outputs 0 because 'mango' is held in the 0th index */


/* indexOf() - similar to findIndex() but doesn't use a test function. it returns the first index at which a given element can be found in the array, or -1 if it is not present.
 */

let animals = ['cat', 'lion', 'koala', 'cat', 'cheetah', 'giraffe']
console.log(animals.indexOf('cat'))
// outputs 0 : cat used twice but outputs 0 bc its the first instance of of its existence in the arr 

let cars = ['honda', 'tesla', 'toyota', 'tesla', 'bmw', 'jaguar']
console.log(cars.indexOf('bmw'))
// outputs 4

/*
lastIndexOf() - similar to indexOf but searches from right to left
*/

console.log(cars.lastIndexOf('tesla'))
// outputs 3

console.log(animals.lastIndexOf('cat'))
// outputs 3

/*
find() - returns the value of the first element in the array that satisfies the testing function. undefined is returned if no values satisfy the function
*/
let homies = [
  { id: 1, name: 'sai' },
  { id: 2, name: 'shika' },
  { id: 3, name: 'ty' },
  { id: 4, name: 'divine' }
]

let theHomies = homies.find(el => el.id === 4)
console.log(theHomies.name)
// outputs 'divine'

let anArr = [0, 12, 13, 14, 15]

let foundNum = anArr.find(el => el > 0)
console.log(foundNum)
// outputs: 12 because it is the first element in the array that is greater than 0




/*______________________________________
        TRANSFORMING + ITERATING AN ARRAY
______________________________________*/

// reference arrays
let veggies = ['carrot', 'potato', 'onion', 'celery', 'raddish', 'mushroom']
let nums = [5, 3, 74, 8, 100]

nums.sort()                      // sorts as an array of strings in lexigraphical order (alphabetical)
//                                outputs [100, 3, 5, 74, 8]

nums.sort((a, b) => a - b)        // sorts array in ascending order
//                                outputs [3, 5, 8, 74, 100]


nums.sort((b, a) => a - b)      // sorts array in descending order
//                               outputs [100, 74, 8, 5, 3]

veggies.reverse()               // reverses elements in array
//                               outputs ["mushroom", "raddish", "celery", "onion", "potato", "carrot"]

nums.map(el => el * 2)            // calls function on every el in array and creates new arr of results
//                                outputs: [10, 6, 148, 16, 200]


nums.forEach(el => {             // calls callback function once for each element in array in ascending index order
  console.log(el * 2)             // // outputs: 10 6 148 16 200
})


nums.reduce((sum, value) => sum + value)    // used to calculate a single value in an arr
//                                                outputs: 190

// splitting strings into an array of strings
let oceanCreaturs = 'jellyfish starfish clownfish'
console.log(oceanCreaturs.split(''))
// outputs:  ['j', 'e', 'l', 'l', 'y', 'f', 'i', 's', 'h',  etc.... ]

console.log(oceanCreaturs.split(' '))
// outputs: ['jellyfish', 'starfish', 'clownfish']

console.log(oceanCreaturs.split(' ').join('* '))
//outputs: "jellyfish* starfish* clownfish"



/****************************************
           STRING METHODS
    SOURCE: gitconnected + MDN
****************************************/

/* .length() method
 calling .length on a string returns the number of characters a string has */

const str = 'hello world'
console.log(str.length)
// returns: 11


/* .trim()
 function that removes white space from the beginning and end of a string
*/
const trimStr = '  string to be trimmed ! '
console.log(trimStr.trim())
// returns "string to be trimmed!"


/*
.incluces()
determines if a substring is contained in a larger string and returns a boolean (true or false)   
*/
const fullStr = 'happy four twenty'
const str1 = 'happy'
const str2 = 'four-twenty'

console.log(fullStr.includes(str1))
// returns true
console.log(full(includes(str2)))
// returns false (because no hyphen!)

/* .indexOf()
old way of checking if a substring existed within a string
function returns the index of a substring if the substring is not contained in the original string -1 is returned
 * the common pattern is to check if the index is greater than -1
*/

const artist = 'jhené aiko'
const first = 'jhené'
const last = 'chilombo'
console.log(artist.indexOf(first)) // returns 0
console.log(artist.indexOf(last))  // returns -1

//*  example of checking if index is greater than one
const singer = 'jhené aiko'
const middleName = 'aiko'
const stringIncludesSubstring = singer.indexOf(middleName) > -1

if (stringIncludesSubstring) {
  console.log('TRIGGERED!')
}


/* .toUpperCase() - capitalizes entire string */
const makeUpperCase = 'make me uppercase'
console.log(makeUpperCase.toUpperCase())
// returns: MAKE ME UPPERCASE


/* .toLowerCase() - lower cases entire string */
const makeLowerCase = 'make me lowerc ase'
console.log(makeLowerCase.toUpperCase())
// returns: make me lowercase


/*
.replace() - replaces string with new values
this function is called on a string and return a string with a pattern and replaced by a replacement string. it takes both regex (globally replaces string) or a string (first occurence) as a pattern.
*/

const originalStr = 'hello world! i love to program'
const strPattern = 'program'
const replacementStr = 'code!'

console.log(originalStr.replace(strPattern, replacementSr))


/*
.slice() - returns a section of a string
function that extracts a section of a string based on the given index and returns a new string
REMEMBER: THIS METHOD COUNTS SPACES AS AN INDEX
use case 1 : when you know the structure of a string and you want to use a certain portion.
use case 2: use with indexOf() to find the index of the first occurence of a substring and use that as a reference point for slicing.

ADDITIONAL SLICE METHOD
slice() takes the beginning index as the first parameter and an optional ending index as the second parameter — str.slice(beginIndex[, endIndex]). If no ending index is supplied, it slices to the end of the string starting with your beginIndex. If a negative beginIndex is used, it will slice backwards from the end of the string.
*/

const mainString = 'i am praticing string methods!'
console.log(string.slice(17))
// prints: 'string methods!'

// using indexOf()
const secondStr = 'yes! i am practicing string methods.'
const indexOfSecondStr = secondStr.indexOf('!') + 1
const finalStr = secondStr.slice(indexOfSecondStr)

console.log(finalStr) // 'i am praticing string methods'

// beginIndex, endIndex

const longStr = `the quick brown fox jumped over the lazy dog's back.`
console.log(longStr.slice(4, 17)) // quick brown fox
console.log(longStr.slice(-11, -6)) // dog's
consolelog(longStr.slice(-5)) // back


/*
.split() - splits string into an array of strings
this method takes a separator (usually empty strings)
spaces matter!
single space- splits into indivudial letters in the array
double space- splits a string into full word in the array 
*/

const splitStr = 'hello'
console.log(splitStr.split('')) // ['h', 'e', 'l', 'l', 'o']
console.log(splitStr.split(' ')) // ['hello']


/*
.repeat() 
repeats the string for a specified amount of times 
*/

const phrase = `i'm repair`
const repeatedWord = 'man'
const fullPhrase = phrase + ' ' + `${repeatedWord}`.repeat(5)
console.log(fullPhrase) // i'm repair manmanmanmanman 
// an all that reference eeeeewwwowwwww


/*.
charAt() - returns the character at a given index
*/

const charStr = 'here is a random sentence'
console.log(charStr.charAt(0)) // 'h'
console.log.log(charStr.charAt(5)) // i
console.log.log(charStr.charAt(4)) // ' '


/* 
.charCodeAt() - returns the unixcode of an index
This an UTF-16 cone integer between 0 and 65535.
*/

let string = 'Hello World'
console.log(string.charCodeAt(0)) // 72
console.log(string.charCodeAt(8)) // 114