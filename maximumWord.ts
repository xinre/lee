const str: string = 'dfjknvnfhsvshhfhhdskhsdhhhh'

const dealSting = (str: string): string => {
  let resultString = ''
  let wordTable: { [index: string]: number } = {}
  let maxNumber: number = 0

  for(let i = 0; i < str.length; i++) {
    if (wordTable[str.charAt(i)] || wordTable[str.charAt(i)] === 0) {
      wordTable[str.charAt(i)] = wordTable[str.charAt(i)] + 1 
    } else {
      wordTable[str.charAt(i)] = 0
    }
  }

  for (let i of Object.keys(wordTable)) {
    if (wordTable[i] > maxNumber) {
      resultString = i
      maxNumber = wordTable[i]
    }
  }
  
  return resultString
}

console.log(dealSting(str))