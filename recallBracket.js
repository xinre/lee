// 括号生成
var generateParenthesis = function (num) {
    var res = [];
    var dfs = function (path, left, right) {
        if (left > num || right > left)
            return;
        if (left + right === 2 * num) {
            res.push(path);
            return;
        }
        dfs(path + '(', left + 1, right);
        dfs(path + ')', left, right + 1);
    };
    return res;
};
console.log(generateParenthesis(3));
