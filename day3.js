//conditional statement
//one input & multiple outcomes

// program1
let numT =11
if (numT > 0 && numT<=5){
    console.log("10%discount")
}
if (numT > 5 && numT<= 10){
    console.log("20%discount")
}
if (numT > 10){
    console.log("30%discount")
}

// program 2

let s = 10
let t = 5

if (s > t){
    console.log("s is greter")
}
else { 
    console.log("t is greater")
}

//program 3
let x = 8
let y = 40
let z = 200

if (x > y && x > z){
    console.log('x is greater')
}
else if(y > x && y > z)
{
    console.log('y is greater')
}
else{

    console.log('z is greater')
}

//program 4
let x1 = 20
let x2 = 50
let x3 = 100
if (x1 > x2 && x1 > x3){
    console.log('x1 is greater')
}
else if(x2 > x1 && x2 > x3)
{
    console.log('x2 is greater')
}
 else{
     console.log('x3 is greater')
}