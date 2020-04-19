/**
 * 接雨水   这个可能错误暂时保留切换下一个
 */

 const rainArray: Array<number> = [4,9,4,5,3,2]

 const processFunction = (goalArray: Array<number>): number => {
   let goalNumber: number = 0
   let activeNumber: number = 0
   let minNumber: number | null = null

   //后加参数
   let reserveMax = 0;
   let addNumber = 0;
   let count = 0;

   for(let i: number = 0; i < goalArray.length; i++) {
    if (goalArray[i] === 0) {
      continue
    }
    for(let h: number = i + 1; h < goalArray.length; h++) {
      if (!minNumber) {
        minNumber = goalArray[h]
      } else {
        minNumber = goalArray[h] < minNumber ? goalArray[h] : minNumber
      }

      if (h === goalArray.length - 1 && goalArray[h] < goalArray[i] && goalArray[h] <= minNumber) {
        activeNumber = 0
        break
      }

      if (goalArray[h] < goalArray[i] && h !== goalArray.length - 1) {
        activeNumber += goalArray[i] - goalArray[h]
      } else if (h === goalArray.length - 1 && goalArray[h] > minNumber && goalArray[h] < goalArray[i]) {
        activeNumber = 0
        activeNumber += goalArray[h] - minNumber
        i = h - 1
        break
      } else {
        i = h - 1
        break
      }
    }
    minNumber = null
    goalNumber += activeNumber
    activeNumber = 0
   }

   for (let k:number  = goalArray.length - 2; k >= 0; k--) {
    if (goalArray[k] > goalArray[goalArray.length - 1]) {
      break
    }
    reserveMax = reserveMax > goalArray[k] ? reserveMax : goalArray[k]
    count++
   }

   if (count === goalArray.length - 1 || count < 1) {
    addNumber = 0;
   } else {
    addNumber = (count - 1) * (goalArray[goalArray.length - 1] - reserveMax)
   }

   goalNumber += addNumber

   return goalNumber
 }

 console.log(processFunction(rainArray))
