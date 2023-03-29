// 💻 Challenges

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

    const multiplied = (array) => {
        let newArr = []
        for (let i=0; i < array.length; i++) {
            newArr.push(array[i] * 3)
        }
        return newArr
    }
    console.log(multiplied(testArr1))
    // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

    const onlyOdd = (array) => {
        let oddArr = [] 
        for (let i=0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                oddArr.push(array[i])
            } 
        } return oddArr            
    }
    console.log(onlyOdd(testArr2))
    // output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
    const comboArr = [
      7,
      "n",
      true,
      "i",
      "c",
      10,
      "e",
      -388,
      "w",
      3,
      "o",
      0,
      "r",
      false,
      "k"
    ]

    const letterArr = (letters) => {
        let onlyLets = []
        for (let i=0; i<letters.length; i++) {
            if (typeof letters[i] === "string") {
                onlyLets.push(letters[i])
            }
        }
        return onlyLets.join("")
    }
    console.log(letterArr(comboArr))
    // output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10
const addThese2 = []
// // output: 0

const sumArr = (addition) => {
    let sum = 0 
    for (let i=0; i<addition.length; i++) {
        sum = sum + addition[i]
    }
    return sum
}
console.log(sumArr(addThese1))
console.log(sumArr(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

const largest = (array) => {
    let num = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] >= num){
        num = array[i];
      }
    }
    return num
  }
  console.log(largest(indexHighestNumber))

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]

    const noRepeats = (arrayOne, arrayTwo) => {
        let newArr = arrayOne.concat(arrayTwo)
        let noDupes = newArr.filter((item, index) => newArr.indexOf(item) === index)
            return noDupes
        } 
    console.log(noRepeats(arr1, arr2))
// // output: [3, 7, 10, 5, 4, 8, 2, 1]


// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var arrayLength = 6
var arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

var arrayLength = 4
var arrayValue = 11
// // output: [11, 11, 11, 11]

const twoArrays = (numOne, numTwo) => {
    let secondArr = []
    for (let i=0; i<numOne; i++) {
        secondArr.push(numTwo)
    }
    return secondArr
}
console.log(twoArrays(arrayLength, arrayValue))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

const addUp3 = 600
// // output: 180300

const addUp = (number) => {
    let setUp = 0
    for (let i=1; i<=number; i++) {
        setUp = setUp + i
    }
    return setUp
}
console.log(addUp(addUp1))   
console.log(addUp(addUp2))   
console.log(addUp(addUp3))   