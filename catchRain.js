/**
 * 接雨水
 */
var rainArray = [4, 9, 4, 5, 3, 2];
var processFunction = function (goalArray) {
    var goalNumber = 0;
    var activeNumber = 0;
    var minNumber = null;
    //后加参数
    var reserveMax = 0;
    var addNumber = 0;
    var count = 0;
    for (var i = 0; i < goalArray.length; i++) {
        if (goalArray[i] === 0) {
            continue;
        }
        for (var h = i + 1; h < goalArray.length; h++) {
            console.log(goalArray[i]);
            if (!minNumber) {
                minNumber = goalArray[h];
            }
            else {
                minNumber = goalArray[h] < minNumber ? goalArray[h] : minNumber;
            }
            if (h === goalArray.length - 1 && goalArray[h] < goalArray[i] && goalArray[h] <= minNumber) {
                activeNumber = 0;
                break;
            }
            console.log(goalArray[h], goalArray[i]);
            if (goalArray[h] < goalArray[i] && h !== goalArray.length - 1) {
                activeNumber += goalArray[i] - goalArray[h];
            }
            else if (h === goalArray.length - 1 && goalArray[h] > minNumber && goalArray[h] < goalArray[i]) {
                activeNumber = 0;
                activeNumber += goalArray[h] - minNumber;
                i = h - 1;
                break;
            }
            else {
                i = h - 1;
                break;
            }
        }
        minNumber = null;
        goalNumber += activeNumber;
        activeNumber = 0;
    }
    for (var k = goalArray.length - 2; k >= 0; k--) {
        if (goalArray[k] > goalArray[goalArray.length - 1]) {
            break;
        }
        reserveMax = reserveMax > goalArray[k] ? reserveMax : goalArray[k];
        count++;
    }
    if (count === goalArray.length - 1 || count < 1) {
        addNumber = 0;
    }
    else {
        addNumber = (count - 1) * (goalArray[goalArray.length - 1] - reserveMax);
    }
    goalNumber += addNumber;
    return goalNumber;
};
console.log(processFunction(rainArray));
