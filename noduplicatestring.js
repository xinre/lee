var teststring = "pwwkew";
var dealstring = function (str) {
    var resultStr = "";
    var momentStr = "";
    for (var i = 0; i < str.length; i++) {
        var juageWhile = true;
        var whileCount = i;
        momentStr = momentStr + str.charAt(i);
        while (juageWhile) {
            whileCount++;
            if (whileCount < str.length) {
                var juageRepeat = false;
                for (var j = 0; j < momentStr.length; j++) {
                    if (momentStr.charAt(j) == str.charAt(whileCount)) {
                        juageWhile = false;
                        juageRepeat = true;
                        break;
                    }
                }
                if (juageRepeat == false) {
                    momentStr = momentStr + str.charAt(whileCount);
                }
            }
            else {
                juageWhile = false;
            }
        }
        if (resultStr.length < momentStr.length) {
            resultStr = momentStr;
        }
        momentStr = "";
    }
    return resultStr;
};
console.log(dealstring(teststring));
