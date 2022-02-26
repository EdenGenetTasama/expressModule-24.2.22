// const express = require('express');
// const app = express();

const app = require('express')()
const port = 8000

app.get('/', (request, respond) => {
  respond.sendFile(__dirname , './index.html')
})

app.get('/test', (request, respond) => {
  respond.send('Success')
})

app.get('/names', (request, respond) => {
  const arrayOfNames = ['a', 'b', 'c', 'd', 'c']
  respond.send(arrayOfNames.toString())
})

app.get('/numbers', (request, respond) => {
  const arrayOfNumbers = []
  for (let i = 0; i < 9; i++) {
    const numberRandom = Math.floor(Math.random() * 9)
    arrayOfNumbers.push(numberRandom)
  }
  respond.send(arrayOfNumbers.toString())
})

app.get('/rndNumbers', (request, respond) => {
  const ArrayOfNumbersUntil100 = []
  for (let i = 0; ArrayOfNumbersUntil100.length < 100; i++) {
    const randomNumbers = Math.floor(Math.random() * 101)
    ArrayOfNumbersUntil100.push(randomNumbers)
  }
  const higherNumber = Math.max(...ArrayOfNumbersUntil100)
  respond.send(`${higherNumber}`)
})

app.get('/numbers/:index', (request, respond) => {
  const arrayOfNumbers = []
  const userIndex = request.params.index
  for (let i = 0; arrayOfNumbers.length < 9; i++) {
    const randomNumbers = Math.floor(Math.random() * 101)
    arrayOfNumbers.push(randomNumbers)
  }
  respond.send(
    `index number ${userIndex}, the number in that place ${arrayOfNumbers[userIndex]}`
  )
})

app.get('/isNumbers/:num', (request, respond) => {
  const randomArray = []
  const userNumber = request.params.num
  for (let i = 0; randomArray < 100; i++) {
    const randomNumbers = Math.floor(Math.random() * 101)
    randomArray.push(randomNumbers)
    if (userNumber == randomArray[i]) {
      respond.send(`number user enter is: ${userNumber} on the array`)
    }
    respond.send(`Not found ${randomArray[i]} `)
  }
})

app.get('/bigNumber/:num ', (request, respond) => {
  const userNumber = request.params['num ']
  const randomNumber = Math.floor(Math.random() * 1001)
  if (randomNumber > userNumber) {
    respond.send(`${randomNumber} random is max`)
  }
  respond.send(`${userNumber} user num is max`)
})

app.get('/smallNumber/:num' , (request , respond)=>{
  const randomNumber = Math.floor(Math.random() * 1001);
  let userNum = request.params.num;
  if(randomNumber > userNum){
    respond.send(`${randomNumber} random is max`);
  }
  respond.send(`${userNum} user num is max`);
})



app.listen(port)
