// SOURCES: MDN, LEIGH HALLIDAY  & FLORIN POP(YOUTUBE), JAVASCRIPT.INFO

/************************************************ */
// ADD AND REMOVE IEMS push, pop, shift, unshift()
/************************************************ */

// reference array
let cities = ['boston', 'chicago', 'houston']


cities.push('philly')      // adds philly to end of array
//                          outputs: ['boston', 'chicago', 'houston', 'philly']

cities.pop('philly')        // extracts value from end of array
//                          outputs ['boston', 'chicago', 'houston']

cities.shift('boston')     //  extracts value from beginning of array
//                          outputs ['chicago', 'houston']

cities.unshift('nyc')       // adds value to beginning of array
//                           outputs ['nyc', 'boston', 'chicago', 'houston']


cities.slice(0, 2)  // returns new array copying items from start to end index (not inclusive)
//                     outputs: [ 'boston', 'chicago' ]


/******************************************************************* */
//                 ADD AND DELETING FROM MIDDLE  -
//splice(start index, how many to delete, elements to be deleted)
/******************************************************************* */

// reference array
let states = ['massachusetts', 'illinois', 'texas', 'north carolina', 'washington']

states.splice(0, 4)                // REMOVES: ['massachusetts', 'illinois', 'texas', 'north carolina']
//                                 outputs: ['washington']

states.splice(1, 0, 'new york')   // ADDS: 'new york' to first index
//                                 outputs ['massachusetts', 'new york' 'illinois', 'texas', 'north carolina', 'washington']


states.splice(1, 2)             // REMOVES: indexes 1 & 2 from array
//                               outputs: ['massachusetts', 'illinois', 'texas', 'north carolina', 'washington']


states.splice(0, 1, 'georgia')  // REPLACES: massachusetts with georgia at 0th index
//                               outputs: [ 'georgia', 'illinois', 'texas', 'north carolina', 'washington' ]



/*************************************************************************** */
//                            ITERATE  
//forEach() method that iterates though array and calls function on every element 
// for() - loops through array with an initalization, condtion, final expression
// for..of  - iterates over iteratable objects
/****************************************************************************/
// reference array
const hobbies = ['read', 'write,', 'dance', 'paint']
const copyHobbies = []

hobbies.forEach(el => {
  copyHobbies.push(el)
})

console.log(copyHobbies)   //copyHobbies outputs: ['read', 'write,', 'dance', 'paint']

// reference array
let numbers = [1, 2, 3, 4, 5]

numbers.forEach(num => {
  // if number equals one, remove it from beignning
  num === 1 && numbers.shift()
})

console.log(numbers)           // outputs: [2, 3, 4, 5]


let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}                                // outputs 15 (1 + 2 + 3 + 4 + 5 = 15)


for (value of numbers) {
  value += 1
  console.log(value)        // outputs 2 3 4 5 6 (not as an array)
}

/************************************************ */
//                   SEARCHING
// indexOf, lastIndexOf, findIndex, find, includes, filter()
/************************************************ */
// reference array
let gardenVeggies = ['peppers', 'onions', 'kale', 'tomatoes', 'carrots', 'onions']

gardenVeggies.indexOf('onions')       // returns index of elment found. if not found, returns -1
//                                     outputs: 1
gardenVeggies.indexOf('watermelon')   // outputs: -1

gardenVeggies.lastIndexOf('onions')   // returns the last of found element in array searches array from back/front
//                                    outputs: 5

gardenVeggies.findIndex(element => element === 'kale')   //find element and returns its index
// 

gardenVeggies.includes('onions')              // checks if element is included in array
//returns boolean                               output: true
gardenVeggies.includes('spinach')             // outputs: falseoutput: 2

// reference arr
let foodList = [
  { food: 'bananas', count: 3 },
  { food: 'mangoes', count: 5 },
  { food: 'sweet potato', count: 1 }
]
const foodItem = foodList.find(({ food }) => food === 'sweet potato') // returns value of first element that satisfies testing function

console.log(foodItem) //  outputs:{ food: 'sweet potato', count: 1 }


const foodItemFind = foodList.filter(({ count }) => count > 3)   // creates new arr with all elements that past test provided by function
console.log(foodItemFind)            // outputs   { food: 'mangoes', count: 5 }


gardenVeggies.filter((el, index, arr) => {     // filter also removes duplicates from array
  return arr.indexOf(el) === index
})       //                                   outputs: [ 'peppers', 'onions', 'kale', 'tomatoes', 'carrots' ]



