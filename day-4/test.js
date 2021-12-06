const fs = require('fs').promises

const parseFile = async () => {
  const data = await fs.readFile('input', { 'encoding': 'utf-8' })
  const lines = data.split('\n')
  return lines
}

const solve = async () => {
  const lines = await parseFile()
  const allLines = lines.map((line) => line);
  console.log(allLines)
}

solve()
