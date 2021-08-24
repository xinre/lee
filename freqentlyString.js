/*
最频繁出现字串
输入:
s = "abcde"
minLength = 2
maxLength = 5
maxUnique = 3
输出:
1
解释：
符合条件的子串有 ab, bc, cd, de, abc, bcd, cde 。每一个子串只出现了一次，因此答案是1
*/
var goalString = "abcde";
var allOccurrences = [];
var allTargetOccurrences = [];
var circulationNumber = 0;
var getMaxOccurrences = function (goalString, minLength, maxLength, maxUnique) {
    // for (let len = 0; len < maxLength; len++) {
    for (var i = 0; i < goalString.length; i++) {
        for (var j = 0; j < allTargetOccurrences.length; j++) {
            if (allTargetOccurrences[j][1] === i - 1) {
                allTargetOccurrences.push([allTargetOccurrences[j][0] + goalString[i], i]);
            }
        }
        allTargetOccurrences.push([goalString[i], i]);
    }
    // }
    console.log(allTargetOccurrences, 'allTargetOccurrences');
};
getMaxOccurrences(goalString, 2, 5, 3);
