// 地下城游戏
const initArray: number[][] = [[1,-3,3],[0,-2,0],[-3,-3,-3]]

const calculateMinimumHP = (dungeon: number[][]): number => {
  let returnNumber:number = 0
  let x:number = 0
  let y:number = 0
  let minNumber = 0

  for (let i: number = 0; i < dungeon.length; i++) {
    x = i
    returnNumber = returnNumber + dungeon[x][y]
    if (returnNumber < minNumber) {
      minNumber = returnNumber
    }
    if (y !== dungeon[x].length - 1) {
      for (let j: number = y; j < dungeon[x].length; j++ ) {
        if (y === dungeon[x].length - 1) {
          break
        }
        y = j
        if (x === dungeon.length - 1 || dungeon[x][y + 1] > dungeon[x + 1][y]) {
          y++
          returnNumber = returnNumber + dungeon[x][y]
          if (returnNumber < minNumber) {
            minNumber = returnNumber
          }
        } else {
          break
        }
      }
    }
  }

  if (minNumber >= 0) {
    returnNumber = 1
  } else {
    returnNumber = Math.abs(minNumber) + 1
  }

  return returnNumber
}

console.log(calculateMinimumHP(initArray))