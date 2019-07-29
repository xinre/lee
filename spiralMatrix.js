/**
 * 螺旋矩阵
 */
var testArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
var dealFun = function (testArr) {
    var returnArr = [];
    var x = Math.ceil(testArr[0].length / 2);
    var y = Math.ceil(testArr.length / 2);
    //   let circleNum:number=0;
    var num = x > y ? x : y;
    for (var p = 0; p < num; x++, y++, p++) {
        if (p < x) {
            for (var i = p; i < testArr[p].length - 1 - p; i++) {
                returnArr.push(testArr[p][i]);
            }
        }
        if (p < y) {
            for (var j = p; j < testArr.length - 1 - p; j++) {
                var len = testArr[0].length - 1 - p;
                returnArr.push(testArr[j][len]);
            }
        }
        if (p < x) {
            for (var k = testArr[testArr.length - 1 - p].length - 1 - p; k >= 1 + p; k--) {
                returnArr.push(testArr[testArr.length - 1 - p][k]);
            }
        }
        if (p < y) {
            for (var l = testArr.length - 1 - p; l >= 1 + p; l--) {
                returnArr.push(testArr[l][p]);
            }
        }
    }
    return returnArr;
};
console.log(dealFun(testArr));
