// JEST Hotel 12/6/2022

// Process to create: 

// cd into the javascript-foundations-challenges repository
// Create a new branch: jest-initials1-initials2 (ex. jest-aw-sp)
// Create a new directory mkdir jest-student1-student2 (ex. jest-austin-sarah)
// cd into the directory you just created
// touch a file called: jest.test.js
// Add the dependencies by running $ yarn add jest in the terminal
// Open the Jest directory in a text editor
// Code!


// npm - node package manager adds the required dependencies to run the application properly
// yarn - yet another resource negotiator - created by Facebook to overcome the sole download from npm
//  jest - a testing suite for javascript

//Test Driven Development (TDD) - helps break the the code into a series of test, smaller problems to approach, helps safely creat code

// Three different tests:
// unit test - test indivdual pieces of code
// integration -
// end to end - 

// consider three elements when creating tests
    // input - What is the value you are passing into your function?
    // expected output - What is supposed to happen because of the input 
    //  the results recieved - what value did you recieve after invoking your function?

    // RED-GREEN-FACTOR - 
        // RED
            // Write the test
            // See the test fail
        // GREEN 
            // Write the code
            // See the test pass
        // REFACTOR
            // Refactor, if necessary


    // PROMPT: Write a function that offers tea to a person.

        // RED
            // Write the test
            // See the test fail

            //describe method that groups the test, takes two arguments the name of the function and the name of the function and a call back function (name, describe)
            
            // describe("tea", () => {
                
            //     // it method contains two arguments  - the description of the functiona and a callback
            
            //     it("offers tea to a person", () => {

            //         //expect statement with contains the function call and then jest matcher appending the expected output
            
            //         expect(tea()).toEqual("Aloha, Hotel2022, pinky up, Here's some Yerba Mate tea.")
            //     })
            // })


        // GREEN 
            // Write the code

        //PSEUDOCODE
        //input - none, self-invoking
        //output - "Aloha, Hotel2022, pinky up, Here's some Yerba Mate tea."
        //declare a function named tea

        // const tea = () => {
        //     return "Aloha, Hotel2022, pinky up, Here's some Yerba Mate tea."
        // }
        
            // See the test pass
            // yarn jest
        // REFACTOR
            // Refactor, if necessary

// PROMPT
//Write a test for a function that logs whether or not an item is soup.

// RED
    // Write the test
    // describe("soupTest", () => {
    //     it("logs whether or not an item is soup", () => {
    //         expect(soupTest("yes")).toEqual("This is soup")
    //         expect(soupTest("no")).toEqual("This is not soup")
    //     }) 
    // })
    // See the test fail
    // GOOD FAIL!!!
    // soupTest
    // ✕ logs whether or not an item is soup (1 ms)

    // ● soupTest › logs whether or not an item is soup

    // ReferenceError: soupTest is not defined

    
    // PSEUDOCODE
    // GREEN 
        // Write the code

     //declare a funtion called soupTest
     //input - a string
     //output -  a sting 
        //if "yes" then return "This is soup"
        //if "no" then return "This is soup"
        //use conditional statements to produce expected return

    //FUNCTION
    // const soupTest = (string) => {
    //     if(string === "yes") {
    //         return "This is soup"
    // } else if (string === "no") {
    //     return "This is not soup"
    // }
