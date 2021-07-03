//STRING METHODS
//SOURCE: gitconnected + MDN

/****************************************
                length()
calling .length on a string returns the
 number of characters a string has
****************************************/

const str = 'hello world'
console.log(str.length) // returns: 11


/****************************************
            concat(str1, str2)
  concatenates string arguments and returns a new string
****************************************/

const string1 = 'i love to'
const string2 = 'eat fruit'
console.log(string1.concat(' ', string2))  // returns: 'i love to eat fruit'


/****************************************
                trim()
removes white space from the beginning and end of a string
****************************************/

const trimStr = '  string to be trimmed ! '
console.log(trimStr.trim())  // returns "string to be trimmed!"


/****************************************
      includes(searchStr, position*)
determines if a substring is contained in a larger 
string and returns a boolean (true or false)
****************************************/

const fullStr = 'happy four twenty'
const str1 = 'happy'
const str2 = 'four-twenty'

console.log(fullStr.includes(str1))  // returns true
console.log(fullStr.includes(str2))  // returns false (because no hyphen!)



/****************************************
        indexOf(searchVal, fromIndex)
old way of checking if a substring exists within a string
function returns the index of a substring if the substring is
 not contained in the original string -1 is returned
 the common pattern is to check if the index is greater than -1
****************************************/

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



/* ***************************************
         // replace(subStr, newSubStr)
  replaces string with new values this function is
 called on a string and return a string with a pattern 
 and replaced by a replacement string. 
 //it takes both regex (globally replaces string) 
 // or a string (first occurence) as a pattern.
*************************************** */

const originalStr = 'hello world! i love to program'
const strPattern = 'program'
const replacementStr = 'code!'

console.log(originalStr.replace(strPattern, replacementSr))
// returns:  hello world! i love to code!


/****************************************
          slice(beginIndx, endIndx)
returns a section of a string function that extracts 
a section of a string based on the given index and returns a new string
REMEMBER: THIS METHOD COUNTS SPACES AS AN INDEX
use case 1 : when you know the structure of a string and you want to use a certain portion.
use case 2: use with indexOf() to find the index of the first occurence of a substring and use that as a reference point for slicing.

ADDITIONAL SLICE METHOD
slice() takes the beginning index as the first parameter and an optional ending index as the second parameter — str.slice(beginIndex[, endIndex]). If no ending index is supplied, it slices to the end of the string starting with your beginIndex. If a negative beginIndex is used, it will slice backwards from the end of the string.
****************************************/


const mainString = 'i am praticing string methods!'
console.log(string.slice(17))    // returns: 'string methods!'

// using indexOf()
const secondStr = 'yes! i am practicing string methods.'
const indexOfSecondStr = secondStr.indexOf('!') + 1
const finalStr = secondStr.slice(indexOfSecondStr)

console.log(finalStr)        // returns: 'i am praticing string methods'

// beginIndex, endIndex

const longStr = `the quick brown fox jumped over the lazy dog's back.`
console.log(longStr.slice(4, 17))      //returns: quick brown fox
console.log(longStr.slice(-11, -6))    //return:  dog's
consolelog(longStr.slice(-5))          //returns: back



/****************************************
         split(separator, limit)
  splits string into an array of strings
this method takes a separator (usually empty strings)
spaces matter!
single space- splits into indivudial letters in the array
double space- splits a string into full word in the array

join(limit) will join array back into string
****************************************/

const splitStr = 'hello'
console.log(splitStr.split(''))    // returns:  ['h', 'e', 'l', 'l', 'o']
console.log(splitStr.split(' '))    // returns: ['hello']

let splitToArr = splitStr.split(' ')
let joined = splitToArr.join('')
console.log(joined)        // returns: 'hello'



/****************************************
              repeat(count)
  repeats the string for a specified amount of times
****************************************/

const phrase = `i'm repair`
const repeatedWord = 'man'
const fullPhrase = phrase + ' ' + repeatedWord.repeat(5)
console.log(fullPhrase)             // returns: i'm repair manmanmanmanman 
// s/o to any 'all that' fans


/****************************************
              charAt(idex)
returns the character at a given index
****************************************/

const charStr = 'here is a random sentence'
console.log(charStr.charAt(0))         //returns: 'h'
console.log.log(charStr.charAt(5))    // returns: i
console.log.log(charStr.charAt(4))   //  returns: ' '


/****************************************
             charCodeAt(index)
returns the unixcode of an index
This an UTF-16 cone integer between 0 and 65535.
****************************************/


let string = 'Hello World'
console.log(string.charCodeAt(0))    //returns: 72
console.log(string.charCodeAt(8))   // returns: 114


/****************************************
     substring (startIndx, endIndx*)
 returns part of a string between start/end index
 or to the end of a string. end index is not included
 in the returned string

 SPACES COUNT AS INDEXES
****************************************/

const string = 'i am a string'
let subStr = string.substring(0, 5)
console.log(subStr)       // returns: 'i am'

const secondString = 'AUBREY GRAHAM in the wheelcha- DRAAAKE?'
let souljaboy = secondString.substring(0, 14)
console.log(souljaboy)     // returns: AUBREY GRAHAM


/****************************************
      startsWith(searchStr, postion*)
  determines whether a string begins with characters
  of a specified string  => returns boolean

  endsWith(searchString, length*)
  determines whether a string ends with characters
  of a specified string => returns boolean
****************************************/
let str = 'i love ube ice cream so much, ahh!'
let begin = str.startsWith('i love')

console.log(begin)                 // returns: true
console.log(str.startsWith('ube')) // returns: false

let end = str.endsWith('ahh!')    // returns: true
console.log(str.endsWith('much')) // returns: false