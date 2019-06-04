/**
 * 括号生成 未完
 */
var qeuqarr = function (arr1, arr2) {
    var juagearr2 = [];
    var juagearr = [];
    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (juagearr.indexOf(j) == -1) {
                    if (juagearr2.indexOf(i) == -1) {
                        if (arr1[i] == arr2[j]) {
                            juagearr.push(j);
                            juagearr2.push(i);
                        }
                    }
                }
            }
        }
        if (arr1.length == juagearr.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
var recursivestr = function (sumstrarr, nowarr, valuearr, count, num) {
    for (var i = 0; i < valuearr.length; i++) {
        if (count == 0) {
            nowarr = [];
        }
        if (count >= num * 2) {
            var renum = nowarr.slice(0, num * 2);
            // let juage:boolean = true;
            // for(let f:number=0;f<sumstrarr.length;f++){
            //     if(qeuqarr(renum,sumstrarr[f])){
            //         juage=false;
            //     }
            // }
            // if(juage){
            sumstrarr.push(renum);
            // }
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
    console.log(sumstrarr);
    return rearr;
};
parenthesegen(2);
