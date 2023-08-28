// for loop
let marks = [11,22,33,44,55]
for(let i = 0; i < marks.length; i++){
    console.log(i)
    console.log(marks[i])
}

let vehicle ={
    color: "red",
    regNo: 123
}
console.log(vehicle)

for(let k in vehicle){
    console.log(k,vehicle[k])
}

let j = [11,22,33,44]
console.log(j.at(1))

let q1 = j.fill('chinmay',1,3)
console.log(q1)

let names = ['prasad','akash','siddhi','ram']
names.splice(1,2,"sham","sita")
console.log(names)

// program 1
let firstName ="prasad"
let lastName = "ghule"
let middleName = "sunil"

console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)