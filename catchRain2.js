/**
 * 接雨水另外
 */
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var processFunction = function (height) {
    var maxNumber = 0;
    var maxNumberIndex = 0;
    var activeNumber = 0;
    var goalNumber = 0;
    for (var _i = 0, height_1 = height; _i < height_1.length; _i++) {
        var item = height_1[_i];
        if (item > maxNumber) {
            maxNumber = item;
        }
    }
    maxNumberIndex = height.indexOf(maxNumber);
    for (var i = 0; i < maxNumberIndex; i++) {
        if (height[i] === 0) {
            continue;
        }
        for (var h = i + 1; h < maxNumberIndex; h++) {
            if (height[h] < height[i] && h !== maxNumberIndex) {
                activeNumber += height[i] - height[h];
                if (h === maxNumberIndex - 1) {
                    i = maxNumberIndex;
                }
            }
            else {
                i = h - 1;
                break;
            }
        }
        goalNumber += activeNumber;
        activeNumber = 0;
    }
    for (var i = height.length - 1; i > maxNumberIndex; i--) {
        if (height[i] === 0) {
            continue;
        }
        for (var h = i - 1; h > maxNumberIndex; h--) {
            if (height[h] < height[i] && h !== maxNumberIndex) {
                activeNumber += height[i] - height[h];
                if (h === maxNumberIndex + 1) {
                    i = maxNumberIndex;
                }
            }
            else {
                i = h + 1;
                break;
            }
        }
        goalNumber += activeNumber;
        activeNumber = 0;
    }
    return goalNumber;
};
console.log(processFunction(height));
