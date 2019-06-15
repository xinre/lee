/**
 * 下一个排列//大致意思未读懂题意
 */
var tetsnum = [1, 8, 6, 3, 2];
function arrangenum(rednum) {
    var juagedescen = false;
    for (var i = 1; i < rednum.length; i++) {
        if (rednum[i] < rednum[i + 1]) {
            juagedescen = true;
        }
    }
    if (juagedescen) {
        var nownum = 0;
        for (var j = 1; j < rednum.length; j++) {
            for (var k = j; k < rednum.length; k++) {
                if (rednum[k] > rednum[j]) {
                    nownum = rednum[j];
                    rednum[j] = rednum[k];
                    rednum[k] = nownum;
                }
            }
        }
    }
    else {
        var nownum = 0;
        for (var j = 0; j < rednum.length; j++) {
            for (var k = j; k < rednum.length; k++) {
                if (rednum[k] < rednum[j]) {
                    nownum = rednum[j];
                    rednum[j] = rednum[k];
                    rednum[k] = nownum;
                }
            }
        }
    }
    return rednum;
}
console.log(arrangenum(tetsnum));
