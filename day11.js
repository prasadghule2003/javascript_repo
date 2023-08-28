let fruits = ["apple","banana","chikoo","grapes"]
console.log(fruits[0])
console.log(fruits.length)

// program 2
for(let i = 0; i < fruits.length;i++){
    console.log(i)
    console.log(fruits[i])
}

// program 3
//             0  1  2  3  4  5  6  7  8
let numbers =[11,22,33,44,55,66,77,88,99,]
for(let i = numbers.length -1; i >= 0; i--){
    console.log(i)
    console.log(numbers[i])
}

// program 4
// push method

let city = ["pune","mumbai","chennai","gujrat"]
let q1 = city.push("nagpur")
console.log(q1)
console.log(city)

// program 6
// unshift
let q2 = city.unshift("wardha")
console.log(q2)
console.log(city)

// program 7
//pop()
let q3 = city.pop()
console.log(q3)
console.log(city)

// program 8
// shift()

let q4 = city.shift()
console.log(q4)
console.log(city)

// program 9
// includes()
let cars = ["BMW","Audi","mercedes"]
let q5 = cars.includes('Audi')
console.log(q5)