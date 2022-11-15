// JAVACRIPT


// ANYTHING & EVERYTHING IN JAVASCRIPT ARE OBJECT


// 1. JS is an intepreted lang -> executes line-by-line
// 2. JS is helpful for making dynamic (on run-time) Front_End Applications using DOM & AJAX
// 3. JS is a programming language (it will make decision for you), Its a complete OOPs

// 1. How to print values in JS
// console.log('Hello...')
// console.warn('This is a warning..')
// console.error('This is a warning..')

// Data-Types, Variables and Constants
// Data Types -> Nothing but different type of data that JS understand
// 1. Primitive Data Types (PDTs)
// i. number
// variable1 = 1000
// console.log(variable1 + 10)

// Add two numbers
// num1 = 100
// num2 = 3
// sum = num1 + num2
// console.log(sum)

// // ii. string
// string1 = 'String - One'
// string2 = 'String - Two'
// string3 = 'String - Three'
// console.log(string1, string2, string3)

// // iii. boolean
// console.log(true)
// console.log(false)

// // iv. null
// let myVarible = 'This is a String'
// console.log(myVarible)
// myVarible = 100
// console.log(myVarible)

// console.log(myVarible)

// // v. undefined
// console.log(myVaribale2)

// vi. Symbol


// OPERATORS -> what operation do you wnat to perform on the data
// 1. Arithmetic Operations
// variable1 = 100
// variable2 = 2

// sum = variable1 + variable2
// diff = variable1 - variable2
// product = variable1 * variable2
// // Ans is the quotient
// division = variable1 / variable2

// console.log(sum)
// console.log(diff)
// console.log(product)
// console.log(division)

// // Modulous -> Ans is the remainder
// mod = variable1 % variable2
// console.log(mod)

// Comparitive Operators

// CHECK THE DATA TYPE OF A VARIABLE - typeof
// console.log(typeof(value1))
// console.log(typeof("Hello"))
// console.log(typeof(true))

// INTERNAL_TYPECASTING
// value1 = 1
// value2 = true

// console.log(value1 - value2)
// console.log( value1 > value2 )
// console.log( value1 < value2 )
// console.log( value1 >= value2 )
// console.log( value1 <= value2 )

// console.log(value1 == value2)   // This checks only the value of the 2 variable
// console.log(value1 === value2)  // This checks not the value BUT ALSO the type

// 2. Non-Primitive Data Types (Non-PDTs)

// Conditional Statements -> if, else if, and else
// Q -> you are given with 2 numbers, add them and print them
// num1 = 100
// num2 = 150
// console.log(num1 + num2)
// if( typeof(num1) === 'number' ) {
//     console.log(num1, " is a number")
//     if( typeof(num2) === 'number' ) {
//         console.log(num2, " is a number")
//         console.log(num1 + num2)
//     }
// }

// Logical Gates
// AND ->
// a    b       o/p
// 0    0       0
// 0    1       0
// 1    0       0
// 1    1       1

// XOR ->
// a    b       o/p
// 0    0       0
// 0    1       1
// 1    0       1
// 1    1       0

// OR ->
// a    b       o/p
// 0    0       0
// 0    1       1
// 1    0       1
// 1    1       1

// NOT ->
// a       o/p
// 0       1
// 1       0

// Q -> You are given with two +ve values, add them and print the sqaure , if either of the one is negative, print the cube of the differnce and if both values are -ve print to give correct input
// var1 = 5
// var2 = 2

// Global Declaration
// var sum = 0

// if(var1 > 0 && var2 > 0) {
//     var sum = 0
//     sum = var1 + var2
//     console.log(sum * sum)
// } else if(var1 < 0 ^ var2 < 0) {
//     let diff
//     diff = var1 - var2
//     console.log(diff * diff * diff);
// } else {
//     console.warn('Enter correct inputs')
// }

// console.log('Sum is - ', sum)
// console.log('Diffrence is - ', diff)


// ES6 Scopes -> var -> public, let -> private and const -> private

// var -> a public identifier, accessed inside or outside the block
// let -> a private identifier, accessed inside the block
// const -> a private identifier, accessed inside the block BUT it cannot be declared and not initialised ALSO const variable cannot be changed.

// DONOT DO THIS -> const pi
// const pi = 3.14
// // DONOT DO THIS -> pi = 2.34

// // Terniary Operators (? & :) -> if & else
// // condition ? True : False
// const someValue = -10
// someValue >= 0 ? console.log('POSITOVE') : console.log('NEGATIVE')

// INC / DEC OPERATORS

// let num = 10
// console.log(num + 1)
// postfix expression
// console.log(num++) | console.log(num) + num = num+1
// 
// console.log(num)
// // prefix expression
// console.log(++num) | num += 1 + console.log(num)

