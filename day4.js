// switch case without break

// program 1
let city = "pune"
switch (city){
    case "pune":
        console.log("MH")
}

// program 2
let city2 = "jaipddddre"
switch (city2){
    case "pune":
    console.log("MH")

     case "jaipur":
     console.log("RJ")

     case "indore":
     console.log(" MP")

     default:
        console.log('incorrect city name')
}

// program 3
let city3 = "vdddd"
switch (city2){

    case "pune":
        console.log("MH")
        break

        case "jaipur":
            console.log("RJ")
            break

            case "varanasi":
            console.log("UP")
            break

            default:
                console.log('incorrect city name')
}

// program 4
let city4 = "jaipur"
switch (city4){
    case "pune":
    case"nagpur":
    console.log("MH")
    break
    
    case "indore":
    case"bhopal":
    console.log("MP")
    break

    case "jaipur":
        case "udaipur":
            console.log("RJ")
            break

            default:
                console.log('incorrect city name')
}

// program 5
let boolval = true
let marks = 92
switch(boolval){
    case marks > 90:
        console.log('gradeA')
        break
        case marks > 75:
            console.log("gradeB")
            break
            case marks > 65 && marks <=55:
            console.log('gradeC')
            break
            default:
                console.log('fail please try again')

}

// program 5
let prasad 