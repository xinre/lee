var str = 'dfjknvnfhsvshhfhhdskhsdhhhh';
var dealSting = function (str) {
    var resultString = '';
    var wordTable = {};
    var maxNumber = 0;
    for (var i = 0; i < str.length; i++) {
        if (wordTable[str.charAt(i)] || wordTable[str.charAt(i)] === 0) {
            wordTable[str.charAt(i)] = wordTable[str.charAt(i)] + 1;
        }
        else {
            wordTable[str.charAt(i)] = 0;
        }
    }
    for (var _i = 0, _a = Object.keys(wordTable); _i < _a.length; _i++) {
        var i = _a[_i];
        if (wordTable[i] > maxNumber) {
            resultString = i;
            maxNumber = wordTable[i];
        }
    }
    return resultString;
};
console.log(dealSting(str));
