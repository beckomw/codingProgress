let name = 'Wayne Beckom'

// Length property 
console.log(name.length)


// Convert to upper case 
console.log(name.toUpperCase())

// Convert to lower case 
console.log(name.toLowerCase())

// includes method 

let password = 'abce123098'
console.log(password.includes('password'))

// Trim method 
console.log(name.trim())

// Challenge area 
// isValidPassword 
// only return true if length is more than 8 - and it doesnt containo the word password 


// function isValidPassword (word) {

//     if (word.length < 8) { 
//         return false
//     } else if (word == word.length > 8 && word != word.includes('password') ){    
//         return true
//     } else {
//         return false
//     }
// }



let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
            return true 
        } else {
            return false 
        }
    
} 

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@@#$@#%^'))
console.log(isValidPassword('asdfgasdpoipassword'))