// Functions Challenges 

// 💻 Challenges

// Write a function named marco that returns "polo".

    const name = (marco) => {
        return "polo"
    }
    console.log(name())
    // output: polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

    const greeting = (name) => {
        return `Welcome, ${name}!`
    }
    console.log(greeting("Monica"))
    // output: Welcome, Monica!

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
    
    const oddOrEven = (number) => {
        if (number % 2 === 0) {
            return "even"
        } else {
            return "odd"
        }
    }
    console.log(oddOrEven(5))
    // output: odd

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

    const triple = (num) => {
        return num * 3
    }
    console.log(triple(3))
    // output: 9

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

    const multiply = (firstNum, secondNum) => {
        return firstNum * secondNum
    }
    console.log(multiply(5, 5))
    // output: 25

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

    const divisibleBy = (numOne, numTwo) => {
        if (numOne % numTwo === 0) {
            return `${numOne} is evenly divisible by ${numTwo}.`
        }
    }
    console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

    const assignGrade = (numScore) => {
        if (numScore >= 90) {
            return "A"
        } else if (numScore >= 80) {
            return "B"
        } else if (numScore >= 70) {
            return "C"
        } else if (numScore >= 60) {
            return "D"
        } else {
            return "F"
        }
    }
    console.log(assignGrade(77))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

    const isLonger = (firstString, secondString) => {
        if (firstString.length > secondString.length) {
            return `${firstString} has more characters than ${secondString}.`
        } else if (secondString.length > firstString.length) {
            return `${secondString} has more characters than ${firstString}.`
        } else {
            return `${firstString} and ${secondString} have the same amount of characters.`
        }
    }
    console.log(isLonger("computer", "charger"))
    // output: computer has more characters than charger.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

    const greaterNum = (numberOne, numberTwo) => {
        if (numberOne > numberTwo) {
            return `${numberOne} is greater than ${numberTwo}.`
        } else if (numberTwo > numberOne) {
            return `${numberTwo} is greater than ${numberOne}.`
        }
    }
    console.log(greaterNum(457, 8541))
    // output: 8541 is greater than 457.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

    const yelling = (string) => {
        return string.toUpperCase()
    }
    console.log(yelling("hello"))
    // output: HELLO

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

    const helloWorld = (languageCode) => {
        if (languageCode === "es") {
            return "Hola Mundo!"
        } else if (languageCode === "de") {
            return "Hallo Welt!"
        } else if (languageCode === "en") {
            return "Hello World!"
        } else if (languageCode === "fr") {
            return "Bonjour le Monde!"
        } else if (languageCode === "it") {
            return "Ciao Mondo!"
        } else {
            return "Hello World!"
        }
    }
    console.log(helloWorld("es"))
    // output: Hola Mundo!
    console.log(helloWorld("de"))
    // output: Hallo Welt!
    console.log(helloWorld("en"))
    // output: Hello World!
    console.log(helloWorld("fr"))
    // output: Bonjour le Monde!
    console.log(helloWorld("it"))
    // output: Ciao Mondo!

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

    const pluralizer = (userNum, userNoun) => {
        if (userNum === 0) {
            return `The ${userNoun} does not exist!`
        } else if (userNum === 1) {
            return `There is only 1 ${userNoun}`
        } else if (userNoun === "sheep") {
            return `There are ${userNum} sheep`
        } else if (userNoun === "goose") {
            return `There are ${userNum} geese`
        } else if (userNoun === "person") {
            return `There are ${userNum} people`
        } else if (userNoun === "child") {
            return `There are ${userNum} children`
        } else if (userNoun === "species") {
            return `There are ${userNum} species`
        } else if (typeof userNoun === "string") {
            let pluralNoun = userNoun + "s"
            return `There are ${userNum} ${pluralNoun}`
        } else {
            return "Enter a number and a noun"
        }
    }

    console.log(pluralizer(3, "person"))
    // output: There are 3 people