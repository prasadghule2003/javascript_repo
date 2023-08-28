let info ={
    firstName:'prasad',
    lastName:'ghule',
    age:21,
    rollNo:11
}
console.log(info.firstName)
console.log(info['lastName'])

// update
info.firstName = "tanmay"
info['lastname'] = "rani"
console.log(info)

// add
info['city'] = "pune"
info.lang = "hindi"
console.log(info)

// delete
delete info.firstName
delete info['lastname']
console.log(info)

// 