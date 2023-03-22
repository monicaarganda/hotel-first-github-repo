Javascript Conditionals 
 
Conditionals -- aka decision trees, conditional statements, if/else statements
- use true evaluations to make a decision and produce an output

STRUCTURE
    if(true condition){
        action if performs
    }

    if - keyword that starts the conditional
        - () - evalution if the condition is true
        - {} - performs the action of the code block

    Boolean value - true or false
    Produceed by three types of operators

## Equality operators 
    - `==` loose equality
    - `===` strict equality
    
let num = 22

    console.log(num == "22")
        output: true
    console.log(num == "22")
        output: true - flaw with using loose equality is that it will do a type coersion
    console.log(num === "22")
        output: false

## Logical operators 
    - `&&` And
    -- The && will evaluate both as a unit and the comma will evaluate them both individually

        console.log(num === 22 && num > ourCohort.length)
            output: true (both statements are true, 22 is stictly equal to 22 and 22 is greater that 10)
        console.log(num ===22 && num < ourCohort.length)
            output: false (because 22 is equal to 22 but 22 is not less that 10, if either condition is false the output is false)
        console.log(num ===22, num < ourCohort.length)
            output: true false (because the output is showcasing the answer to both of the conditions)
            
    - `||` Or
    -- (pipe) - Or -- expects one condition to be true

        console.log(num < ourCohort.length || num === 22 )
            output: true


    - `!` Bang operator (opposite)
    --  negotion

    console.log(num ===22 && !num < ourCohort.length)
        output: true (because the statement is false the "!" (bang operator) changes the output to the opposite which is false)
    console.log(num ===22 && num < ourCohort.length)
        output: false (because 22 is equal to 22 but 22 is not less that 10, if either condition is false the output is false)

## Relational operators 
    - `<` (less than)
    - `>` (greater than)
    - `<=` (less than or equal to)
    - `>=` (greater than or equal to)

let ourCohort = "Hotel 2022"
    
        console.log(num > ourCohort.length)
            output: true (because the number 22 is larger that the number 10 which is the amount of characters "Hotel 2022" has)

Conditions () --

    if - keyword that starts the conditional (can one have one per conditional)
        - if -- takes on the condition
        - () -- evalution if the condition is true
        - {} -- performs the action of the code block

    else - keyword to create a default output; a catch-all (can one have one else per conditional)
        - else -- code block(action to take)

    else if -- keyword to create additional conditional statments, takes in a codition and can have as many as necessary
        - if is specific looking for a specific answer whereas else is the catchall. If you are asking for a color and a number is input this the automated response for anything else that might be entered other that your specific variables

let year = 2022  

    if(year === 2022){
        console.log("I am true")
    }
        output:"I am true"
    if(year === 2021){
        console.log("Last year")
    }
        no output because there is not a true condition available due to not defining what we want the computer to due if the statement is false

// else - keyword to create a default output; a catchall (can one have one else per conditional)

    if(year === 2021){
        console.log("Last year")
    } else {
        console.log("2022 is almost done")
    }
        output: "2022 is almost done"

// else if - keyword to create additional conditional statments, takes in a codition and can have as many as necessary

let myColor = "green"

// reassign a new value to the variable
    myColor = "black"
    myColor = "Blue"

    if(myColor === "green"){
        console.log("Have you considered purple?")
    } else if(myColor === "purple"){
        console.log("You have exquisitie taste")
    } else if(myColor === "blue"){
        console.log("Because your color contributes to purple, you are acceptable.")
    } else {
        console.log("I have a suggestion: purple!!!")
    }
        output: "Have you considered purple?"
        output (myColor = "black"): "I have a suggestion: purple!!!"
        output (myColor = "blue"): "Because your color contributes to purple, you are acceptable.")

## String interpolation aka `template literals`
    - allows variables t be embedded in strings
    -- `${variableName}`

        myColor = "purple"
        myColor = "green"

    if(myColor === "green"){
        console.log(`${myColor}??? Have you considered purple?`)
    } else if(myColor === "purple"){
        console.log(`${myColor}!!! You have exquisitie taste`)
    } else if(myColor === "blue"){
        console.log(`Because your color ${myColor} contributes to purple, you are acceptable.`)
    } else {
        console.log(`${myColor}???I have a suggestion: purple!!!`)
    }
        output (myColor = "purple"): "purple!!! You have exquisitie taste")
        output (myColor ="green"): "green??? Have you considered purple?"
    
let chores = 5

    if(chores >= 2) {
        console.log("$10")
    } else if(chores >= 3) {
        console.log("$15")
    } else if(chores >= 5) {
        console.log("$40")
    } else {
        console.log("Here's a hug")
    }
        output: $10 because all of the statments are true it hit the first true statement as the output

// Better logic
    if(chores >= 5) {
        console.log("$40")
    } else if(chores >= 3) {
        console.log("$15")
    } else if(chores >= 2) {
        console.log("$10")
    } else {
        console.log("Here's a hug")
    }
        output: $40 

    console.log(groceryList.push("beans"))
    console.log(groceryList)
    console.log(groceryList.pop("cookies"))
    console.log(groceryList)