JAVASCRIPT FUNCTIONS

// Functions are snippets of code functionality
// Function give control over when code is excuted and how many times

// Driven by input and producing output

//ENCAPSULATION - functions should only rely on the input the developer decides and not on any external factors, this creates predictibility


// Arrow function - the style of fuctions we use for our stack at LEARN

//variable declaration: var(global), let(can be reassigned), const(variable is never reassigned)

// name: camelCaseIn - javascript is the accepted style guide, always communicate intent

// equal sign: = assignment operator, == loosly, === stictly 

// parenthesis: at the end of a builtin methond, when apply can assume some type of behavior/action will happen ()

//arrow syntax: collective suit or stack the best, declares that we are creating a funtion. arrow is the type of funtion (=>)

//curly braces: excutable actions, logic {}

// FUNCTION EXPRESSION:
    const makeCoffee = () => {
       return "coffee is made"
    }
    //output: coffee is made

// functions are code machines, it will not run until we say go. We need to invole the function

// EXCUETE CODE:
    // console.log(makeCoffee())
    // console.log(makeCoffee())
    // console.log(makeCoffee())
    // console.log(makeCoffee())
    // console.log(makeCoffee())
    // console.log(makeCoffee())
    // console.log(makeCoffee())

    //output: 
    // coffee is made
    // coffee is made
    // coffee is made
    // coffee is made
    // coffee is made
    // coffee is made
    // coffee is made

//all funtions have to have a return
// What is undefined? one of the six privitive data type, a variable is created but not assigned a value

// FUNCTION EXPRESSION:

// coffeeType - a placeholder called a parameter - variable that is specific to the function
// now that creates creative freedom and alllows string interpolation

    const makeCoffee = (coffeeType) => {
       return `Your ${coffeeType} is made.`
    }

// EXCUETE CODE:

    // console.log(makeCoffee("latte"))
    // output: Your latte is made.

    // console.log(makeCoffee("mocha"))
    // output:Your mocha is made.

    // console.log(makeCoffee("chai"))
    // output: Your chai is made.

// FUNCTION EXPRESSION:
// Logic:

//Pseudo coding - writing in english what you function is doing

//create a function that takes in a coffee type and  coffee size and returns the price of my coffee

// if my coffee size is small my coffee will cost $4
// if my coffee size is medium my coffee will cost $5
// if my coffee size is medium my coffee will cost $6
// conditionals (if, else if) that makes an evauluation about my coffee size
// input: need a parameter for coffee type and a parameter for cofffee size
//common separate placeholders

    const makeCoffee = (coffeeType, coffeeSize) => {
        if(coffeeSize === "small") {
            return `Your ${coffeeType} is $4`
        } else if(coffeeSize === "medium") {
            return `Your ${coffeeType} is $5`
        } else if(coffeeSize === "large") {
            return`Your ${coffeeType} is $6`
        } else {
            return "Something went wrong"
        }
    }
 
 
    //  console.log(makeCoffee("latte", "small"))
    //output: Your latte is $4

    //  console.log(makeCoffee("mocha", "medium"))
    //output: Your mocha is $5

    //  console.log(makeCoffee("chai", "large"))
    //output: Your chai is $6

    //  console.log(makeCoffee("latte", "Small"))
    //output: Something went wrong

// FUNCTION EXPRESSION:
//to account for casing we can add .toLowerCase or .toUpperCase


    const makeCoffee = (coffeeType, coffeeSize) => {
        let coffeeSizeLower = coffeeSize.toLowerCase()
        if(coffeeSizeLower === "small") {
            return `Your ${coffeeType} is $4`
        } else if(coffeeSizeLower === "medium") {
            return `Your ${coffeeType} is $5`
        } else if(coffeeSizeLower === "large") {
            return`Your ${coffeeType} is $6`
        } else {
            return "Something went wrong"
        }
    }

    console.log(makeCoffee("latte", "Small"))
    //output: Your latte is $4
    
    console.log(makeCoffee("latte", "LARGE"))
    //output: Your latte is $6
 
