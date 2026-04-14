let item1 = "milk"
let item2 = "milo"
let item3 = "rice"

// forEach Method
let items = ["milk", "milo", "rice", 1, 2, 3, 4, true]

console.log(items[0])
console.log(items[1])
console.log(items[2])
console.log(items[3])
console.log(items[4])
console.log(items.length)

let fruits = ["orange", "Mango", "Banana", "apple", "grape"]
fruits.forEach(function(fruit){
    console.log("I eat " + fruit)
})

let names = ["esther", "john", "jane", "smith"]
names.forEach(function(name){
    console.log("Welcome to TECHCRUSH 2026 " + name)
})

// map method
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map(score => {
    return score + 5
}) // arrow function
console.log(newScores)


let students = ["esther", "john", "doe", "david", "doe"]
let nameTag = students.map(function(tag){
    return "Cohort 6 " + tag
})
console.log(nameTag)

// filter method
let jambScore = [100, 250, 300, 150, 280, 300, 180, 120]
let passed = jambScore.filter((score)=>{   //Arrow function
    return score >= 200
})
console.log(passed)

let ages = [18, 25, 30, 15, 17, 21, 35, 40]
let adults = ages.filter(function(age){
    return age >= 18
})
console.log(adults)

// find method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumber = numbers.filter(function(number){
    return number % 2 === 0
});
console.log(evenNumber);

const studentsNames = ["esther", "john", "doe", "david", "doe"];
let student = studentsNames.find(name => name === "doe"); // Arrow function
console.log(student);

// reduce method
let marks = [90, 80, 70, 60, 50];
let total = marks.reduce(function(sum, mark){
    return sum + mark
}, 0);
console.log(total);

let cartPrices = [100, 200, 300, 400, 500, 600];

let totalPrice = cartPrices.reduce(function(runningPrice, currentPrice){
    return runningPrice + currentPrice
}, 0);
console.log(totalPrice);

// push, pop, shift, unshift methods
let colors = ["red", "blue", "green"]
colors.push("yellow") // adds an element to the end of the array
console.log(colors)

colors.pop() // removes the last element of the array
console.log(colors)

colors.unshift("purple") // adds an element to the beginning of the array
console.log(colors)

colors.shift() // removes the first element of the array
console.log(colors)