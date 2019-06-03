/**
 * 四数之和
 */
var testNsum = [1, 0, -1, 0, -2, 2];
var qeuqarr = function (arr1, arr2) {
    var juagearr2 = [];
    var juagearr = [];
    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (juagearr.indexOf(j) == -1) {
                    if (juagearr2.indexOf(i) == -1) {
                        if (arr1[i] == arr2[j]) {
                            juagearr.push(j);
                            juagearr2.push(i);
                        }
                    }
                }
            }
        }
        if (arr1.length == juagearr.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
var sumfoursum = function (arr, target) {
    var resultArr = [];
    if (arr.length < 4) {
        console.log('请输入长度大于等于4的数组');
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (j != i) {
                for (var k = 0; k < arr.length; k++) {
                    if (k != j && k != i) {
                        for (var l = 0; l < arr.length; l++) {
                            if (l != i && l != j && l != k) {
                                if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
                                    if (resultArr.length == 0) {
                                        resultArr.push([arr[i], arr[j], arr[k], arr[l]]);
                                    }
                                    else {
                                        var juage = true;
                                        for (var _i = 0, resultArr_1 = resultArr; _i < resultArr_1.length; _i++) {
                                            var p = resultArr_1[_i];
                                            if (qeuqarr(p, [arr[i], arr[j], arr[k], arr[l]]) == false) {
                                                juage = false;
                                            }
                                            else {
                                                juage = true;
                                                break;
                                            }
                                        }
                                        if (juage == false) {
                                            resultArr.push([arr[i], arr[j], arr[k], arr[l]]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return resultArr;
};
console.log(sumfoursum(testNsum, 0));
