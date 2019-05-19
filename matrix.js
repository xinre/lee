var updateMatrix = function (matrix) {
    var i = 0;
    var k = 0;
    var l = 0;
    var p = 0;
    var zeroArr = [];
    var nozeroArr = [];
    var reArr = matrix;
    for (i; i < matrix.length; i++) {
        for (k; k < matrix[i].length; k++) {
            if (matrix[i][k] == 0) {
                zeroArr.push({ y: i, x: k });
                reArr[i][k] = matrix[i][k];
            }
            else {
                nozeroArr.push({ y: i, x: k });
            }
        }
        k = 0;
    }
    for (l; l < nozeroArr.length; l++) {
        for (p; p < zeroArr.length; p++) {
            var nowmax = 1;
            if (Math.abs(nozeroArr[l].x - zeroArr[p].x) == 1 && nozeroArr[l].y == zeroArr[p].y || nozeroArr[l].x == zeroArr[p].x && Math.abs(nozeroArr[l].y - zeroArr[p].y) == 1) {
                reArr[nozeroArr[l].y][nozeroArr[l].x] = 1;
                break;
            }
            else {
                if (Math.abs(nozeroArr[l].x - zeroArr[p].x) > Math.abs(nozeroArr[l].y - zeroArr[p].y)) {
                    nowmax > Math.abs(nozeroArr[l].y - zeroArr[p].y) * 2 + Math.abs(nozeroArr[l].x - zeroArr[p].x) - Math.abs(nozeroArr[l].y - zeroArr[p].y) ? nowmax = Math.abs(nozeroArr[l].y - zeroArr[p].y) * 2 + Math.abs(nozeroArr[l].x - zeroArr[p].x) - Math.abs(nozeroArr[l].y - zeroArr[p].y) : null;
                }
                else if (Math.abs(nozeroArr[l].x - zeroArr[p].x) == Math.abs(nozeroArr[l].y - zeroArr[p].y)) {
                    nowmax = 2;
                }
                else {
                    nowmax > Math.abs(nozeroArr[l].x - zeroArr[p].x) * 2 + Math.abs(nozeroArr[l].y - zeroArr[p].y) - Math.abs(nozeroArr[l].x - zeroArr[p].x) ? nowmax = Math.abs(nozeroArr[l].x - zeroArr[p].x) * 2 + Math.abs(nozeroArr[l].y - zeroArr[p].y) - Math.abs(nozeroArr[l].x - zeroArr[p].x) : null;
                }
                reArr[nozeroArr[l].y][nozeroArr[l].x] = nowmax;
            }
        }
        p = 0;
    }
    return reArr;
};
var oriArrs = [[0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 1, 0], [1, 0, 1, 1, 1], [1, 0, 0, 0, 1]];
console.log(updateMatrix(oriArrs));
