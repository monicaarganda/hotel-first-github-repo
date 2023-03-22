Conditional Challenges

💻 Challenges

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 21

    if (item <= 100) {
        console.log("in budget")
    }

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hungry = true

    if (hungry === true) {
        console.log("eat food")
    } else if (hungry === false) {
        console.log("keep coding")
    }

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "yellow"

    if (trafficLight === "green") {
        console.log("go")
    } else if (trafficLight === "yellow") {
        console.log("slow down")
    } else {
        console.log("stop")
    }

    if (trafficLight === "green") {
        console.log("go")
    } else if (trafficLight === "yellow") {
        console.log("slow down")
    } else if(trafficLight === "red"){
        console.log("stop")
    }

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let firstVar = 23
let secondVar = 54

    if (firstVar > secondVar) {
        console.log(firstVar)
    } else if (firstVar < secondVar) {
        console.log(secondVar)
    } else {
        console.log("the numbers are the same")
    }

    if (firstVar > secondVar) {
        console.log(firstVar)
    } else if (firstVar < secondVar) {
        console.log(secondVar)
    } else if (firstVar == secondVar) {
        console.log("the numbers are the same")
    }

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let num = 2

    if (num === 0) {
        console.log("the number is zero")
    } else if (num % 2 !== 0) {
        console.log("the number is odd")
    } else if (num % 2 == 0) {
        console.log("the number is even")
    }

    if (num === 0) {
        console.log("the number is zero")
    } else if (num % 2 !== 0) {
        console.log("the number is odd")
    } else {
        console.log("the number is even")
    }

🏔 Stretch Goals

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let gradePercentage = 0

    if (gradePercentage === 100) {
        console.log("Perfect Score") 
    } else if (gradePercentage >= 90) {
        console.log("A")
    } else if (gradePercentage >= 80) {
        console.log("B")
    } else if (gradePercentage >= 70) {
        console.log("C");
    } else if (gradePercentage >= 60) {
        console.log("D");
    } else if (gradePercentage > 0){
        console.log("F"); 
    } else if (gradePercentage === 0) {
        console.log("No grade available.")
    }
    
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let typeVariable = "4"

    if (typeof typeVariable === "boolean") {
        console.log(`${typeVariable} is a boolean`)
    } else if (typeof typeVariable === "number") {
        console.log(`${typeVariable} is a number`) 
    } else if (typeof typeVariable === "string") {
        console.log(`${typeVariable} is a string`)
    }

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let passWord = "hgbk"

    if (passWord.includes("!") && passWord.length >= 12) {
        console.log("That is a mighty strong password!")
    } else if (passWord.includes("!") || passWord.length >= 8) {
        console.log("That password is strong enough.")
    } else {
        console.log("That is not a valid password.")
    }