// }
            // See the test pass
    //output: 
        // REFACTOR
            // Refactor, if necessary

        //     const soupTest = (string) => {
        //         if(string.toUpperCase() === "YES") {
        //             return "This is soup"
        //     } else if (string.toUpperCase() === "NO") {
        //         return "This is not soup"
        //     }
        // }   
        //output 
        // PASS  ./jest.test.js
        //   soupTest
        //   ✓ logs whether or not an item is soup (1 ms)

    //     describe("soupTest", () => {
    //         it("logs whether or not an item is soup", () => {
    //             expect(soupTest("yes")).toEqual("This is soup")
    //             expect(soupTest("no")).toEqual("This is not soup")
    //             expect(soupTest("maybe")).toEqual("Maybe your food is soggy")
    //         }) 
    //     })

    //     const soupTest = (string) => {
    //         if(string.toUpperCase() === "YES") {
    //             return "This is soup"
    //     } else if (string.toUpperCase() === "NO") {
    //         return "This is not soup"
    //     } else {
    //         return "Maybe your food is soggy"
    //     }
    // }   

    //console.logging is for our own peace of mind instructors do not want 

    // console.log(soupTest("yes")) 
    //output: This is soup

    // console.log(soupTest("no")) 
    //output: This is not soup

    // console.log(soupTest("maybe"))
    //output: Maybe your food is soggy

    //Using variables to store values

     //PROMPT
     //Write a function that takes in two arrays and adds the arrays together and sorts the values in alphabetical order.
     
     // RED
     // Write the test
     
    //  describe ("coldWeatherAct", () => {
    //      it("takes in two arrays and adds the arrays together and sorts the values in alphabetical order", () => {

    //         let coldActivities = ["sleep", "drink hot cocoa", "sit by the fireplace", "make soup"]
    //         let moreStuff = ["sledding", "skiiing", "snow mobiling"]
            
    //         expect(coldWeatherAct(coldActivities, moreStuff)).toEqual(["drink hot cocoa", "make soup", "sit by the fireplace", "skiiing", "sledding", "sleep", "snow mobiling"])
    //             })
    //         })
            // See the test fail
            // Failing in a good weather
            // FAIL  ./jest.test.js
            //   coldWeatherAct
            //   ✕ takes in two arrays and adds the arrays together and sorts the          values in alphabetical order

            // ● coldWeatherAct › takes in two arrays and adds the arrays together          and sorts the values in alphabetical order
            // ReferenceError: coldWeatherAct is not defined
        
            // GREEN 
            // Write the code

        //PSEUDOCODING
        //declare a function called coldWeatherAct that combines two arrays in alp. order
        // input - two arrays of strings
        // output - one array that has the values in alp. order
            //if given ["sleep", "drink hot cocoa", "sit by the fireplace", "make soup"] + ["sledding", "skiiing", "snow mobiling"]
            //then return ["drink hot cocoa", "make soup", "sit by the fireplace", "skiiing", "sledding", "sleep", "snow mobiling"]
            //to add arrays together - .concat()
            // to place in alp. order - .sort()

        // const coldWeatherAct = (array1, array2) => {
        //     return array1.concat(array2).sort()
        // }

// console.log(coldWeatherAct)
            // See the test pass
            //output: 
            // PASS  ./jest.test.js
            // coldWeatherAct
            //   ✓ takes in two arrays and adds the arrays together and sorts the values in alphabetical order (1 ms)
        
        // REFACTOR
            // Refactor, if necessary



// Challange examples:

// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

describe ("areYouTired", () => {
    it ("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect (areYouTired("yes")).toEqual("drink coffee")
        expect (areYouTired("no")).toEqual("keep working")
    })
})
// FAIL  ./jest.test.js
// areYouTired
//   ✕ returns 'drink coffee' if you are tired and 'keep working' if you are not tired

// ● areYouTired › returns 'drink coffee' if you are tired and 'keep working' if you are not tired

//   ReferenceError: areYouTired is not defined

// PSEUDOCODE
    // declare function called areYouTired
    // input: string
    // output: string
    // if 'yes' then return 'drink coffee'
    // if 'no' then return 'keep working'

