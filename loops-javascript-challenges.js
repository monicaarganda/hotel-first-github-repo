// Javascript Loops

// 💻 Challenges
// Create a for loop that logs each number from 1 - 20.

    for ( let i=1; i<=20; i++) {
        console.log("Value: ", i)
    }
    // output: 
    //     Value:  1
    //     Value:  2
    //     Value:  3
    //     Value:  4
    //     Value:  5
    //     Value:  6
    //     Value:  7
    //     Value:  8
    //     Value:  9
    //     Value:  10
    //     Value:  11
    //     Value:  12
    //     Value:  13
    //     Value:  14
    //     Value:  15
    //     Value:  16
    //     Value:  17
    //     Value:  18
    //     Value:  19
    //     Value:  20

// Create a for loop that logs every other number from 1 - 20.

    for (let i=1; i<=20; i+=2) {
        console.log("Everyother: ", i)
    }
    // output:
    //     Everyother:  1
    //     Everyother:  3
    //     Everyother:  5
    //     Everyother:  7
    //     Everyother:  9
    //     Everyother:  11
    //     Everyother:  13
    //     Everyother:  15
    //     Everyother:  17
    //     Everyother:  19

// Create a for loop that logs the result of each number from 1 - 20 tripled.

    for (let i=1; i<=20; i++) {
        console.log("Tripled: ", i * 3)
    }
    // output:
    //     Tripled:  3
    //     Tripled:  6
    //     Tripled:  9
    //     Tripled:  12
    //     Tripled:  15
    //     Tripled:  18
    //     Tripled:  21
    //     Tripled:  24
    //     Tripled:  27
    //     Tripled:  30
    //     Tripled:  33
    //     Tripled:  36
    //     Tripled:  39
    //     Tripled:  42
    //     Tripled:  45
    //     Tripled:  48
    //     Tripled:  51
    //     Tripled:  54
    //     Tripled:  57
    //     Tripled:  60

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

    for (let i=1; i<=20; i++) {
        if (i % 2 === 0) {
        console.log(i)
        } else if (i % 2 !== 0) {
            console.log('ODD')
        }
    }   
    // output:  
    //     ODD
    //     2
    //     ODD
    //     4
    //     ODD
    //     6
    //     ODD
    //     8
    //     ODD
    //     10
    //     ODD
    //     12
    //     ODD
    //     14
    //     ODD
    //     16
    //     ODD
    //     18
    //     ODD
    //     20

// Consider this variable:

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

let largestNum = 0

    for(let i=0; i < nums.length;i++) {
        if(largestNum < nums[i]) {
            largestNum =nums[i]
        }
    } 
    console.log(largestNum)
    // output: 67

// Create the code that will log the smallest number from the array.
    
let smallestNum = 0

    for(let i=0; i < nums.length; i++) {
        if (smallestNum > nums[i]) {
            smallestNum = nums[i]
        }
    }
    console.log(smallestNum)
    // output: -9 

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
        
    for (let i=0; i<nums.length; i++) {
        console.log(nums[i] % 2 )
    }
    // output: 1, 1, -1, 0, 1

// Consider this variable:

const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.
let numE = 0

    for (let i=0; i<myString.length; i++) {
        if (myString[i] === "e") {
        numE++
        }
    }
    console.log(numE)
    // output: 2

// Create the code that will log every other character in the string.

    for (let i=0; i<myString.length; i+=2) {
        console.log(myString[i])
    }
    // output: 
            // l
            // a
            // n
            // s
            // u
            // e
            // t

// 🏔 Stretch Goals

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

    for (let i=5; i<16; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }
    // output: 
            // 5 is odd
            // 6 is even
            // 7 is odd
            // 8 is even
            // 9 is odd
            // 10 is even
            // 11 is odd
            // 12 is even
            // 13 is odd
            // 14 is even
            // 15 is even

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

    for (let i=1; i<101; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
    // output: 
            // 1
            // 2
            // fizz
            // 4
            // buzz
            // fizz
            // 7
            // 8
            // fizz
            // buzz
            // 11
            // fizz
            // 13
            // 14
            // fizzbuzz
            // 16
            // 17
            // fizz
            // 19
            // buzz
            // fizz
            // 22
            // 23
            // fizz
            // buzz
            // 26
            // fizz
            // 28
            // 29
            // fizzbuzz
            // 31
            // 32
            // fizz
            // 34
            // buzz
            // fizz
            // 37
            // 38
            // fizz
            // buzz
            // 41
            // fizz
            // 43
            // 44
            // fizzbuzz
            // 46
            // 47
            // fizz
            // 49
            // buzz
            // fizz
            // 52
            // 53
            // fizz
            // buzz
            // 56
            // fizz
            // 58
            // 59
            // fizzbuzz
            // 61
            // 62
            // fizz
            // 64
            // buzz
            // fizz
            // 67
            // 68
            // fizz
            // buzz
            // 71
            // fizz
            // 73
            // 74
            // fizzbuzz
            // 76
            // 77
            // fizz
            // 79
            // buzz
            // fizz
            // 82
            // 83
            // fizz
            // buzz
            // 86
            // fizz
            // 88
            // 89
            // fizzbuzz
            // 91
            // 92
            // fizz
            // 94
            // buzz
            // fizz
            // 97
            // 98
            // fizz
            // buzz