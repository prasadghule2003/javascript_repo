// program 1
let vehicle ={
    model:"q4",
    colour:"red"
}
// retrive
console.log(vehicle.model)
console.log(vehicle['colour'])

// update
vehicle.colour = "blue"
vehicle['model'] = "q6"
console.log(vehicle)

// add
vehicle.regNo = 123
vehicle['city'] = "jaipur"
console.log(vehicle)

// delete
delete vehicle.colour
delete vehicle['city']
console.log(vehicle)

// program
let info = ['prasad','ghule',55,44]
console.log(info[1])

// update
info[1] = "dani"
console.log(info)

// add
info.push("pune")
info.unshift("mr")
console.log(info)
console.log(info)

