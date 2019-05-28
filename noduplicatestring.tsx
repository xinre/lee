let teststring:string = "pwwkew";

const dealstring = (str:string):string => {
    let resultStr:string = "";
    let momentStr:string = "";
    for(let i:number=0;i<str.length;i++){
        let juageWhile:boolean=true;
        let whileCount:number=i;
        momentStr=momentStr+str.charAt(i);
        while(juageWhile){
            whileCount++;
            if(whileCount<str.length){
                let juageRepeat:boolean=false;
                for(let j:number=0;j<momentStr.length;j++){
                    if(momentStr.charAt(j)==str.charAt(whileCount)){
                        juageWhile=false;
                        juageRepeat=true;
                        break;
                    }
                }
                if(juageRepeat==false){
                    momentStr=momentStr+str.charAt(whileCount);
                }
            }else{
                juageWhile=false;
            }
        }
        if(resultStr.length<momentStr.length){
            resultStr=momentStr;
        }
        momentStr="";
    }

    return resultStr;
}

console.log(dealstring(teststring));