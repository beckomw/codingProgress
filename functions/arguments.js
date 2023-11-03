// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}


let result = add(10, 1, 5)
console.log(result)


// default arguments 

let getScoreText = function (name = 'anonymous', score = 0) {   
    return 'Name: ' + name + ' - score: ' + score

}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge area 

// take two arguments total, tipPercent .2 

let whatIsTip = function (total, tipPercent = .2) {

    grandTotal = total * tipPercent
    return grandTotal
}

let tip = whatIsTip(100)
console.log(tip)