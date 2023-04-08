//JAVASCRIPT CLASSES 12.8.22

//Classes are recipes for making objects. Data and action

const car = {
    make: "GMC",
    model: "Sierra",
    year: 2010,
    color: "Blue"
}
console.log(car)
//output: { make: 'GMC', model: 'Sierra', year: 2010, color: 'Blue' }

//class keyword to declare class
//Pascal Case - each word in name is capitalized

//class - NameOfClass + {curly brackets}
// class Car {
//     constructor() {
//     this.make = "GMC"
//     this.model = "Sierra"
//     this.color = "Blue"
//     this.year = 2010
//     }
// }
// let torinTruck = new Car()
// console.log(torinTruck)
//output: Car { make: 'GMC', model: 'Sierra', color: 'Blue', year: 2010 }

//instantiation - creating an instance of a class (an object)
// to make function dynamic add arguements to the parameters of constructor
// class Car {
//     constructor(makeString, modelString, colorString, yearNumber) {
//     this.make = makeString,
//     this.model = modelString,
//     this.color = colorString,
//     this.year = yearNumber
//     }
// }
// let christianCar = new Car("Honda", "Accord", "Blue", 2017)
// console.log(christianCar)
//output: Car { make: 'Honda', model: 'Accord', color: 'Blue', year: 2017 }

// let myCar = new Car ("Subaru", "Blue", 2016, "Crosstrek")
// console.log(myCar)
//output: Car { make: 'Subaru', model: 'Blue', color: 2016, year: 'Crosstrek' }
//everything needs to be in the correct order to get the correct results

//to update a particular key value pair use dot notation
// myCar.model = "Crosstrek"
// console.log(myCar)
// output: Car {
//     make: 'Subaru',
//     model: 'Crosstrek',
//     color: 2016,
//     year: 'Crosstrek'
//   }

//adding a custom method

// class Car {
//     constructor(makeString, modelString, colorString, yearNumber) {
//     this.make = makeString,
//     this.model = modelString,
//     this.color = colorString,
//     this.year = yearNumber
//     } 
//     carBoasting() {
//         return `My ${this.make} ${this.model} is super cool`
//     }
// }

// let neysDreamCar = new Car ("Ford", "GT500", "Black", 2023)
// console.log(neysDreamCar)
//output: Car { make: 'Ford', model: 'GT500', color: 'Black', year: 2023 }

// console.log(neysDreamCar.carBoasting())
//output: My Ford GT500 is super cool


class Car {
    constructor(makeString, modelString, colorString, yearNumber, electricBoolean, doorNumber) {
    this.make = makeString,
    this.model = modelString,
    this.color = colorString,
    this.year = yearNumber,
    this.isElectric = electricBoolean
    this.isOperational = true // defult value
    this.doors = 4
    } 
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool`
    }
    wentElectric() {
        this.isElectric = true
    }
    brokeDown() {
        this.isOperational = false
    }
}

let neysDreamCar = new Car ("Ford", "GT500", "Black", 2023, false)
console.log(neysDreamCar)
// output: Car {
//     make: 'Ford',
//     model: 'GT500',
//     color: 'Black',
//     year: 2023,
//     isElectric: false
//   }
neysDreamCar.wentElectric()
console.log(neysDreamCar)
// output: Car {
//     make: 'Ford',
//     model: 'GT500',
//     color: 'Black',
//     year: 2023,
//     isElectric: true
//   }

// after adding is Operational
console.log(neysDreamCar)
// output: Car {
//     make: 'Ford',
//     model: 'GT500',
//     color: 'Black',
//     year: 2023,
//     isElectric: true,
//     isOperational: true
//   }

neysDreamCar.brokeDown()
console.log(neysDreamCar)
// output: Car {
//     make: 'Ford',
//     model: 'GT500',
//     color: 'Black',
//     year: 2023,
//     isElectric: true,
//     isOperational: false
//   }

let newCar = new Car("Porche", "Boxer", "Silver", 2020, false)
console.log(newCar)
//output: }
// Car {
//     make: 'Porche',
//     model: 'Boxer',
//     color: 'Silver',
//     year: 2020,
//     isElectric: false,
//     isOperational: true
//   }

let anotherCar2 = new Car("Honda", "Accord", "Black", 2021, false, 4)
console.log(anotherCar2)
// output: Car {
//     make: 'Honda',
//     model: 'Accord',
//     color: 'Black',
//     year: 2021,
//     isElectric: false,
//     isOperational: true,
//     doors: 4
//   }
//you do not need to pass arguement for default values in constructor