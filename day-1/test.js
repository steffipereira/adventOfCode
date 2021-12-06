const file = require('fs').promises

const parseLines = async() => {
  const data = await file.readFile('input', { 'encoding': 'utf-8' })
  return data.split('\n')
}

const solveFirst = async() => {
  const lines = await parseLines()
  const filterItem = lines.map(num => Number(num)).filter((_, index, arr) => arr[index] > arr[index-1]).length
  console.log(filterItem)
  //const filterNumbers = lin
}

const getTotal = (length, arr, index) => {
  let total = 0
  for (let i = 0; i < length; i++) {
    total+= arr[index+i]
  }
  return total
}
const solveSecond = async() => {
  const lines = await parseLines()
  const filterItem = lines.map(num => Number(num)).filter((_, index, arr) => getTotal(3, arr, index) > getTotal(3, arr, index-1)).length
  console.log(filterItem)
}

//solveFirst()
solveSecond()
