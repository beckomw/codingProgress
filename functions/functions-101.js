// function input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result 
}



let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)



// convertFahrenheitToCelsius

// Call a couple of time (32 -> 0) (68 -> 20)


let conversion = function (fahrenheit) {
    let answer = (fahrenheit - 32) * 5/9
    return answer
}

console.log(conversion(32))
console.log(conversion(68))
