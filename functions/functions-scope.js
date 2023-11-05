//Global scope(convertFahrenheit, tempOne, Temptwo)
    // Local scope (fahrenheit, celsuis)
        // Local Scope (isFreezing)


let conversion = function (fahrenheit) {
    let answer = (fahrenheit - 32) * 5/9
    return answer
}

console.log(conversion(32))
console.log(conversion(68))





console.log('Wayne')
let name = 'wayne'

console.log(`hey, my name is ${name}`)
