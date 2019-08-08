/**
 * 螺旋矩阵
 */

 const testArr:number[][] = [
    [1, 2, 3, 4,5],
    [5, 6, 7, 8,6],
    [9,10,11,12,8],
    [9,10,11,12,8],
  ];

  const dealFun = (testArr:number[][]):number[] => {
      let returnArr:number[]=[];
      let x = Math.ceil(testArr[0].length/2);
      let y = Math.ceil(testArr.length/2);
    //   let circleNum:number=0;
      let num = x>y?x:y; 
      for(let p:number=0;p<num;x++,y++,p++){
        if(p<x){
          for(let i:number=p;i<testArr[p].length-1-p;i++){
            returnArr.push(testArr[p][i]);
          }
        }
        if(p<y){
          for(let j:number=p;j<testArr.length-1-p;j++){
            let len = testArr[0].length-1-p;
            returnArr.push(testArr[j][len]);
          }
        }
        if(p<x){
          for(let k:number=testArr[testArr.length-1-p].length-1-p;k>=1+p;k--){
            returnArr.push(testArr[testArr.length-1-p][k]);
          }
        }
        if(p<y){
          for(let l:number=testArr.length-1-p;l>=1+p;l--){
            returnArr.push(testArr[l][p]);
          }
        }
      }
      return returnArr;
  }

  console.log(dealFun(testArr));