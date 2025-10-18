const greet = (name, formatter) => formatter(name)
const withEmoji = text => '🌟 ' + text
console.log(greet('Alice', withEmoji))


function calculate(nums, compute) {
  return compute(nums)
}
function sum(elements) {
  return elements.reduce((total, current) => total + current)
}
function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
function sort(elements) {
  return elements.sort((a, b) => a - b)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))


function a() {
  return sum
}
function b() {
  return sum(1, 5)
}
function c(x) {
  return x
}
function sum(n1, n2) {
  return n1 + n2
}

console.log(typeof a())
console.log(typeof b())
console.log(typeof c(sum))
 

let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b)
  }
  return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)
 

function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
console.log(doSomething("World")())


let id = 0
function idGenerator(){
    let returnid = id
    id++
    return returnid
 
}
const idGen = idGenerator()
console.log(idGen())


function outerFunction(m){
    return function(n){
        return m+n
    }
}
const addFive = outerFunction(5)
console.log(addFive(3))//8
 
const addTen = outerFunction(10)
console.log(addTen(2)) //12


// 1. Create an empty array to hold the quotes
const quotes = []
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  return quotes.push(quote)
}
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const word = quotes.findIndex((quote) => quote.id === id);
  if(word !== -1){
    quotes.splice(word,1)
  }else{
    console.log(`id ${id} not found.`);
  }
}
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const word = quotes.findIndex((quote) => quote.id === id)
  if(word !== -1){
    quotes[word] = {...quotes[word],...updatedQuote}
  }else{
    console.log(`id ${id} not found.`);
  }
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" })
addQuote({ id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" })
addQuote({ id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" })
 
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
// TODO: Update 1 quote using updateQuote()
updateQuote(1, { content: 'Stay Hungry, Stay Foolish', author: 'Steve Jobs' })
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())

function processName(name, callback) {
  return callback(name)
}

function toUpperCase(str) {
  return str.toUpperCase()
}

function addGreeting(str) {
  return `Hello, ${str}!`
}

console.log(processName('Panita', toUpperCase))
console.log(processName('Panita', addGreeting))

function counter() {
  let count = 0
  return function() {
    count++
    return count
  }
}

const clickCounter = counter()
console.log(clickCounter()) // 1
console.log(clickCounter()) // 2
console.log(clickCounter()) // 3

const students = []

function addStudent(student) {
  students.push(student)
}

function getTopStudent() {
  return students.reduce((best, current) => 
    current.score > best.score ? current : best
  )
}

function findStudent(name) {
  return students.find(s => s.name === name) || 'Not found'
}

addStudent({ name: 'Ann', score: 80 })
addStudent({ name: 'Bee', score: 90 })
addStudent({ name: 'Cat', score: 75 })

console.log(findStudent('Bee'))
console.log(getTopStudent())




function createStudentManager() {
  const students = []

  function addStudent(student) {
    students.push(student)
  }

  function updateScore(name, callback) {
    const student = students.find(s => s.name === name)
    if (student) {
      callback(student)
    } else {
      console.log(`Student ${name} not found`)
    }
  }

  function deleteStudent(name) {
    const index = students.findIndex(s => s.name === name)
    if (index !== -1) students.splice(index, 1)
  }

  function getAverageScore() {
    const total = students.reduce((sum, { score }) => sum + score, 0)
    return (students.length > 0) ? total / students.length : 0
  }

  function getAllStudents() {
    return students
  }

  return { addStudent, updateScore, deleteStudent, getAverageScore, getAllStudents }
}

const manager = createStudentManager()

manager.addStudent({ name: 'Ann', score: 80 })
manager.addStudent({ name: 'Bee', score: 90 })
manager.addStudent({ name: 'Cat', score: 70 })

manager.updateScore('Cat', student => {
  student.score += 10
})

manager.deleteStudent('Ann')

console.log('รายชื่อนักเรียนทั้งหมด:', manager.getAllStudents())
console.log('คะแนนเฉลี่ย:', manager.getAverageScore())