// num += value | num = num + value
// num -= value | num = num - value
// num *= value | num = num * value
// num /= value | num = num / value
// num %= value | num = num % value
// console.log(num %= 2)

// Q -> Voting Sytem
// gender = 'M'/'F'
// age = 1-100
// gender = M, age >= 21, he can vote
// gender = F, age >= 18, you can vote

// gender = 'F'
// age = 17
// if(gender === 'M') {
//     if(age >= 21) {
//         console.log('You can vote')
//     } else {
//         console.log('You cannot vote')
//     }
// } else {
//     if(gender === 'F') {
//         if(age >= 18) {
//             console.log('She can vote')
//         } else {
//             console.log('She cannot vote')
//         }
//     }
// }

// gender = 'M'
// age = 18
// if(gender == 'M' && age >= 21) {
//     console.log('You can Vote')
// } else if(gender == 'F' && age >= 18) {
//     console.log('You can vote')
// } else {
//     console.log('You cannot vote')
// }

// gender = 'M'
// age = 21
// const myVarible = true
// if((gender == 'M' && age >= 21) || (gender == 'F' && age >= 18)) {
//     let variableOne = "Arun"
//     console.log('You can Vote')
// } else {
//     console.log('You cannot vote')
// }

// myVarible = false
// console.log(variableOne)

//             "01234567891011"
// let myString = "Arun Kudiyal"
// It will create an object of the certian type
// console.log(typeof(myNumber))
// JAVA - int myNumber = 100

// Methods / Function to update / manipulate data / Operation
// console.log( myString.toUpperCase() )
// console.log( myString.toLowerCase() )
// console.log( myString.charAt(6) )


// NON-PRIMATIVE DATA TYPES -

// 1. Array - [  ] -> A variable which contains multiple different variable inside it | Array always start from index 0
// const myVar = 100

// const fruits = [ "Apple", "Banana", "Orange", "Pears", "Watermelon" ]
// console.log(fruits)

// // console.log( Array.isArray(myVar) )
// // How to access the values -> using index value -> arrName[indexNo]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])

// const myArray = [100, "Arun Kudiyal", true, null, undefined]
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])

// myArray[6] = "New Value"
// console.log(myArray)
//              [ [00, 01, 02], [10, 11, 12], [20, 21, 22] ]
// const myArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// LENGTH
// console.log(myArray.length)
// // Access 5
// console.log(myArray[1][1])


// 2. Object - {  } -> A variable which contains multiple differnt data types but in the form of key: value pair
// const obj = { key1: val1, key2: val2 }
// const user = {
//     name: 'User One',
//     age: 23,
//     isVerified: true,
//     hobbies: ["Play Cless", "Singing", "Reading Novels"],
//     address: {
//         street: 'Street 1',
//         city: 'Chandigarh',
//         state: 'Chandigarh',
//         country: 'India'
//     }
// }

// console.log(user)

// Access the object keys - (.)
// console.log('The name of the user is ', user.name)
// console.log(user.isVerified)
// console.log(user.age)
// ` ${ anyVariable } `
// console.log(`One of the hobbies of the user is ${user.hobbies[0]}`)
// console.log(`Complete address the user is Street - ${user.address.street}, City - ${user.address.city}, State - ${user.address.state}, Country - ${user.address.country}`)

// console.log(user.address)


// 3. Array of Objects - [ {}, {}, {}, {}, ... ]
const users = [
    {
        name: 'User One',
        age: 20,
        isVerified: true,
        hobbies: ["Studying", "Sleeping", "Eating"],
        address: {
            street: 'Street 1',
            city: 'Dehradun',
            state: 'Uttarakhand',
            country: 'India'
        }
    },
    {
        name: 'User Two',
        age: 27,
        isVerified: true,
        hobbies: ["Coding", "Irritate", "Play Soccer"],
        address: {
            street: 'Street 1',
            city: 'Chandigarh',
            state: 'Chandigarh',
            country: 'India'
        }
    },
    {
        name: 'User Three',
        age: 33,
        isVerified: true,
        hobbies: ["Play Cless", "Singing", "Reading Novels"],
        address: {
            street: 'Street 1',
            city: 'Chandigarh',
            state: 'Chandigarh',
            country: 'India'
        }
    }
]

// Access the data from AOO -
console.log(`The city of ${users[0].name} is ${users[0].address.city}`)
console.log(`The hobbies of ${users[1].name} is ${users[1].hobbies[0]}, ${users[1].hobbies[1]} and ${users[1].hobbies[2]}`)

// 4. JSON

// JS Functions - 