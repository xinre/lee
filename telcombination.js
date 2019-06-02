/**
 * 电话号码的字母组合
 */
var recursivefun = function (recurarr, num, value, resultarr) {
    var nowstr = '';
    if (num >= recurarr.length - 1) {
        for (var k = 0; k < value.length; k++) {
            nowstr = nowstr + value[k];
        }
    }
    for (var i = 0; i < recurarr[num].length; i++) {
        if (num >= recurarr.length - 1) {
            resultarr.push(nowstr + recurarr[num][i]);
        }
        else {
            if (i != 0) {
                value.pop();
                value.push(recurarr[num][i]);
                recursivefun(recurarr, num + 1, value, resultarr);
            }
            else {
                value.push(recurarr[num][i]);
                recursivefun(recurarr, num + 1, value, resultarr);
            }
        }
    }
};
var dealletter = function (str) {
    var testkey = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l']
    };
    var oriarr = [];
    var resultarr = [];
    var temporary = [];
    for (var i = 0; i < str.length; i++) {
        oriarr.push(testkey[Number(str.charAt(i))]);
    }
    console.log(oriarr);
    for (var j = 0; j < oriarr[0].length; j++) {
        temporary.push(oriarr[0][j]);
        recursivefun(oriarr, 1, temporary, resultarr);
        temporary = [];
    }
    return resultarr;
};
console.log(dealletter("234"));
