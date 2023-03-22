# JAVASCRIPT INTRO LECTURE NOTES

"CMD + '/' " (this will comment out code will not be run by program)

## Javascript:
- dynamically-typed - data types can change while they are being used
- interpreted language - read by each browser it's used on
- scripting language - code executed at run time

## PRIMITIVE DATA TYPES
- Numbers
- Strings
- Booleans
- Symbols
- null
- Undefined

## NUMBERS

- integers (positive, negative)
- floats (fraction or decimal)

console.log() -- prints out results of evaluation of date between parenthesis

    console.log(5 + 3)
        output: 8
    console.log(5 - 3)
        output: 2
    console.log(5 * 3)
        output: 15
    console.log(5 / 3)
        output: 1.6666666666666667

### Modulo -- returns the remainder, the % is the operator

    console.log(10 % 2)
        output: 0
        10 / 2 = 5 -- divides evenly, no remainder, returns modulo of 0
        10 / 3 = 3 -- 3 divides into 10 3 times equaling 1, returns modulo of 1

## Strings -- text, words, numbers, anything that is wrapped in qoutation marks

    console.log("hello Hotel!")
        output: hello Hotel!
    console.log("A")
        output: A
    console.log("Today is a beautiful day to learn Javascript")
        output: Today is a beautiful day to learn Javascript
    console.log("46")
        output: 46
    console.log("42 + 15 =", 42+15)
        output: 42 + 15 = 57
        - a string will need a common after for syntax
    console.log("36" + 36)
        output: 3636
    console.log (36 +"36")
        output: 3636

## TYPE COERION -- Forces a change to the date type

ie: console.log (36 +"36") 
    output: 3636
    the local recongizes "36" as a string resulting in the local turning 36 into a string


## STRING CONCATENATION -- combines separate strings

    console.log("Hello" + "World!")
        output: HelloWorld!
    console.log("Hello " + "World!")
        output: Hello World!
    console.log(hello world)
        output: ERROR: SYNTAX (read problem on line 74)

## BOOLEANS
- true or false; only options (thee are not strings, they are their own data type)
- (used for various opertions: equal to, greater than, less than, is it true, or is it false)

    console.log(true)
        output: true
    console.log(false)
        output: false


## UNDEFINED -- declared value that has not yet been assigned

## NULL -- has no value! (exsists, simply lack of value)

## SYMBOL -- used for accessing keys in objects

# VARIBLES

## 3 DIFFERENT DECLARATIONS:
- var -- global variable, can be assigned (rarely used in JAVASCRIPT)
- let -- can be reassigned
- const -- cannot be reassigned


var name = "Monica"

    console.log(name)
        output: Monica
    var name = "Tricia"
    console.log(name)
        output: Tricia

- When naming varibles - use descriptive names in camelCase

### camelCase - the first letter is lower case, all sequential words will be capitalized
-(no parenthesis are used to define a camelCase)
// When declaring it is not “calling” on anything. But the console.logs are “calling” on your variable, whereas your declaration is just letting you know (and the computer) like hey this means this and nothing really happens until the “call” so you can see it

let myFavoriteNumber = 42

    console.log(myFavoriteNumber)
        output: 42
    console.log(myFavoriteNumber + 10)
        output: 52
    console.log("myFavoriteNumber")
        output: myFavoriteNumber

myFavoriteNumber = 15

    console.log(myFavoriteNumber)
        output: 15

let yourFavoriteNumber = 11

    console.log(myFavoriteNumber + yourFavoriteNumber)
        output: 26
    console.log("My favorite number is " + myFavoriteNumber)
    output: My favorite number is 15

## .toUpperCase() -- upcase all the letters in a string
    
    console.log(greeting.toUpperCase())
        output: "HELLO"

## .length -- tells how many characters the value of varible is

let message = "Hello World!"
    
    console.log(message.length)
        output: 12

## Index -- tells the location of each character within the string (return a number)
- computers use zero indexing so the position of the first char is 0
- to access a character at a specific index, use BRACKET NOTATION

    console.log(message[0])
        output: H
        - (message is defined as "Hello World!", the first letter is H)

## .indexOf() -- returns the index of a particular character

    console.log(greeting.indexOf("e"))
        output: 1

## .charAt() -- returns the character that is at a particular index

    console.log(message.charAt(4))
        output: o
        - (due to 0 indexing in the message letter o will be number 4)

## .includes() - checks for a subset of characters, returns a boolean 
- (inside parenthesis)

    console.log(message.includes("lo"))
        output: true

## .slice() - returns a subset of characters. Take 2 arguements: start f subset and end of the subset
    
    console.log(message.slice(0, 5))
        output: Hello
        - (non inclusive, will not include the 5th letter. Will include characters 0-4)
