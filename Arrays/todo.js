// Create an array with five todos 
// Print have x todos 
// Print the first and second to last items -> todo: walk the dog 

// Delete the 3rd item
// Add a new item on the end 
// Remove the first item from the list 


const toDoList = ["Assemble Furniture","Finish Classwork","Clean up","Go to dollar tree","Pickup Christina"]

toDoList.splice(2,2)
toDoList.push("Clean Bathroom")
toDoList.shift()

// let howManyTodos = toDoList.length
// console.log(howManyTodos)

// console.log("You have " + howManyTodos + " things on your to do list!")

// console.log("Todo: "+toDoList[toDoList.length - 2])
// console.log("Todo: "+toDoList[toDoList.length - 1])

// toDoList.forEach(function(item,index){
// console.log(index +".")
// console.log(item)

// })

toDoList.forEach(function (todo,index) {
    const num = index + 1
    console.log(`${num},${todo}`)

})




console.log(toDoList)
// 1. The first item 
// 2. the second item 

