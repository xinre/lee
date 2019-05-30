/**
 * 三数之和
 */
var testarr = [-1, 0, 1, 2, -1, -4];
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
var threesum = function (arr) {
    var rearr = [];
    var unhave = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                for (var z = 0; z < arr.length; z++) {
                    if (z !== j && z != i) {
                        if (arr[i] + arr[j] + arr[z] == 0) {
                            // console.log(arr[i],arr[j],arr[z]);
                            if (rearr.length == 0) {
                                rearr.push([arr[i], arr[j], arr[z]]);
                            }
                            else {
                                for (var _i = 0, rearr_1 = rearr; _i < rearr_1.length; _i++) {
                                    var item = rearr_1[_i];
                                    if (qeuqarr(item, [arr[i], arr[j], arr[z]]) == true) {
                                        unhave = true;
                                        break;
                                    }
                                }
                                if (unhave == false) {
                                    rearr.push([arr[i], arr[j], arr[z]]);
                                }
                                unhave = false;
                            }
                        }
                    }
                }
            }
        }
    }
    return rearr;
};
console.log(threesum(testarr));
