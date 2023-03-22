JAVASCRIPT INTRODUCTION CHALLENEGES

// In order to run file use command node <file name>

💻 Challenges

- Write the code that will log the outcome of 34 added to 71.

    console.log(34 + 71)
    output: 105

- Write the code that will log the outcome of 67 subtracted from 123.

    console.log(67 - 123)
    output: -56

- Write the code that will log the outcome of 56 multiplied by 23.

    console.log(56 * 23)
    output: 1288

- Write the code that will log the outcome of 45 divided by 5.

    console.log(45 / 5)
    output: 9

- Write the code that will log the outcome of 5 to the power of 7.

    console.log(5 ** 7)
    output: 78125

- Write the code that will log the whole number remainder of 33 divided by 6.

    console.log(33 % 6)
    output: 3

- Write the code that will log the length of a string containing your name.

let string = "Monica"

    console.log(string.length)
    output: 6

- Write the code that will log whether your string includes the letter "e"?

    console.log(string.includes("lo"))
    output: false

- Write the code that will log the character at the first index of the string.

    console.log(string[0])
    output: M

- Write the code that will log the string in all uppercase letters.

    console.log(string.toUpperCase())
    output: MONICA

## Write the code that will log true or false for the following:

- Is 34 divided by 3 greater than 67 divided by 2?

    console.log( 34/3 > 67/2)
    output: false

- Does 5 evaluate to the same as "5"?

    console.log(5 == "5")
    output: true

- Does 5 strictly equal "5"?

    console.log(5 === "5")
    output: false

- Does !3 strictly equal 3?

    console.log(!3 === 3)
    output: false

- Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

    console.log("LEARN".length === 5 && "Student".length === 7)
    output: true

- Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

    console.log("LEARN".length === 5 || "Student".length === 10)
    output: true

- Does "LEARN" contain the subset "RN"?

    console.log("LEARN".includes("RN"))
    output: true

- Does "LEARN" contain the subset "rn"?

    console.log("LEARN".includes("rn"))
    output: false

- Does "LEARN"[0] strictly equal "l"?

    console.log("LEARN"[0] === "l")
    output: false

- Modify the code from the previous question to return true.
    
    console.log("LEARN"[0] === "L")
    output: true

## Consider the variables:

var theQuestion = "life, the universe, and everything"
var theAnswer = 42

- Write the code that will log theAnswer divided by 2.

    console.log(theAnswer / 2)
    output: 21

- Write the code that will log the length of theQuestion.

    console.log(theQuestion.length)
    output: 34

- Write the code that will log the index of the character "f" in the theQuestion.

    console.log(theQuestion.indexOf("f"))
    output: 2

- Write the code that will log the concatenation of the two variables.

    console.log(theQuestion + theAnswer)
    output: life, the universe, and everything42

- Write the code that will log "the universe".

    console.log(theQuestion.slice(6, 18))
    output: the universe

- Write the code that will log the character "l" from theQuestion.

    console.log(theQuestion.charAt(0))
    output: l

- Write the code that will log whether theQuestion.length is greater than theAnswer.

    console.log(theQuestion.length > theAnswer)
    output: false
