const fs = require('fs').promises

const parseFile = async () => {
  const data = await fs.readFile('input', { 'encoding': 'utf-8' })
  const lines = data.split('\n')
  return lines
}

const solveFirst = async() => {
  const arr = await parseFile()
  let horizonal = 0
  let depth = 0
  arr.map(item => {
    const [task, num] = item.split(' ')
    console.log({ task, num })
    if (task === 'forward') {
      horizonal += Number(num)
    } else if (task === 'down') {
      depth += Number(num)
    } else if (task === 'up') {
      depth -= Number(num)
    }
  })
  console.log(horizonal*depth)
  return horizonal*depth
}

//solveFirst()

const solve = async() => {
  const arr = await parseFile()
  let horizonal = 0
  let depth = 0
  let aim = 0
  arr.map(item => {
    const [task, num] = item.split(' ')
    console.log({ task, num })
    if (task === 'forward') {
      if (aim === 0) {
        horizonal += Number(num)
        return
      }
      horizonal += Number(num)
      depth += aim*Number(num)
    } else if (task === 'down') {
      aim += Number(num)
    } else if (task === 'up') {
      aim -= Number(num)
    }
  })
  console.log(horizonal*depth)
  return horizonal*depth
}

solve()
