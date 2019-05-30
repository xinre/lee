/**
 * 整数转罗马数字
 */
var testnum = 666;
var turnnumroman = function (num) {
    var restring = "";
    var romanobject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var i;
    for (i in romanobject) {
        if (num < romanobject[i]) {
            switch (num) {
                // case 
            }
        }
        console.log(i);
    }
    return restring;
};
console.log(turnnumroman(testnum));