/************************************************ */
//                 TRANSFORMING
//    map(el, index, arr), sort(firstEl, secondEl)
/************************************************ */
// reference arrays
let nums = [13, 12, 1, 2, 5, 4]
let names = ['sam', 'jen', 'ben']

let addTwo = nums.map(el => el + 2) // calls function on all element in arr/returns new array
//                                     outputs: [ 15, 14, 3, 4, 7, 6 ]

let convertNumToString = nums.map(el => String(el))
//                                     outputs: [ '13', '12', '1', '2', '5', '4' ]

nums.sort((a, b) => a - b, 0)           // sorts in ascending order
//                                         outputs: [ 1, 2, 4, 5, 12, 13 ]

nums.sort((b, a) => a - b, 0)         //  sorts in desending order
//                                        outputs: [ 13, 12, 5, 4, 2, 1 ]

names.sort()                          // sorts in alphabetical order
//                                      outputs: ['ben', 'jen', 'sam']


/************************************************ */
//         ITERATE + CALCULATE SINGLE VALUE
//             reduce(acc, currentVal) 
/************************************************ */
nums.reduce((a, b) => a + b)     // caluclates array to single value
//                                  outputs: 37

// reference array
let cars = [
  { id: '1', make: 'honda civic', price: 13000 },
  { id: '2', make: 'tesla model 3', price: 75000 },
  { id: '3', make: 'toyota prius', price: 14000 }
]

// *sum price for all cars*
let totalPrice = cars.reduce((acc, total) => acc + total.price, 0)
console.log(totalPrice)          // outputs: 102000

// ** array of car makes (as if using map, better to use map() tho) **
let carMake = cars.reduce((acc, car) => [...acc, car.make], [])
console.log(carMake)         //   outputs: [ 'honda civic', 'tesla model 3', 'toyota prius' ]

// convert to id: car inventory lookup
let inventory = cars.reduce((acc, car) => {
  return { ...acc, [car.id]: car }
}, {})
/*
outputs
{
'1': { id: '1', make: 'honda civic', price: 13000 },
'2': { id: '2', make: 'tesla model 3', price: 75000 },
'3': { id: '3', make: 'toyota prius', price: 14000 }
}
*/

console.log(inventory['2'])  // to find a specific car from the inventory
//                             outputs: { id: '2', make: 'tesla model 3', price: 75000 }


//* find max value *
// -- map though array to just grab numbers and find max of those
// inital value is null instead of 0 b/c if working with -nums, max val would be 0 
let maxPrice = cars.reduce((acc, car) => {
  // if acc is null or price is greater than max num, return carprice
  if (acc === null || car.price > acc) return car.price
  return acc
}, null)
console.log(maxPrice)  //        outputs: 75000 (tesla!)


//* find min value *
let minPrice = cars.reduce((acc, car) => {
  if (acc === null || car.price < acc) return car.price
  return acc
}, null)
console.log(minPrice) //         outputs: 13000 (honda civic!)


//* find by make (or name)  better to use find() *

let carName = cars.reduce((acc, car) => {
  if (acc !== null) return acc
  if (car.make === 'toyota prius') return car
  return null
}, null)
console.log(carName) //        outputs: { id: '3', make: 'toyota prius', price: 14000 }


// * finding cars worth more than 12000 
let priceyCar = cars.reduce((acc, car) => {
  if (!acc) return false
  return car.price > 12000
}, true)

console.log(priceyCar)  //      outputs: true


/************************************************ */
//             RETURN BOOLEAN
/*  some(el, index) --   tests if one element in arr
                         passes test provided by function
    every(el)      --  checks if every element in arr
                       meets provided condtion
 */
/************************************************ */
// reference arr

let numArr = [1, 2, 3, 4, 5]

numArr.some(el => el > 4)  // outputs: true
numArr.some(el => el > 10) // outputs false

let people = [
  { name: 'jack', age: 20 },
  { name: 'rose', age: 21 },
  { name: 'robyn', age: 31 },
  { name: 'rihanna', age: 32 }
]


let isPresent = people.some(person => person.name === 'robyn')  // checks if element exists
//                                                                   outputs: true
isPresent = people.some(person => person.name === 'jhene')
//                                                                   outputs:  false


let isAdult = people.every(person => person.age > 18)      // checks if every person is older than 18     
console.log(isAdult)
//                                                           outputs: true

let isNamedRobyn = people.every(person => person.name === 'robyn') // checks if every person is named robyn
console.log(isNamedRobyn)
//                                                           outputs: false


