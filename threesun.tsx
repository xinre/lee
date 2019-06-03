/**
 * 三数之和
 */
let testarr:number[]=[-1, 0, 1, 2, -1, -4];

let qeuqarr = (arr1:number[],arr2:number[]):boolean => {
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

let threesum = (arr:number[]):number[][] => {
    let rearr:number[][] = [];
    let unhave:boolean = false; 
    for(let i:number=0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(i!=j){
                for(let z:number=0;z<arr.length;z++){
                    if(z!==j&&z!=i){
                        if(arr[i]+arr[j]+arr[z]==0){
                            if(rearr.length==0){
                                rearr.push([arr[i],arr[j],arr[z]]);
                            }else{
                                for(let item of rearr){
                                    if(qeuqarr(item,[arr[i],arr[j],arr[z]])==true){
                                        unhave=true;
                                        break;
                                    }
                                }
                                if(unhave==false){
                                    rearr.push([arr[i],arr[j],arr[z]]);
                                }
                                unhave=false;
                            }
                        }
                    }
                }
            }
        }
    }

    return rearr;
}

console.log(threesum(testarr));

export = qeuqarr;