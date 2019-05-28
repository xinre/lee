var teststr = "LEETCODEISHIRING";
var zarangFun = function (teststr, row) {
    var resultstr = "";
    for (var j = row - 1; j >= 0; j--) {
        var juageeven = true;
        for (var i = row - 1 - j; i <= teststr.length;) {
            if (i <= teststr.length) {
                resultstr = resultstr.concat(teststr.charAt(i));
                if (j == row - 1) {
                    i += 2 * j;
                }
                else if (j == 0) {
                    i += 2 * (row - 1 - j);
                }
                else {
                    if (juageeven) {
                        i += 2 * j;
                    }
                    else {
                        i += 2 * (row - 1 - j);
                    }
                    juageeven = !juageeven;
                }
            }
        }
    }
    return resultstr;
};
console.log(zarangFun(teststr, 4));
