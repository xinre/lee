// 括号生成
const generateParenthesis = (num: number) => {
  let res: string[] = [];
  const dfs = (path: string, left: number, right: number) => {
    if (left > num || right > left ) return

    if (left + right === 2 * num) {
      res.push(path)
      return 
    }

    dfs(path + '(', left + 1, right)
    dfs(path + ')', left, right + 1)
  }

  return res
}

console.log(generateParenthesis(3))