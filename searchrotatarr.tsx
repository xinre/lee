let testarr:number[] = [4,5,6,7,0,1,2];

let searchrotatarr = (testarr:number[],targetnum:number):number => {
    if(targetnum>testarr[testarr.length-1]){
        for(let i:number = 0;i<testarr.length-1;i++){
            if(targetnum==testarr[i]){
                return i;
            }else{
                if(testarr[i]>targetnum){
                    return -1;
                }else if(testarr[i]<testarr[testarr.length-1]){
                    return -1;
                }
            }
        }
    }else{
        for(let i:number=testarr.length-1;i>0;i--){
            if(targetnum==testarr[i]){
                return i;
            }else{
                if(testarr[i]<targetnum){
                    return -1;
                }else if(testarr[i]>testarr[testarr.length-1]){
                    return -1;
                }
            }
        }
    }
}

console.log(searchrotatarr(testarr,4));