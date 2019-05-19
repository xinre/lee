var testArr = [-1, 3, 2, 0, 2, 3];
var solveFun = function (testArr) {
    var x, y, z, count = 0;
    var lastArr = [];
    for (var i = 0; i < testArr.length; i++) {
        x = testArr[i];
        for (var k = i + 1; k < testArr.length; k++) {
            if (x < testArr[k]) {
                y = testArr[k];
            }
            for (var l = k + 1; l < testArr.length; l++) {
                if (testArr[l] > x && testArr[l] < y) {
                    z = testArr[l];
                    count += 1;
                    lastArr.push({
                        x: x,
                        y: y,
                        z: z
                    });
                    z = 0;
                }
            }
            y = 0;
        }
        x = 0;
    }
    return {
        count: count,
        lastArr: lastArr
    };
};
console.log(solveFun(testArr));
