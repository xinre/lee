/**
 * 下一个排列//大致意思未读懂题意
 */
let tetsnum:number[] = [ 1, 8, 6, 3, 2 ];

function arrangenum(rednum:number[]):number[]{
    let juagedescen:boolean = false;
    for(let i:number = 1;i<rednum.length;i++){
        if(rednum[i]<rednum[i+1]){
            juagedescen=true;
        }
    }
    if(juagedescen){
        let nownum:number=0;
        for(let j:number = 1;j<rednum.length;j++){
            for(let k:number=j;k<rednum.length;k++){
                if(rednum[k]>rednum[j]){
                    nownum=rednum[j];
                    rednum[j]=rednum[k];
                    rednum[k]=nownum;
                }
            }
        }
    }else{
        let nownum:number=0;
        for(let j:number = 0;j<rednum.length;j++){
            for(let k:number=j;k<rednum.length;k++){
                if(rednum[k]<rednum[j]){
                    nownum=rednum[j];
                    rednum[j]=rednum[k];
                    rednum[k]=nownum;
                }
            }
        }
    }
    
    return rednum;
}

console.log(arrangenum(tetsnum));