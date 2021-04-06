// 数组铺平
interface NestedArray<T> extends Array<T | NestedArray<T>> { }
const arrUse: NestedArray<number> = [[1, 2, 3], 6, 8, [9, 7, 6, 0], [8, 9, [6, 8]]]

const rollArray = (arr) => {
  let returnArr = []
  let dynamicArr = []

  const dealItem = (item) => {
    if (Array.isArray(item)) {
      dynamicArr.push(item)
    } else {
      returnArr.push(item)
    }
  }

  for (let i of arr) {
    dealItem(i)
  }

  while (dynamicArr.length > 0) {
    let len = dynamicArr.length - 1
    for (let j of dynamicArr[len]) {
      dealItem(j)
    }
    dynamicArr.splice(len, 1)
  }

  return returnArr
}

console.log(rollArray(arrUse))