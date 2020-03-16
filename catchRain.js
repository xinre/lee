/**
 * 接雨水
 */
var rainArray = [4, 2, 3];
var processFunction = function (goalArray) {
    var goalNumber = 0;
    var activeNumber = 0;
    var minNumber = null;
    for (var i = 0; i < goalArray.length; i++) {
        if (goalArray[i] === 0) {
            continue;
        }
        for (var h = i + 1; h < goalArray.length; h++) {
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
    return goalNumber;
};
console.log(processFunction(rainArray));
