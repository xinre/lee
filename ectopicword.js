/**
 * 异位词分组
 */
var testarr = ["eat", "tea", "tan", "ate", "nat", "bat"];
var juagearr = function (str1, str2) {
    var juagebool = true;
    if (str1.length != str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1.charAt(i)) === -1) {
            juagebool = false;
            break;
        }
    }
    return juagebool;
};
var groupword = function (arr) {
    var returnarr = [];
    var activearr = [];
    var momentjuage = true;
    for (var i = 0; i < arr.length; i++) {
        if (activearr.length == 0) {
            activearr.push(arr[i]);
            if (Array.isArray(returnarr[activearr.length - 1])) {
                returnarr[activearr.length - 1].push(arr[i]);
            }
            else {
                returnarr[activearr.length - 1] = [];
                returnarr[activearr.length - 1].push(arr[i]);
            }
        }
        else {
            for (var j = 0; j < activearr.length; j++) {
                if (juagearr(arr[i], activearr[j])) {
                    returnarr[j].push(arr[i]);
                    momentjuage = false;
                    break;
                }
            }
            if (momentjuage) {
                activearr.push(arr[i]);
                if (Array.isArray(returnarr[activearr.length - 1])) {
                    returnarr[activearr.length - 1].push(arr[i]);
                }
                else {
                    returnarr[activearr.length - 1] = [];
                    returnarr[activearr.length - 1].push(arr[i]);
                }
            }
            momentjuage = true;
        }
    }
    return returnarr;
};
console.log(groupword(testarr));
