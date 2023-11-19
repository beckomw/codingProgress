let num = 174.232


// console.log(num.toFixed(2))


// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))



// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// //0 - 10
// console.log(randomNum)


// challenge area 

//create a function take in a guess and generate a random number
// 1-5 - true if correct - false if not correct 



// makeGuess = function (num){
    
//  num = Math.floor(Math.random() * (5 - 1 + 1) + 1) 
// }



let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(3))