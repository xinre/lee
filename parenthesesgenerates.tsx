/**
 * 括号生成
 */
let qeuqarr = (arr:string[],arr1:string[]):boolean => {
    let juage:boolean=true;
    if(arr.length!=arr1.length){
        return false;
    }else{
        for(let i:number=0;i<arr.length;i++){
            if(arr[i]!=arr1[i]){
                juage=false;
            }
        }
        return juage;
    }
}

let recursivestr = (sumstrarr:string[][],nowarr:string[],valuearr:number[],count:number,num:number) => {
    for(let i:number=0;i<valuearr.length;i++){
        if(count==0){
            nowarr=[];
        }
        if(count>=num*2){
            let renum = nowarr.slice(0,num*2);
            let juage:boolean = true;
            for(let f:number=0;f<sumstrarr.length;f++){
                if(qeuqarr(renum,sumstrarr[f])){
                    juage=false;
                }
            }
            if(juage){
                sumstrarr.push(renum);
            }
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
    for(let item of sumstrarr){
        let topval=0;
        let botval=0;
        let nowstr:string='';
        for(let items:number=0;items<item.length;items++){
            if(Number(item[items])==1){
                nowstr=nowstr+')';
            }else{
                nowstr=nowstr+'(';
            }
            if(items<num){
                topval=topval+Number(item[items]);
            }else{
                botval=botval+Number(item[items]);
            }
        }
        if(topval+botval==0&&topval<0){
            if(item[0]!='1'&&item[item.length-1]!='-1'){
                rearr.push(nowstr);
            }
        }
    }
    return rearr;
}

console.log(parenthesegen(4));