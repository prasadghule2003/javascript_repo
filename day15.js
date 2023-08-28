let names = ['prasad','sakshi','punam','akash']
names.pop()
console.log(names)

names.shift()
console.log(names)

names.splice()
console.log(names)


let numbers = [11,22,33,44,55,66,77,88,99,100]
let q1 = numbers.fill("prasad",2,8)
console.log(q1)

let info = ["prasad","ghule",13,44]
let info2 = {
    firstName:"prasad",
    lastName:"ghule",
    age:13,
    rollno:44
}
console.log(info2.firstName)
console.log(info2['age'])

info2.firstName = "tanmay"
info2['age'] = 32
console.log(info2)

info2.city = 'pune'
info2['language'] = "marathi"
console.log(info2)

delete info2.firstName
delete info2['lastname']
console.log(info2)