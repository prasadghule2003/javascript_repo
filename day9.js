let numbers = [11,22,33,44]
console.log(numbers[0])
console.log(numbers[2])

// array stores the value by index
// index start with 0
// program 1
//               0        1         2
let names = ["chinmay","saarika","poorva",]
console.log(names[1])


// property
let q1 = names.length
console.log(q1)

// program 2
// push()
// action = add the element to last
//return = new length of array
let q2 = names.push("prasad")
console.log(q2)
console.log(names)

// program 3
// unshift()
// action = add the element to start
// return = new length

let fruits = ['apple','mango','banana','grapes']
let q3 = fruits.unshift("chikoo")
console.log(q3)
console.log(fruits)

// program 4
// pop()
// action = removes the last element
// return = returns same element

let flowers = ["rose","lily","jasmine","lotus"]
let q4 = flowers.pop()
console.log(q4)
console.log(flowers)

// program 4
// shift()
// removes the first element
// return the same element

let marks = [22,33,44,55]
let q5 = marks.shift()
console.log(q5)
console.log(marks)