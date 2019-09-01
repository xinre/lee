/**
 * 合并区间
 */
var testArr = [[1, 4], [0, 2], [3, 5]];
var mergeinFun = function (arr) {
    for (var i = 0; i < arr.length;) {
        var now = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i][0] >= arr[j][0] && arr[i][0] <= arr[j][1] && arr[i][1] >= arr[j][1]) {
                arr[i][0] = arr[j][0];
                arr.splice(j, 1);
                now = 0;
            }
            else if (arr[i][0] <= arr[j][0] && arr[j][0] <= arr[i][1] && arr[j][1] >= arr[i][1]) {
                arr[i][1] = arr[j][1];
                arr.splice(j, 1);
                now = 0;
            }
            else if (arr[i][0] <= arr[j][0] && arr[j][1] <= arr[i][1]) {
                arr.splice(j, 1);
                now = 0;
            }
            else if (arr[i][0] > arr[j][0] && arr[j][1] > arr[i][1]) {
                arr[i][0] = arr[j][0];
                arr[i][1] = arr[j][1];
                arr.splice(j, 1);
                now = 0;
            }
        }
        i = i + now;
    }
    return arr;
};
console.log(mergeinFun(testArr));
