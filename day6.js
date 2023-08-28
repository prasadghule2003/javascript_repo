// switch case
// program 1

let city = "pune"
switch (city){
    case "pune":
    console.log("MH")
    
    case "jaipur":
        console.log("RJ")
        
        case "varanasi":
            console.log("up")

            default:
                console.log("incorrect city name")
}

// program 2
let city2 = "vddddd"
switch (city2){
    case "pune":
        console.log("MH")
        break
        case "jaipur":
            console.log("rj")
            break
        case "varanasi":
            console.log("up")
            break
            default:
                console.log('incorrect city name')
}

// program 3

let city3 = "pune"
switch (city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
        case "indore":
        case "bhopal":
            console.log("MP")
        break
        case "jaipur":
        case "udaipur":
        console.log("RJ")
        break
        default:
            console.log('incorrect city name')
}

// program 4
let boolval = true
let marks =92
switch (boolval){
    case marks > 90:
    console.log('GradeA')
    break
    case marks > 75:
        console.log('GradeB')
        break
        case marks > 65 && marks <= 55:
            console.log('GradeC')
            break
            default:
                console.log('fail please try again')
}