const areYouTired = (string) => {
    if (string.toLowerCase() === 'yes'){
        return "drink coffee"
    } else if(string.toLowerCase() === 'no'){
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

    describe ("areYouStressed", () => {
        it ("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
            expect (areYouStressed("yes")).toEqual("relax")
            expect (areYouStressed("no")).toEqual("keep going")
        })
    })

        // FAIL  ./jest.test.js
        // areYouTired
        //   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
        // areYouStressed
        //   ✕ returns 'relax' if you are stressed and 'keep going' if you are not stressed

        // ● areYouStressed › returns 'relax' if you are stressed and 'keep going' if you are not stressed

        //   ReferenceError: areYouStressed is not defined

    const areYouStressed = (string) => {
        if (string.toLowerCase() === 'yes'){
            return 'relax'
        } else if (string.toLowerCase() === 'no'){
            return 'keep going'
        }
    }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.


    describe ("inBudget", () => {
        it ("returns 'in budget' if a price is lower than 300", () => {
            expect (inBudget(180)).toEqual("in budget")
            expect (inBudget(400)).toEqual("not in budget")
        })
    })

        // FAIL  ./jest.test.js
        // areYouTired
        //   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
        // areYouStressed
        //   ✓ returns 'relax' if you are stressed and 'keep going' if you are not stressed
        // inBudget
        //   ✕ returns 'in budget' if a price is lower than $300

        // ● inBudget › returns 'in budget' if a price is lower than $300

        //   ReferenceError: inBudget is not defined

    const inBudget = (value1) => {

        if (value1 < 300){
            return "in budget"
        } else if (value1 >= 300){
            return "not in budget"
        }
    }

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

    describe ("smallerNumber", () => {
        it ("takes in two numbers and returns the smaller number", () => {
            expect (smallerNumber(2, 5)).toEqual('2 is smaller')
        })
    })

        // FAIL  ./jest.test.js
        // areYouTired
        //   ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired (1 ms)
        // areYouStressed
        //   ✓ returns 'relax' if you are stressed and 'keep going' if you are not stressed
        // smallerNumber
        //   ✕ takes in two numbers and returns the smaller number

        // ● smallerNumber › takes in two numbers and returns the smaller number

        //   ReferenceError: smallerNumber is not defined

    const smallerNumber = (num1, num2) => {
        if(num1 < num2){
            return `${num1} is smaller`
        } else if (num1 > num2){
            return `${num2} is smaller`
        } else {
            return "they are the same"
        }
    }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

    // RED
        // Write the test
            describe(("isItOdd"), () => {
                it("takes in one numbers and returns whether the number is odd", () => {
                    expect(isItOdd(3)).toEqual("odd")
                    expect(isItOdd(6)).toEqual("even")
                })
            })

        // See the test fail
            // FAIL  ./jest.test.js
            // isItOdd
            //   ✕ takes in one numbers and returns whether the number is odd (1 ms)
          
            // ● isItOdd › takes in one numbers and returns whether the number is odd
          
            //   ReferenceError: isItOdd is not defined
          
        // GREEN 
            // Write the code
        //PSEUDOCODE
            //declare a function called isItOdd
            //input - a string
            //output - returns whether the number is odd

            const isItOdd = (num) => {
                if(num % 2 !== 0) {
                    return "odd"
                } else if(num % 2 === 0) {
                    return "even"
                } 
            }

        // See the test pass
            // PASS  ./jest.test.js
            // isItOdd
            //   ✓ takes in one numbers and returns whether the number is odd (1 ms)

            // REFACTOR
            // Refactor, if necessary

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

    // RED
        // Write the test
        describe("colorFruit", () => {
            it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
                expect(colorFruit("yellow")).toEqual("banana")
                expect(colorFruit("red")).toEqual("apple")
                expect(colorFruit("purple")).toEqual("grape")
            })
        })
        // See the test fail

        // FAIL  ./jest.test.js
        // isItOdd
        //   ✓ takes in one numbers and returns whether the number is odd (1 ms)
        // colorFruit
        //   ✕ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape
      
        // ● colorFruit › takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape
      
        //   ReferenceError: colorFruit is not defined

    // GREEN 
        // Write the code
    //PSEUDOCODE
        //declare a function called colorFruit
        //input: a string
        //output: will return a string if the argument is a specific fruit

        const colorFruit = (color) => {
            if(color === "yellow") {
                return "banana"
            } else if(color === "red") {
                return "apple"
            } else if(color === "purple") {
                return "grape"
            } else {
                return "Is that a fruit or a vegatable?"
            }
        }
        // PASS  ./jest.test.js
        // isItOdd
        //   ✓ takes in one numbers and returns whether the number is odd (2 ms)
        // colorFruit
        //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape
        
        // console.log(colorFruit("red"))
        // See the test pass
        // PASS  ./jest.test.js
        // colorFruit
        //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)
      
    //output: grape
    // REFACTOR
        // Refactor, if necessary

//Write the test for a function called rick that returns "Morty".
//Create the function that will make the test pass.

    // RED
        // Write the test
        describe("rick",() => {
            it("a function called rick that returns 'Morty'.", () => {
                expect(rick()).toEqual("Morty")
            })
        })
        // See the test fail

        // FAIL  ./jest.test.js
        // colorFruit
        //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)
        // rick
        //   ✕ a function called rick that returns ''.
      
        // ● rick › a function called rick that returns 'Morty'.
      
        //   ReferenceError: rick is not defined
    // GREEN 
        // Write the code
        //PSEUDOCODE
        //declare a function called 'rick'
        // input: none, self invoking
        // output: return a string

        const rick = () => {
            return "Morty"
        }
        // console.log(rick())
        //output: Morty
        // See the test pass
        // PASS  ./jest.test.js
        // colorFruit
        //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)
        // rick
        //   ✓ a function called rick that returns 'Morty'.
    // REFACTOR
        // Refactor, if necessary

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.

    // RED
        // Write the test
    describe("greeter", () => {
        it("takes a name as an argument and returns a greeting with that name to the screen", () => {
            expect(greeter("Monica")).toEqual(`Greetings ${"Monica"}!`)
        })
    })
        // See the test fail
            // FAIL  ./jest.test.js
            // colorFruit
            //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)
            // rick
            //   ✓ a function called rick that returns 'Morty'.
            // greeter
            //   ✕ takes a name as an argument and returns a greeting with that name to the screen
        
            // ● greeter › takes a name as an argument and returns a greeting with that name to the screen
        
            //   ReferenceError: greeter is not defined
    // GREEN 
        // Write the code
        //PSEUDOCODE
            //declare a function called 'greeter'
            //input: a string and string interpolation
            //output a new string including a message and the inputed value

        const greeter = (name) => {
            return `Greetings ${name}!`
        }
