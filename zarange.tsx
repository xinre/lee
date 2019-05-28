/**
 * z形排列
 */
let teststr:string = "LEETCODEISHIRING";

let zarangFun = (teststr:string,row:number):string => {
    let resultstr:string = "";
    for(let j:number = row-1;j>=0;j--){
        let juageeven:boolean=true;
        for(let i:number = row-1-j; i <= teststr.length;){
            if(i<=teststr.length){
                resultstr=resultstr.concat(teststr.charAt(i));
                if(j==row-1){
                    i+=2*j;
                }else if(j==0){
                    i+=2*(row-1-j);
                }else{
                    if(juageeven){
                        i+=2*j
                    }else{
                        i+=2*(row-1-j);
                    }
                    juageeven=!juageeven;
                }
            }
        }
    }

    return resultstr;
}

console.log(zarangFun(teststr,4));