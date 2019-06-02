/**
 * 电话号码的字母组合
 */

let recursivefun = (recurarr:string[][],num:number,value:string[],resultarr:string[]) => {
    let nowstr=''
    if(num>=recurarr.length-1){
        for(let k:number = 0;k<value.length;k++){
            nowstr=nowstr+value[k];
        }
    }
    for(let i:number = 0;i<recurarr[num].length;i++){
        if(num>=recurarr.length-1){
            resultarr.push(nowstr+recurarr[num][i]);
        }else{
            if(i!=0){
                value.pop();
                value.push(recurarr[num][i]);
                recursivefun(recurarr,num+1,value,resultarr);
            }else{
                value.push(recurarr[num][i]);
                recursivefun(recurarr,num+1,value,resultarr);
            }
        }
    }
} 

let dealletter = (str:string):string[] => {
    let testkey:{
        [propName: number]: string[];
    } = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
    };
    let oriarr:string[][] = [];
    let resultarr:string[] = [];
    let temporary:string[] = [];
    for(let i:number = 0;i<str.length;i++){
        oriarr.push(testkey[Number(str.charAt(i))]);
    }
    console.log(oriarr);
    for(let j:number = 0;j<oriarr[0].length;j++){
        temporary.push(oriarr[0][j])
        recursivefun(oriarr,1,temporary,resultarr);
        temporary=[];
    }


    return resultarr;
}

console.log(dealletter("234"));