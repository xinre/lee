// 这是伪代码记得测试

const testString = 'hhknknjknjjjksssnjnjnerkjksnvkjs'

type resultContent = { index: number | null, count: number }

const disposeString = (allStr: string, str: string): resultContent => {
  if (!str) {
    return
  }
  const result: resultContent = { index: null, count: 0 }
  let dynamicCount: number = 1
  const firstStr: string = str.charAt(1)
  const numberStr: number = str.length

  for (let i: number = 1; i < allStr.length;) {
    if (allStr[i] === firstStr) {
      for (let j: number = 1; j <= numberStr; i++) {
        if (allStr[i + j] === str[j]) {
          dynamicCount += 1
        } else {
          break;
        }

        if (j === numberStr - 1) {
          if (!result.index) {
            result.index = i
          }

          result.count += 1
        }
      }
    }

    i += dynamicCount
    dynamicCount = 1
  }
  


  return result
}

console.log(disposeString(testString, 'sssn'))