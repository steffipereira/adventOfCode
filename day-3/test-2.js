const fs = require('fs').promises

const parseFile = async () => {
  const data = await fs.readFile('input', { 'encoding': 'utf-8' })
  const lines = data.split('\n')
  return lines
}

const solve = async () => {
  const lines = await parseFile()
  const allLines = lines.map(line => line)
  const length = allLines[0].length

  function getCount(lines) {
    const zeros = Array(length).fill(0)
    const ones = Array(length).fill(0)

    for (const num of lines) {
      num.split('').forEach((n, index) => {
        if (n === '0') {
          zeros[index]++
        } else {
          ones[index]++
        }
      })
    }
    return {zeros, ones}
  }

  function getOxygenGeneratorBits(lines, index = 0) {
    const { zeros, ones } = getCount(lines)
    let mostCommonBit = '1'
    if (zeros[index] > ones[index]) {
      mostCommonBit = '0'
    }
    const filteredBits = lines.filter(line => line[index] === mostCommonBit)
    if (filteredBits.length === 1) {
      return filteredBits[0]
    }
    return getOxygenGeneratorBits(filteredBits, index+1)
  }

  function getScrubberGeneratorBits(lines, index = 0) {
    const { zeros, ones } = getCount(lines)
    let leastCommonBit = '0'
    if (zeros[index] > ones[index]) {
      leastCommonBit = '1'
    }
    const filteredBits = lines.filter(line => line[index] === leastCommonBit)
    if (filteredBits.length === 1) {
      return filteredBits[0]
    }
    return getScrubberGeneratorBits(filteredBits, index+1)
  }

  const oxygenGenerator = getOxygenGeneratorBits(allLines) // 10111
  const scrubberGenerator = getScrubberGeneratorBits(allLines) // 01010

  //console.log(oxygenGenerator, scrubberGenerator);
  console.log(parseInt(oxygenGenerator, 2) * parseInt(scrubberGenerator, 2))
}

solve()
