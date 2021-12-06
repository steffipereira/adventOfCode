const fs = require('fs').promises

const parseFile = async () => {
  const data = await fs.readFile('input', { 'encoding': 'utf-8' })
  const lines = data.split('\n')
  return lines
}

const solve = async () => {
  const lines = await parseFile()
  const numbers = lines.map((line) => line.trim().split(''));
  const length = numbers[0].length
  const zeros = Array(length).fill(0)
  const ones = Array(length).fill(0)

  for (const num of numbers) {
    num.forEach((n, index) => {
      if (n === '0') {
        zeros[index]++
      } else {
        ones[index]++
      }
    })
  }

  let gammaRate = ''
  for (let i = 0; i < length; i++) {
    if (ones[i] > zeros[i]) {
      gammaRate += '1'
    } else {
      gammaRate += '0'
    }
  }
  const epsilonRate = gammaRate.split('').map(bit => bit === '1' ? '0' : '1').join('')
  const consumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
  console.log(consumption) ;
}

solve()
