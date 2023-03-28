Function, Loops, Arrays

//  Function - can take arguements or to be self invoking, little logic machines with reuseable, dynamic code

// Arrays - Have an index, have built-in methods, ordered list of values

// Loops - iteration that repeats until a condition is met or predetermined number of times

// For loop - starting point (initialization), stopping point (condition, range), and to get to from start to stop (increments: how to iterate through the array) and then the code block that has the executable code or action to take.

// PROMPT -
// It's Christmas, Let's give all the instructors a gift. Create a function that returns an array with a gift next to each value.
// let instructionTeam = ["Sarah", "Austin", "Trish", "Elyse", "Charlean", "Nicole"]

// PSEUDOCODE
// declare a function named hotelGoodies
// input/parameter - an array of strings
// expected output - new array with a gift next to each value

// control, command, and spacebar for emoji

// let hotelGoodies  = ["Sarah 🎁", "Austin 🎁", "Trish 🎁", "Elyse 🎁", "Charlean 🎁", "Nicole🎁"]

//adding the giftbox to the array
    // const hotelGoodies = (array) => {
    //     return array + "🎁"
    //iterating across the array
    // }
// co   nsole.log(hotelGoodies(instructionTeam))

// need to iterate across the array to access each value

    // const hotelGoodies = (array) => {
    //     //for loop for counting
    //     for(let i=0; i < array.length; i++) {
    //         //ude bracket notation to abstract each value
    //         return array[i] + "🎁"
    //     }
    // }
    // console.log(hotelGoodies(instructionTeam)) 
    //ouput: "Sarah 🎁"

//return makes the for lopp stop when the first element is given
//need to stor the values to in a new array

//storing values in a new array
    // const hotelGoodies = (array) => {
    //     //for loop for counting
    //     //create an empty array to stor the values
    //     let arrayTwo = []
    //     for(let i=0; i < array.length; i++) {
    //         //use .push( to add each value to the array )
    //         arrayTwo.push(array[i] + "🎁")
    //         }
    //         //debugging tool
    //     console.log(arrayTwo)
    // }
            //print out from the console.log of the for loop
            //oth index: [Sarah🎁]
            //output: 
                // [ 'Sarah🎁' ]
                // [ 'Sarah🎁', 'Austin🎁' ]
                // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁' ]
                // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁', 'Elyse🎁' ]
                // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁', 'Elyse🎁', 'Charlean🎁' ]
                // [
                // }
                //retuen the new array outside of the loop
                // return arrayTwo
                // output:
                // [
                //   'Sarah🎁',
                //   'Austin🎁',
                //   'Trish🎁',
                //   'Elyse🎁',
                //   'Charlean🎁',
                //   'Nicole🎁'
                // ]
            // }

    console.log(hotelGoodies(instructionTeam))
    //output: 
        // [ 'Sarah🎁' ]
        // [ 'Sarah🎁', 'Austin🎁' ]
        // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁' ]
        // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁', 'Elyse🎁' ]
        // [ 'Sarah🎁', 'Austin🎁', 'Trish🎁', 'Elyse🎁', 'Charlean🎁' ]
        // [
        //   'Sarah🎁',
        //   'Austin🎁',
        //   'Trish🎁',
        //   'Elyse🎁',
        //   'Charlean🎁',
        //   'Nicole🎁'
        // ]
        // [
        //   'Sarah🎁',
        //   'Austin🎁',
        //   'Trish🎁',
        //   'Elyse🎁',
        //   'Charlean🎁',
        // ]

//REFACTOR:
let instructionTeam = ["Sarah", "Austin", "Trish", "Elyse", "Charlean", "Nicole"]

    const hotelGoodies = (array) => {
        let arrayTwo = []
        for(let i=0; i < array.length; i++) {
            arrayTwo.push(array[i] + "🎁")
        }
        return arrayTwo
    }

    console.log(hotelGoodies(instructionTeam))
    //OUTPUT: 
        // [
        //     'Sarah🎁',
        //     'Austin🎁',
        //     'Trish🎁',
        //     'Elyse🎁',
        //     'Charlean🎁',
        //     'Nicole🎁'
        //   ]
  
