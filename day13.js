// map
let birthyear = [1989,1990,1991,1992]
let ages = birthyear.map(function(el,index,arr){
console.log(el)
return 2023-el
})
console.log(ages)

let numbers = [1,2,3,4,5,6,7,8,9,10]
let tableof2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(tableof2)

// filter

let marks = [89,45,66,77,88,22,55,75]
let q1 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q1)

// reduce()
let ams = [11,22,33]
let total = 0
for(let i = 0; i < ams.length; i++){
    total = total + ams[i]
}
console.log(total)

let q2 = ams.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q2)

// forEach
let cities = ['nagpur','wardha','dhule','malegaon']
cities.forEach(function(el,index,arr){
    console.log('welcome' + el)
})

// filter

let sp = [11,22,33,44,55,66,77,88,99,98,54]
let s = sp.filter(function(el,index,arr){
    return el > 30
})
console.log(sp)

let s2 = sp.find(function(el,index,arr){
    return el > 30
})
console.log(s2)

let s3 = sp.findIndex(function(el,index,arr){
    return el > 30
})
console.log(s3)

// program 6
let m = [11,33,44,55,66,22,3]
let n = m.every(function(el,index,arr){
    return el > 10
})
console.log(n)

let n2 = m.some(function(el,index,arr){
    return el > 600
})
console.log(n2)

