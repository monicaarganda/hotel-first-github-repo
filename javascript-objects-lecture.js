//JAVASCRIPT OBJECTS 12/7/22

//DATA TYPES
// - primitive and non-primitive
// - collection of primitive
// - primitive: string, undefined, number, null, symbo9l, boolean
// - non-primitive: object (collections: arrays, objects)

typeof 7
//output: "number"
typeof "hello"
//output: "string"
typeof [1, 2, 3]
//output: "object"

// curly braces assigned without a behavior is defined as an object

// h1 {
//     color: "blue"
// }

// Objects - curly braces, key value pairs : a collection of data
//{myKey: "hello hotel"} //base structure for an object
// symbol - a unique identifier (key in an object)
// symbol in this equation will be myKey

// {key1: "value1", key2: "value2", key3: "value3"}
// as many key value pairs as needed, comma separated, inside curly braces

//let myObject = {key1: "value1", key1: "value1", key3: "value3"}

// let myObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//     key4: "value4",
// }
// console.log(myObject)
//output: '{ key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }'
// console.log(myObject.key3)
// use dot notation to extract values
//output: value3

let breakfast = {
        item1: "bacon",
        item2: "chorizo",
        item3: "eggs",
        item4: "cereal",
        item5: {
            beverage1: "protien shake",
            beverage2: "coffee",
            beverage3: {
                juice1: "pomegranate",
                juice2: "cranberry",
                juice3: "oj"
            }
        }
    }
//nested value
// item5 holds another object, declaring a subset object
// console.log(breakfast)
console.log(breakfast.item2)
//output: chorizo
// console.log(breakfast.item5.beverage2)
//output: coffee
// console.log(breakfast.beverage2)
//output: undefined
// console.log(breakfast.item5.beverage3.juice1)
//output: pomegrante

//destructuring - creating a variable with a key and assigning it the pathway
// console.log(breakfast.item5.beverage3.juice1)
// console.log(breakfast.item5.beverage3.juice2)
// console.log(breakfast.item5.beverage3.juice3)
// console.log(juice1)
//output:ERROR -> juice1 is not defined

// let { juice1 } = breakfast.item5.beverage3
let { juice1, juice2, juice3 } = breakfast.item5.beverage3
// console.log(juice1)
// console.log(juice2)
// console.log(juice3)

//Methods
//What are methods? built in methods
// what is function? snippet of code functionality

What is the difference between a function and method?
Both method and function execute code functionality, execute behavior
a method is a function that belongs to a data type or object

//parathesis target action preformance

// object - with static data (types) and preform behavior
//(this.) - if wanted to reference an key inside of an object use 
let mathProblem = {
    num1: 4,
    num2: 7,
    num3: 9,
    addup: function(){
        return this.num1 + this.num2 +this.num3
    }
}
// console.log(mathProblem)
//output: { num1: 4, num2: 7, num3: 9, addup: [Function: addup] }
// console.log(mathProblem.num1)
//output: 4

// method: addUp is a custom method that belongs to the mathProblem object
// console.log(mathProblem.addup)
//output: [Function: addup]
// console.log(mathProblem.addup())
//output: undefined //no return the first time
//output: 20