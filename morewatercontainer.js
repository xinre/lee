//盛水最多容器
var testArr = [1, 8, 6, 2, 5, 4, 8, 3, 7, 8];
var rewaterFun = function (arr) {
    var reNum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                if (reNum < arr[j] * (j - i)) {
                    reNum = arr[j] * (j - i);
                }
            }
            else {
                if (reNum < arr[i] * (j - i)) {
                    reNum = arr[i] * (j - i);
                }
            }
        }
    }
    return reNum;
};
console.log(rewaterFun(testArr));
