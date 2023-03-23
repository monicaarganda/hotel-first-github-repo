// Array Challenges

// 💻 Challenges

//## Consider the variable:

var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

    // .push(value)

    //     - Adds a value onto the end of an array
    //     - Takes an argument of what is to be added
    //     - The argument must be a data type recognized by JavaScript
    //     - The output of the method itself is the length of the new array


    groceryList.push("soda")
    console.log(groceryList)
    // output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.

    // .concat()

    //     - Merges two or more arrays to form one combined array
    //     - The original array is unchanged
    //     - Strings can also be added to an array

    console.log(groceryList.concat("granola"))
    // output: [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".

    // .slice(staringIndex, endingIndex)

    // Returns a subset of the array
    // Slice requires an argument for the starting index of the subset
    // The ending index is an optional argument, if no ending index is specified the default is the end of the array
    // The original array is unchanged

    console.log(groceryList.slice(0, 2))
    // output: [ 'chips', 'dip']

// Write the code that will add "beans" to the "chips" and "dip" array.

    console.log(groceryList.slice(0,2).concat("beans"))
    // output: [ 'chips', 'dip', 'beans' ]

// ## Consider the variable:

var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.

    // .unshift(value)

    //     Adds a value to the beginning of an array
    //     Takes an argument of what is to be added
    //     The argument must be a data type recognized by JavaScript
    //     The output of the method itself is the length of the new array

    // console.log(numbers.push(0))
    // console.log(numbers)
    // numbers.sort((a, b) => a - b)
    // console.log(numbers)

    numbers.unshift(0)
    console.log(numbers)
    // output: [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.

    numbers.push(12)
    console.log(numbers)
    // output: [
        // 0,  2,  4, 6,
        // 8, 10, 12
        // ]

// Write the code that will remove the first number from the array.

    // .shift()

    //     Removes the value at the zeroth index of the array
    //     The output of the method itself is the value that is removed

    numbers.shift()
    console.log(numbers)
    // output: [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)


let addNum = numbers.concat(0).sort((a, b) => a - b)
    console.log(addNum)
    // output: [
    //     0,  2,  4, 6,
    //     8, 10, 12
    //   ]

//## Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.

    // .indexOf(value)

    //     Returns the index of the first instance of a given value
    //     If the value does not exist within the array, returns -1
    //     The original array is unchanged

    console.log(numSet.indexOf(2))
    // output: 0

// Write the code that finds the index of the last appearance of the number 2.

    // .lastIndexOf(value)

    //     Returns the last index of a given value
    //     Useful when there are repeated values in an array
    //     If the value does not exist within the array, returns -1
    //     The original array is unchanged

    console.log(numSet.lastIndexOf(2))
    // output: 5

// Write the code that returns the number at the third index.

    console.log(numSet[2])
    // output: 6

//## Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.

    console.log(characters.join())
        // output: y,a,r,r,a

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

let charsReversed = characters.reverse()
    console.log(charsReversed)
        // output: [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

    console.log(charsReversed.join("*"))
        // output: a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
    
    console.log(charsReversed.join(""))
        // output: array

// Create two arrays consisting of three first names of your cohort members in each.

let firstArr = [ "Monica", "Matt", "Chris" ]
let secondArr = [ "Torin", "Moss", "Aileen"]

// Write the code that sorts the names in alphabetical order.

    console.log(firstArr.sort())
    // output: [ 'Chris', 'Matt', 'Monica' ]
    console.log(secondArr.sort())
    // output: [ 'Aileen', 'Moss', 'Torin' ]
    
// Write the code that sorts the names in reverse alphabetical order.
    
    console.log(firstArr.reverse())
    // output: [ 'Chris', 'Matt', 'Monica' ]
    console.log(secondArr.reverse())
    // output: [ 'Aileen', 'Moss', 'Torin' ]
    
// Write the code that sorts all the names in alphabetical order in a single array.
    
    console.log(firstArr.concat(secondArr).sort())
    // output: [ 'Aileen', 'Chris', 'Matt', 'Monica', 'Moss', 'Torin' ]
    

//## Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

    console.log(numbers[1], numbers[3], numbers[5])
    // output: 221 7 87

// Write the code that adds the values from odd indexes into the oddIndexes array.

    oddIndexes.push(numbers[1], numbers[3], numbers[5])
    console.log(oddIndexes)
    // output: [ 221, 7, 87 ]