// console.log(greeter("Mckenna"))
        // See the test pass
            // PASS  ./jest.test.js
            // colorFruit
            //   ✓ takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape (1 ms)
            // rick
            //   ✓ a function called rick that returns 'Morty'.
            // greeter
            //   ✓ takes a name as an argument and returns a greeting with that name to the screen (2 ms)
        // REFACTOR
            // Refactor, if necessary

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
    // RED
        // Write the test
        // describe("oddOrEven", () => {
        //     it("takes a number as an argument and logs whether the number is odd or even", () => {
        //         expect(isItOdd(3)).toEqual("odd")
        //         expect(isItOdd(6)).toEqual("even")
        //     })
        // })
        // See the test fail
        //output: code passed
    // GREEN 
        // Write the code
    // PSEUDOCODE
        // declare a function called oddOrEven
        // input: a number
        // output: will state whether the number in the arguement is odd or even

        const oddOrEven = (value1) => {
            if(value1 % 2 !==0) {
                return "odd"
            } else if(value1 % 2 ===0) {
                return "even"
            }
        }
        // console.log(oddOrEven(5))
        //output: 5

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

    // RED
            // Write the test
            describe("doubler", () => {
                it("takes a number and returns the result of the number multiplied by 2", () => {
                    expect(doubler(5)).toEqual(10)
                })
            })
            // See the test fail
            // FAIL  ./jest.test.js
            // doubler
            //   ✕ takes a number and returns the result of the number multiplied by 2
          
            // ● doubler › takes a number and returns the result of the number multiplied by 2
          
            //   ReferenceError: doubler is not defined
          
        // GREEN 
            // Write the code
        //PSEUDOCODE
            //declare a function called doubler
            //input: a string
            //output: will take the string and create a new string mult. by 2
            const doubler = (value) => {
                return (value * 2)
            }
        // console.log(doubler(4))
        //output: 8
            // See the test pass
            // PASS  ./jest.test.js
            // doubler
            //   ✓ takes a number and returns the result of the number multiplied by 2
          
          
        // REFACTOR
            // Refactor, if necessary

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

    // RED
        // Write the test
    describe("mutiply", () => {
        it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
            expect(multiply(6, 2)).toEqual(12)
        })
    })
        // See the test fail
        // FAIL  ./jest.test.js
        // mutiply
        // ✕ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
    
        // ● mutiply › takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
    
        // ReferenceError: multiply is not defined
    // GREEN 
        // Write the code
    //PSEUDOCODE
        //declare a function called nultiply
        //input: two strings
        //output: the strings multiplied by eachother
    const multiply = (value3, value4) => {
        let newMult = (value3 * value4)
            return newMult
        }
    // console.log(multiply(5, 5))
    //output: 25
        // See the test pass
        // PASS  ./jest.test.js
        // mutiply
        // ✓ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
        // PASS  ./jest.test.js
        // mutiply
        // ✓ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
    // REFACTOR
        // Refactor, if necessary


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

    // RED
        // Write the test
        describe("divisibleBy", () => {
            it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'", () => {
                expect(divisibleBy(10, 5).toEqual("10 is evenly divisible by 5"))
                // expect(divisibleBy(9, 3).toEqual("9 is not evenly divisible by 3"))
            })
        })
        // See the test fail
        // FAIL  ./jest.test.js
        // divisibleBy
        //  ✕ takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'

        // ● divisibleBy › takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'

        // ReferenceError: divisibleBy is not defined
    // GREEN 
        // Write the code
    //PSEUDOCODE
        //declare a function called divisibleBy
        // input: two numbers
        // output: a string stating if the first number is divible by the other.
    const divisibleBy = (val1, val2) => {
        let newString = (val1 % val2)
        if (newString % 2 === 0) {
            return (`${val1} is not evenly divisible by ${val2}`) 
        //  } else if (newString % 2 !== 0) {
        //      return `${val1} is not evenly divisible by ${val2}`
        }
    }
        // See the test pass
    // REFACTOR
        // Refactor, if necessary

//Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
//Create the function that will make the test pass.

    // RED
        // Write the test

        // See the test fail
    // GREEN 
        // Write the code
    //PSEUDOCODE
        //declare a function called multiply
        //input: a string
        //output:
        // See the test pass
    // REFACTOR
        // Refactor, if necessary

