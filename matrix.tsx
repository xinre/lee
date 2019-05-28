/**
 * 矩阵
 */
var updateMatrix = function(matrix:Array<Array<number>>):Array<Array<number>>{
    let i:number=0;
    let k:number=0;
    let l:number=0;
    let p:number=0;
    let zeroArr:Array<{
        y:number,
        x:number
    }>=[];
    let nozeroArr:Array<{
        y:number,
        x:number
    }>=[];
    let reArr:Array<Array<number>>=matrix;
    for( i ; i<matrix.length; i++){
        for( k; k< matrix[i].length;k++){
            if(matrix[i][k] == 0){
                zeroArr.push({y:i,x:k});
                reArr[i][k]=matrix[i][k];
            }else{
                nozeroArr.push({y:i,x:k});
            }
        }
        k=0;
    }
    for(l; l<nozeroArr.length;l++){
        for(p; p<zeroArr.length;p++){
            let nowmax:number=1;
            if(Math.abs(nozeroArr[l].x-zeroArr[p].x)==1&&nozeroArr[l].y==zeroArr[p].y||nozeroArr[l].x==zeroArr[p].x&&Math.abs(nozeroArr[l].y-zeroArr[p].y)==1){
                reArr[nozeroArr[l].y][nozeroArr[l].x]=1;
                break;
            }else{
                if(Math.abs(nozeroArr[l].x-zeroArr[p].x)>Math.abs(nozeroArr[l].y-zeroArr[p].y)){
                    nowmax>Math.abs(nozeroArr[l].y-zeroArr[p].y)*2+Math.abs(nozeroArr[l].x-zeroArr[p].x)-Math.abs(nozeroArr[l].y-zeroArr[p].y)?nowmax=Math.abs(nozeroArr[l].y-zeroArr[p].y)*2+Math.abs(nozeroArr[l].x-zeroArr[p].x)-Math.abs(nozeroArr[l].y-zeroArr[p].y):null;
                }else if(Math.abs(nozeroArr[l].x-zeroArr[p].x)==Math.abs(nozeroArr[l].y-zeroArr[p].y)){
                    nowmax=2;
                }else{
                    nowmax>Math.abs(nozeroArr[l].x-zeroArr[p].x)*2+Math.abs(nozeroArr[l].y-zeroArr[p].y)-Math.abs(nozeroArr[l].x-zeroArr[p].x)?nowmax=Math.abs(nozeroArr[l].x-zeroArr[p].x)*2+Math.abs(nozeroArr[l].y-zeroArr[p].y)-Math.abs(nozeroArr[l].x-zeroArr[p].x):null;
                }
                reArr[nozeroArr[l].y][nozeroArr[l].x]=nowmax;
            }
        }
        p=0;
    }
    return reArr;
}
let oriArrs:Array<Array<number>> = [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]];
console.log(updateMatrix(oriArrs));