let names = ["prasad","shabdashree","sakshi","sham","ram"]
console.log(names)
let a = names.reverse()
console.log(a)
// reverse()


// sort()
let q = names.sort()
console.log(q)

// concat()
let numA = [11,22,33]
let numB = [44,55,66]

let numC = numA.concat(numB)
console.log(numC)

let numD = numB.concat(numC)
console.log(numD)

// join()
let info = ["prasad","ghule","7410151672",]
let info2 = info.join('_')
let info3 = info.join('@')
let info4 = info.join('')
console.log(info2)
console.log(info3)
console.log(info4)


// flat()
//                  0                     1                     2
//                0          1        0        1            0           1
let states = [['wardha','nagpur'],['jaipur','udaipur'],['banglore','chennai']]
console.log(states[0][1])
console.log(states[2][1])
let info6 = states.flat()
console.log(info6)

//slice()
  //            0       1          2       3         4      5       6
let namess = ['pune','mumbai','wardha','nagpur','chennai','goa','keral']
  //            -7     -6       -5       -4       -3       -2     -1

  let p1 = namess.slice(1,6)
  let p2 = namess.slice(1)
  let p3 =  namess.slice(1,5)
  let p4 = namess.slice(0,-1)
  let p5 = namess.slice(-6,-3)
  let p6 = namess.slice(-6,6)
  let p7 = namess.slice(-1,-6)
  let p8 = namess.slice(0,-7)

  console.log(p1)
  console.log(p2)
  console.log(p3)
  console.log(p4)
  console.log(p5)
  console.log(p6)
  console.log(p7)
  console.log(p8)
  


  // splice()
   let nss = [11,22,33,44,55,66]
   console.log(nss)

  
   nss.splice(1,2)
   console.log(nss)
   