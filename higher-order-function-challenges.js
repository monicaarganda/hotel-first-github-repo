// Higher Order Functions Challenges

// 💻 Challenges

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

    // const mult = arr1.map((item) => {
    //     return item * 10
    // })

    // console.log(mult)

    // const multiply = (array) => {
    //     let newArr = array.map((item) => {
    //         return item * 10
    //     })
    //     return newArr
    // }
     // console.log(multiply(arr1))

    const multiply = (array) => {
        return array.map((item) => (item * 10))
    }
    console.log(multiply(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

    // const onlyOdds = arr2.filter((value) => {
    //     return (value % 2 !== 0)
    // })
    // console.log(onlyOdds)

    // const onlyOdds = (array) => {
    //     let newArr = array.filter((value) => {
    //         return (value % 2 !== 0)
    //     })
    //     return newArr
    // }
    // console.log(onlyOdds(arr2))
    
    const onlyOdds = (array) => {
        return newArr = array.filter((value) => (value % 2 !== 0))
    }
    console.log(onlyOdds(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

    // const onlyStrings = comboArr.filter((value) => {
    //     return (typeof value === "string")
    // })
    // console.log(onlyStrings.join(""))

    // const onlyStrings = (array) => {
    //     let typeOf = array.filter((value) => {
    //         return (typeof value === "string")
    //     })
    //     return typeOf.join("")
    // }
    // console.log(onlyStrings(comboArr))
    
    const onlyStrings = (array) => {
        return array.filter((value) => (typeof value === "string")).join("")
    }
    console.log(onlyStrings(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const filterAll = (array) => {
    let newArr = array.filter(value => {
        if (value !== false && value !== " ") {
            return value
        }
    })
    return newArr
}

console.log(filterAll(filterArrayValues))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]