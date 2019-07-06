/**
 * 组合总和
 */

 const testarr:number[] = [2,3,5];

let juagearr = (bigarr:number[][],litarr:number[]):boolean => {
    let rejuage:boolean=true;
    for(let i:number= 0; i<bigarr.length;i++ ){
        let nowju:boolean = true;
        if(litarr.length!=bigarr[i].length){
            rejuage==true;
            continue;
        }
        for(let j:number=0;j<litarr.length;j++){
            if(bigarr[i].indexOf(litarr[j])===-1){
                nowju=true;
                break;
            }else{
                nowju=false;
            }
        }
        rejuage=nowju;
        if(rejuage===false){
            break;
        }
    }
    return rejuage;
}

 let recurtionfun = (testarr,target,nowremainder,rearr) => {
    let nowarr = nowremainder.slice();
    let sunarr = 0;
    for(let k:number=0;k<nowarr.length;k++){
        sunarr+=nowarr[k];
    }
    if(sunarr===target){
        if(rearr.length==0||juagearr(rearr,nowarr)){
            rearr.push(nowarr);
        }
        return;
    }else if(sunarr>target){
        return;
    }
    sunarr=0;
    for(let i:number = 0;i<testarr.length;i++){
        nowarr.push(testarr[i]);
        for(let j:number=0;j<nowarr.length;j++){
            sunarr+=nowarr[j];
        }
        if(sunarr===target){
            if(rearr.length==0||juagearr(rearr,nowarr)){
                rearr.push(nowarr);
            }
            return;
        }else if(sunarr>target){
            return;
        }else{
            recurtionfun(testarr,target,nowarr,rearr);
        }
        sunarr=0;
        nowarr.pop();
    }
 }

 let groupTotal = (testarr:number[],target:number):number[][] => {
     let rearr:number[][]=[];
     let nowremainder:number[] = [];
     for(let i:number = 0;i<testarr.length;i++){
        recurtionfun(testarr,target,[testarr[i]],rearr);
     }
     return rearr;
 }

 console.log(groupTotal(testarr,8));