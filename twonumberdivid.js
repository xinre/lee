/**
 * 两数相除
 */
var dividendFun = function (dividend, divisor) {
    var renumber = 0;
    var dealdivi = Math.abs(divisor);
    for (var i = 0; i < Math.abs(dividend); i++) {
        if (dealdivi > Math.abs(dividend)) {
            break;
        }
        else if (dealdivi == Math.abs(dividend)) {
            renumber++;
            break;
        }
        else if (Math.abs(divisor) == 1) {
            renumber = Math.abs(dividend);
            break;
        }
        dealdivi = dealdivi + Math.abs(divisor);
        renumber++;
    }
    if (dividend < 0 && divisor < 0) {
        renumber = Math.abs(renumber);
    }
    else if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
        renumber = 0 - renumber;
    }
    if (renumber < Math.pow(-2, 31)) {
        renumber = Math.pow(-2, 31);
    }
    else if (renumber > Math.pow(2, 31) - 1) {
        renumber = Math.pow(2, 31) - 1;
    }
    return renumber;
};
console.log(dividendFun(2147483647, 2));
