/**
 * 有效的数独
 */
let testarr:string[][] = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8","3",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  
  let validsoduFun = (testarr:string[][]):boolean => {
      let nowarr:string[]=[];
      let savethree:string[][]=[];
      for(let i:number=0; i<testarr.length; i++ ){
        //   if((i+1)%3==0){
        //       for(let l:number=i;l>=(i+1)-3;l--){
        //           for(let z:number=0;z<testarr[l].length;z++){
        //               if(z/3<1){
        //                 savethree[0].push(testarr[l][z]);
        //               }
        //           }
        //       }
        //   }
          for(let j:number=0;j<testarr[i].length;j++){
              if(testarr[i][j]!="."){
                  if(nowarr.indexOf(testarr[i][j])!==-1){
                    return false;
                  }
                  nowarr.push(testarr[i][j]);
                  for(let k:number=0;k<i;k++){
                      if(testarr[k][j]==testarr[i][j]){
                          return false;
                      }
                  }
                  if(savethree[Math.floor(j/3)]){
                    if(savethree[Math.floor(j/3)].indexOf(testarr[i][j])!==-1){
                        return false;
                    }
                    savethree[Math.floor(j/3)].push(testarr[i][j]);
                  }else{
                    savethree[Math.floor(j/3)]=[testarr[i][j]];
                  }
              }
          }
          nowarr=[];
          if((i+1)%3==0){
            savethree=[];
          }
      }
      return true;
  }

  console.log(validsoduFun(testarr));