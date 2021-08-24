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
const goalString = "abcde"
const allOccurrences:string[][] = []
const allTargetOccurrences: (string | number)[][] = []
let circulationNumber = 0

const getMaxOccurrences: (
  goalString: string, 
  minLength: number, 
  maxLength: number, 
  maxUnique: number, 
  // circulationNumber: number
  ) => void = (
    goalString, 
    minLength, 
    maxLength, 
    maxUnique, 
    // circulationNumber
  ) => {
  // for (let len = 0; len < maxLength; len++) {
  for (let i = 0; i < goalString.length; i++) {
    for (let j = 0; j < allTargetOccurrences.length; j++) {
      if (allTargetOccurrences[j][1] === i - 1) {
        allTargetOccurrences.push([allTargetOccurrences[j][0] + goalString[i], i])
      }
    }

    allTargetOccurrences.push([goalString[i], i])
  }
  // }
  // 写到这基本就算做出来了，之后测试一下优化一下算法


  console.log(allTargetOccurrences, 'allTargetOccurrences')
}


getMaxOccurrences(goalString, 2, 5, 3)
