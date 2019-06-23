var testarr = [1];
var searchrotatarr = function (testarr, targetnum) {
    if (testarr.length == 0) {
        return -1;
    }
    if (targetnum > testarr[testarr.length - 1]) {
        for (var i = 0; i <= testarr.length - 1; i++) {
            if (targetnum == testarr[i]) {
                return i;
            }
            else {
                if (testarr[i] > targetnum) {
                    return -1;
                }
                else if (testarr[i] < testarr[testarr.length - 1]) {
                    return -1;
                }
                else if (i == testarr.length - 1) {
                    return -1;
                }
            }
        }
    }
    else {
        for (var i = testarr.length - 1; i >= 0; i--) {
            if (targetnum == testarr[i]) {
                return i;
            }
            else {
                if (testarr[i] < targetnum) {
                    return -1;
                }
                else if (testarr[i] > testarr[testarr.length - 1]) {
                    return -1;
                }
                else if (i == 0) {
                    return -1;
                }
            }
        }
    }
};
console.log(searchrotatarr(testarr, 2));
