var testarr = [4, 5, 6, 7, 0, 1, 2];
var searchrotatarr = function (testarr, targetnum) {
    if (targetnum > testarr[testarr.length - 1]) {
        for (var i = 0; i < testarr.length - 1; i++) {
            console.log('大', i);
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
            }
        }
    }
    else {
        for (var i = testarr.length - 1; i > 0; i--) {
            console.log('小', i);
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
            }
        }
    }
};
console.log(searchrotatarr(testarr, 4));
