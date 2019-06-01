/**
 * 最接近三数之和
 */
var testarr = [1, 1, 1, 0];
var dealwithfun = function (arr, target) {
    var reresult = null;
    var resum = null;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                for (var z = 0; z < arr.length; z++) {
                    if (z != i && z != j) {
                        if (reresult != null) {
                            if (reresult > Math.abs(target - (arr[i] + arr[j] + arr[z]))) {
                                reresult = Math.abs(target - (arr[i] + arr[j] + arr[z]));
                                resum = arr[i] + arr[j] + arr[z];
                            }
                        }
                        else {
                            reresult = Math.abs(target - (arr[i] + arr[j] + arr[z]));
                            resum = arr[i] + arr[j] + arr[z];
                        }
                    }
                }
            }
        }
    }
    return resum;
};
console.log(dealwithfun(testarr, -100));
