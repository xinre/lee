/**
 * 合并区间
 */
var testArr = [[1, 4], [4, 5]];
var mergeinFun = function (arr) {
    var resultArr = [];
    var reservearr = [];
    for (var i = 0; i < arr.length;) {
        var now = 1;
        if (reservearr.indexOf(i) === -1) {
            for (var j = i + 1; j < arr.length; j++) {
                if (reservearr.indexOf(j) === -1) {
                    if (arr[i][0] >= arr[j][0] && arr[i][0] <= arr[j][1] && arr[i][1] >= arr[j][1]) {
                        arr[i][0] = arr[j][0];
                        reservearr.push(j);
                        now = 0;
                    }
                    else if (arr[i][0] <= arr[j][0] && arr[j][0] <= arr[i][1] && arr[j][1] >= arr[i][1]) {
                        arr[i][1] = arr[j][1];
                        reservearr.push(j);
                        now = 0;
                    }
                    else if (arr[i][0] <= arr[j][0] && arr[j][1] <= arr[i][1]) {
                        reservearr.push(j);
                        now = 0;
                    }
                    else if (arr[i][0] > arr[j][0] && arr[j][1] > arr[i][1]) {
                        arr[i][0] = arr[j][0];
                        arr[i][1] = arr[j][1];
                        reservearr.push(j);
                        now = 0;
                    }
                }
            }
            var juage = true;
            for (var l = 0; l < resultArr.length; l++) {
                if (resultArr[l][0] === arr[i][0] && resultArr[l][1] === arr[i][1]) {
                    juage = false;
                }
            }
            if (juage) {
                resultArr.push(arr[i]);
            }
        }
        i = i + now;
    }
    return resultArr;
};
console.log(mergeinFun(testArr));
