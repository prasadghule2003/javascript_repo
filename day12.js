// program 1

let birthyear = [2000,2001,2002,2003]
let ages =[]
for(let i = 0; i < 4; i++){
    console.log(i)
    console.log(birthyear[i])
    console.log(2023-birthyear[i])
    let s = 2023-birthyear[i]
    ages.push(s)
}
console.log(ages)

// program 2
let birthyears = [2000,1999,1998,1997]
let ages2 = []
for(let i = 0; i < birthyears.length;i++){
    console.log(i)
    console.log(birthyears[i])
    console.log(2023 - birthyears[i])
    let p = 2023-birthyears[i]
    ages2.push(p)
}
console.log(ages2)

// program 3

let marks = [33,44,55,66,77]
let above50 = []

for(let i = 0; i < marks.length; i++){
    console.log(i)
    console.log(marks[i])

    if (marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)