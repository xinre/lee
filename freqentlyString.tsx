/*
最频繁出现字串
输入: 
s = "abcde"
minLength = 2
maxLength = 5
maxUnique = 3
输出: 
1
解释：
符合条件的子串有 ab, bc, cd, de, abc, bcd, cde 。每一个子串只出现了一次，因此答案是1
*/
const goalString = "abcdrfabhg"
const allOccurrences: string[][] = []
let circulationNumber = 0

const getMaxOccurrences: (
  goalString: string, 
  minLength: number, 
  maxLength: number, 
  maxUnique: number, 
  circulationNumber: number
  ) => void = (
    goalString, 
    minLength, 
    maxLength, 
    maxUnique, 
    circulationNumber
  ) => {
  for (let i = 0; i < goalString.length; i++) {
    if (!allOccurrences[circulationNumber]) {
      allOccurrences[circulationNumber] = [] as string[]
    }
    allOccurrences[circulationNumber].push(goalString.charAt(i))

    for (let j = 0; j < i; j++) {
      if () {
        allOccurrences[circulationNumber][j] = allOccurrences[circulationNumber][j] + goalString.charAt(j)
      }
    }
  }}
