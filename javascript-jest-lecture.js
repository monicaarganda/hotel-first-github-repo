// JEST Hotel 12/6/2022

// npm - node package manager adds the required dependencies to run the application properly
// yarn - yet another resource negotiator - created by Facebook to overcome the sole download from npm
//  jest - a testing suite for javascript

//Test Driven Development (TDD) - helps break the the code into a series of test, smaller problems to approach, helps safely creat code

// Three different tests:
// unit test - test indivdual pieces of code
// integration 
// end to end  

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
            
            describe("tea", ( => {
                
                // it method contains two arguments  - the description of the functiona and a callback
                it("offers tea to a person", () => {

                    //expect statement with contains the function call and then jest matcher appending the expected output
                    expect(tea()).toEqual("Aloha, Hotel2022, pinky up, Here's some Yerba Mate tea.")
                })
            })




        // GREEN 
            // Write the code
            // See the test pass
        // REFACTOR
            // Refactor, if necessary