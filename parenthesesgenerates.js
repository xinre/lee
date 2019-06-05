/**
 * 括号生成 未完
 */
var qeuqarr = function (arr, arr1) {
    var juage = true;
    if (arr.length != arr1.length) {
        return false;
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != arr1[i]) {
                juage = false;
            }
        }
        return juage;
    }
};
var recursivestr = function (sumstrarr, nowarr, valuearr, count, num) {
    for (var i = 0; i < valuearr.length; i++) {
        if (count == 0) {
            nowarr = [];
        }
        if (count >= num * 2) {
            var renum = nowarr.slice(0, num * 2);
            var juage = true;
            for (var f = 0; f < sumstrarr.length; f++) {
                if (qeuqarr(renum, sumstrarr[f])) {
                    juage = false;
                }
            }
            if (juage) {
                sumstrarr.push(renum);
            }
        }
        else {
            if (i != 0) {
                nowarr.pop();
                if (nowarr.length > count) {
                    nowarr = nowarr.slice(0, count);
                }
                nowarr.push(String(valuearr[i]));
            }
            else {
                if (nowarr.length > count) {
                    nowarr = nowarr.slice(0, count);
                }
                nowarr.push(String(valuearr[i]));
            }
            recursivestr(sumstrarr, nowarr, valuearr, count + 1, num);
        }
    }
};
var parenthesegen = function (num) {
    var rearr = [];
    var nowarr = [];
    var sumstrarr = [];
    var count = 0;
    var valuearr = [-1, 1];
    recursivestr(sumstrarr, nowarr, valuearr, count, num);
    for (var _i = 0, sumstrarr_1 = sumstrarr; _i < sumstrarr_1.length; _i++) {
        var item = sumstrarr_1[_i];
        var topval = 0;
        var botval = 0;
        var nowstr = '';
        for (var items = 0; items < item.length; items++) {
            if (Number(item[items]) == 1) {
                nowstr = nowstr + ')';
            }
            else {
                nowstr = nowstr + '(';
            }
            if (items < num) {
                topval = topval + Number(item[items]);
            }
            else {
                botval = botval + Number(item[items]);
            }
        }
        if (topval + botval == 0 && topval < 0) {
            if (item[0] != '1' && item[item.length - 1] != '-1') {
                rearr.push(nowstr);
            }
        }
    }
    return rearr;
};
console.log(parenthesegen(4));
