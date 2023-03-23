JAVASCRIPT LOOPS LECTURE

-- VARIABLE DECLARATIONS AND SCOPE

var - global scope, can be accessed anywhere inside or outside of a block
let - only available inside the block it's defined in - it can be reassigned but not redeclared.
const - cannot be redeclared or reassigned

-- block is between
    {
    this is code block
            this is more code
            more code
            and more code
    }


    if(true) {
        var myName = "Monica"
        console.log(myName)
    }
    //output: Monica

    if(true) {
        var myName = "Monica"
    }
    console.log(myName)
    //output: Monica

    if(true) {
        let yourName = "Molly"
        console.log(yourName)
    }
    //output: Molly

    if (true) {
        let yourName ="Molly"
    }
    console.log(yourName)
    //output: error cannot be access because the log is not in the same block

let myCat = "Kevin"
myCat = "Geppetto"
    console.log(myCat)

const myDog = "Nika"
myDog = "Theo"
    console.log(myDog)
    //output: error - const can only be defined once, myCat is still defined as Nika but errored because i tried to redefined it

## LOOPS

## Iteration: process of repeating a task over and over until condition is met

Info needed to set up a for loop
1. Where to start counting
2. where to stop counting
3. how to get from the start to the stop

1. start (let index = 0)
2. stop (index < 10)
3. index = index + 1

- semicolon is absolutely necessary
    // for(let index = 0; index < 10; index = index + 1) {

    // }

//in the wild

    // for(let i=0; i < 10; i++) {

    // }
+1 is ++
everything else is += ie: i += 3

const numsArray = [1, 2, 3, 4, 5]
    for(let i=0; i<5; i++) {
     console.log("index", i)
    }

- labels what we are printing out ie:index
    //output:
    // index 0
    // index 1
    // index 2
    // index 3
    // index 4

const numsArray = [1, 2, 3, 4, 5]
    for(let i=0; i<5; i++) {
    console.log("index", i, "value:", numsArray[i])
    }
    // output:
    // index 0 value: 1
    // index 1 value: 2
    // index 2 value: 3
    // index 3 value: 4
    // index 4 value: 5

    for(let i=0; i<numsArray.length; i++) {
        if(numsArray[i] % 2 === 0) {
            console.log(`${numsArray[i]} is an even number!`)
        }
    }
    // output:
    // index 0 value: 1
    // index 1 value: 2
    // index 2 value: 3
    // index 3 value: 4
    // index 4 value: 5
    // 2 is an even number!
    // 4 is an even number!

-- String interpolation syntax `{$variableName}`. Allows you to print the value of variable in a string.
