JAVASCRIPT ARRAYS 12/1/22
 
What is a data type?
- Predefined classification of information, building block of a programming lauguage
- Data types have properties and behavior

    console.log(4 + 5)
        output: 9

- Strings have data type behavior
    console.log("hello".toUpperCase())
        output: HELLO

    console.log(5..toUpperCase()) --> error

    console.log("hello" + "!")
        output: hello! --> concatenation

    console.log("hello".concat("!"))
        output: hello! --> passing information to a method - arguement "!", arguement is a generic term for information passed to a method in the parenthesis
        
## .concat --> a built in method, communicate intent -- communicating to me and other del

    console.log(4.concat(4)) --- error
    - number prob. doesn't communicate intent, only strings

## BUILT IN METHOD - common functionality added to lauguage to make tasks easier and readable

DATA VS. VARIABLE:

    7
    console.log(7)
        output: 7
    
var myNumber = 7

    console.log(myNumber)
        output: 7

## ABSTRACTION -- the varible is representing the value it holds and will have the properties and behavior of whatever data type it holds

## ARRAYS -- are a data type that holds a collection of things

## PROPERTIES -arrays have a length property, the number of elements inside the array

    console.log([3, 4, 5, 6, 7].length)
        output: 5 -- becuase there is 5 elements inside the array

let myArray = [3, 4, 5, 6, 7]
    
    console.log(myArray.length)
        output: 5

let myArray = [3, 4, 5, 6, 7, "hello", "yo"]
    
    console.log(myArray.length)
        output: 7

## INDEX - Every element in an array has a position
- Zero index, the first placement on the left starts the index of zero
- The last index is length minus 1 or the length is the last index plus 1 

    console.log(myArray[5])
        output: "hello"

    console.log(myArray[0])
        output: 3
    console.log(myArray.length - 2) //myArray.length - 1 <-- number
        output: 5 // becuaue the array [3, 4, 5, 6, 7, "hello", "yo"] is a length 7 so the programming is reading (7 - 2)

    console.log(myArray.length + 4)
        output: 11 // becuaue the array [3, 4, 5, 6, 7, "hello", "yo"] is a length 7 so the programming is reading (7 + 4)

    console.log(myArray[myArray.length - 1]) 
        output: "yo"

## ARRAY BEHAVIORS:

Two catergories of built in method

    1) methods that permently modify the item they are called on (mutators)
    2) methods that don't change the structure of the data they are called on (ancestors)

let iceCreamFlavors =["mint chip", "cookie dough", "rocky road", "coffee"]

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

iceCreamFlavors.push("strawberry")
    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee', 'strawberry' ]

    console.log(iceCreamFlavors.push("strawberry"))
        output: 6

    console.log(iceCreamFlavors)
        output: ['mint chip','cookie dough','rocky road','coffee','strawberry','strawberry']

    console.log(iceCreamFlavors.pop())
        output: coffee

iceCreamFlavors.pop()
    output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road' ]

## REVERSE: reverses the elements in an array

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]
    console.log(iceCreamFlavors.reverse())
        output: [ 'coffee', 'rocky road', 'cookie dough', 'mint chip' ]

## SORT - alphabetizes an array of strings

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

iceCreamFlavors.sort()
    console.log(iceCreamFlavors)
        output: [ 'coffee', 'cookie dough', 'mint chip', 'rocky road' ]

## indexOf: takes an arguement of the element and returns the index

let iceCreamFlavors =["mint chip", "cookie dough", "rocky road", "coffee"]

    console.log(iceCreamFlavors)
        output: ["mint chip", "cookie dough", "rocky road", "coffee"]

    console.log(iceCreamFlavors.indexOf("cookie dough"))
        output: 1

    console.log(iceCreamFlavors.indexOf("cookie"))
        output: -1

    console.log(iceCreamFlavors.indexOf("rocky road"))
        output:    

let iceCreamToppings = ["sprinkles", "caramel"]

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

    console.log(iceCreamToppings)
        output: [ 'sprinkles', 'caramel' ]

    console.log(iceCreamFlavors.concat(iceCreamToppings))
    output: 
    [
    'mint chip',
    'cookie dough',
    'rocky road',
    'coffee',
    'sprinkles',
    'caramel'   
    ]

    console.log(iceCreamFlavors) 
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

    console.log(iceCreamToppings)
        output: [ 'sprinkles', 'caramel' ]
    - returns back to separtely representing to save

let flavorsAndToppings = iceCreamFlavors.concat(iceCreamToppings)

    console.log(iceCreamFlavors)
        output: [ 'mint chip', 'cookie dough', 'rocky road', 'coffee' ]

    console.log(iceCreamToppings)
        output: [ 'sprinkles', 'caramel' ]

    console.log(flavorsAndToppings)
        output: 
        [
        'mint chip',
        'cookie dough',
        'rocky road',
        'coffee',
        'sprinkles',
        'caramel'
        ]

    console.log("hello hotel".reverse) --> error
    - reverse only works on arrays

## SPLIT

    console.log("hello hotel".split(""))
        output: [
        'h', 'e', 'l', 'l',
        'o', ' ', 'h', 'o',
        't', 'e', 'l'
        ]
    - splits every character

    console.log("hello hotel".split(" "))
        output: [ 'hello', 'hotel' ]
    - split based on the space character

    console.log("hello hotel".split("e"))
        output: [ 'h', 'llo hot', 'l' ]
    - split where there is a e character

    console.log(iceCreamToppings.join(" "))
        output: sprinkles caramel
    - converted the array into a string

let iceCreamToppings = ["sprinkles", "caramel", 5, 4, null, true]
    
    console.log(iceCreamToppings.join(" "))
        output: sprinkles caramel 5 4  true