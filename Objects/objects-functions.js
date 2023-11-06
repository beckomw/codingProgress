let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function (book) {
    return {
        summary:console.log(`${book.title} by ${book.author}`),
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`

    }

}



let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge area 
// Create function - take farenheit in - return all three in object


// //et temps = {
//     fahrenheit: fahrenheit,
//     celsius: (fahrenheit - 32) * 5/9,
//     kelvin: (fahrenheit - 32) * 5/9 + 273.15 
// }




let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit - 32) * 5/9 + 273.15 
    }

}

let temps = convertFahrenheit(74)
console.log(temps)

