var arrUse = [[1, 2, 3], 6, 8, [9, 7, 6, 0], [8, 9, [6, 8]]];
var rollArray = function (arr) {
    var returnArr = [];
    var dynamicArr = [];
    var dealItem = function (item) {
        if (Array.isArray(item)) {
            dynamicArr.push(item);
        }
        else {
            returnArr.push(item);
        }
    };
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        dealItem(i);
    }
    while (dynamicArr.length > 0) {
        var len = dynamicArr.length - 1;
        console.log(len, '---');
        for (var _a = 0, _b = dynamicArr[len]; _a < _b.length; _a++) {
            var j = _b[_a];
            dealItem(j);
        }
        console.log(len, '====');
        dynamicArr.splice(len, 1);
    }
    return returnArr;
};
console.log(rollArray(arrUse));
