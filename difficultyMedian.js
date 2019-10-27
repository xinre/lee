/**
 * 寻找两个有序数组的中位数 困难
 */
var test1 = [1, 4, 6];
var test2 = [3, 5, 7];
var dealArr = function (arr1, arr2) {
    var reNum = 0;
    var mixlen = arr1.length + arr2.length;
    var cenNum = [];
    var mixArr = arr1.length > arr2.length || arr1.length == arr2.length ? arr1 : arr2;
    var minArr = arr1.length > arr2.length || arr1.length == arr2.length ? arr2 : arr1;
    var dynamicNumMin = 0;
    var dynamicNum = [];
    if (mixlen % 2 == 0) {
        cenNum[0] = mixlen / 2;
        cenNum[1] = mixlen / 2 + 1;
    }
    else {
        cenNum[0] = Math.ceil(mixlen / 2);
    }
    for (var i = 0; i < mixArr.length;) {
        if (mixArr[i] < minArr[dynamicNumMin]) {
            dynamicNum.push(mixArr[i]);
            i++;
        }
        else {
            dynamicNum.push(minArr[dynamicNumMin]);
            dynamicNumMin++;
        }
        if (cenNum.length === 2) {
            if (dynamicNum.length == cenNum[1]) {
                console.log(dynamicNum, cenNum);
                reNum = (dynamicNum[dynamicNum.length - 1] + dynamicNum[dynamicNum.length - 2]) / 2;
                break;
            }
        }
        else {
            if (dynamicNum.length == cenNum[0]) {
                console.log(dynamicNum, cenNum);
                reNum = dynamicNum[dynamicNum.length - 1];
                break;
            }
        }
    }
    return reNum;
};
console.log(dealArr(test1, test2));
