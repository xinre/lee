/**
 * 括号生成 未完
 */

let qeuqarr = (arr1:number[]|string[],arr2:number[]|string[]):boolean => {
    let juagearr2:number[] = [];
    let juagearr:number[] = [];
    if(arr1.length==arr2.length){
        for(let i:number = 0; i<arr1.length; i++){
            for(let j:number = 0;j<arr2.length;j++){
                if(juagearr.indexOf(j)==-1){
                    if(juagearr2.indexOf(i)==-1){
                        if(arr1[i]==arr2[j]){
                            juagearr.push(j);
                            juagearr2.push(i);
                        }
                    }
                }
            }
        }
        if(arr1.length==juagearr.length){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
let recursivestr = (sumstrarr:string[][],nowarr:string[],valuearr:number[],count:number,num:number) => {
    for(let i:number=0;i<valuearr.length;i++){
        if(count==0){
            nowarr=[];
        }
        if(count>=num*2){
            let renum = nowarr.slice(0,num*2);
            // let juage:boolean = true;
            // for(let f:number=0;f<sumstrarr.length;f++){
            //     if(qeuqarr(renum,sumstrarr[f])){
            //         juage=false;
            //     }
            // }
            // if(juage){
                sumstrarr.push(renum);
            // }
        }else{
            if(i!=0){
                nowarr.pop();
                if(nowarr.length>count){
                    nowarr=nowarr.slice(0,count);
                }
                nowarr.push(String(valuearr[i]));
            }else{
                if(nowarr.length>count){
                    nowarr=nowarr.slice(0,count);
                }
                nowarr.push(String(valuearr[i]));
            }
            recursivestr(sumstrarr,nowarr,valuearr,count+1,num);
        }
    }
}

let parenthesegen = (num:number):string[] => {
    let rearr:string[] = [];
    let nowarr:string[] = [];
    let sumstrarr:string[][] = [];
    let count:number = 0;
    let valuearr:number[] = [-1,1];
    recursivestr(sumstrarr,nowarr,valuearr,count,num);
    console.log(sumstrarr);
    return rearr;
}

parenthesegen(2);