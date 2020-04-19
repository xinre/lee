/**
 * 接雨水另外
 */

const height: Array<number> = [0,1,0,2,1,0,1,3,2,1,2,1]

const processFunction = (height: Array<number>): number => {
  let maxNumber:number = 0
  let maxNumberIndex:number = 0
  let activeNumber: number = 0
  let goalNumber: number = 0

  for(let item of height) {
    if (item > maxNumber) {
      maxNumber = item
    }
  }

  maxNumberIndex = height.indexOf(maxNumber)

  for(let i: number = 0; i < maxNumberIndex; i++) {
    if (height[i] === 0) {
      continue
    }

    for(let h: number = i + 1; h < maxNumberIndex; h++) {
      if (height[h] < height[i] && h !== maxNumberIndex) {
        activeNumber += height[i] - height[h]

        if (h === maxNumberIndex - 1) {
          i = maxNumberIndex
        }
      } else {
        i = h - 1
        break
      }
    }
    goalNumber += activeNumber
    activeNumber = 0
  }

  for(let i: number = height.length - 1; i > maxNumberIndex; i--) {
    if (height[i] === 0) {
      continue
    }

    for(let h: number = i - 1; h > maxNumberIndex; h--) {

      if (height[h] < height[i] && h !== maxNumberIndex) {
        activeNumber += height[i] - height[h]

        if (h === maxNumberIndex + 1) {
          i = maxNumberIndex
        }
      } else {
        i = h + 1
        break
      }
    }
    goalNumber += activeNumber
    activeNumber = 0
  }

  return goalNumber;
}

console.log(processFunction(height))
