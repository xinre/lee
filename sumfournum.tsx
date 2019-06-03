/**
 * 四数之和
 */
let testNsum:number[] = [1, 0, -1, 0, -2, 2];


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

let sumfoursum = (arr:number[],target:number):number[][] => {
    let resultArr:number[][] = [];
    if(arr.length<4){
        console.log('请输入长度大于等于4的数组');
    }
    for(let i:number=0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(j!=i){
                for(let k:number=0;k<arr.length;k++){
                    if(k!=j&&k!=i){
                        for(let l:number=0;l<arr.length;l++){
                            if(l!=i&&l!=j&&l!=k){
                                if(arr[i]+arr[j]+arr[k]+arr[l]==target){
                                    if(resultArr.length==0){
                                        resultArr.push([arr[i],arr[j],arr[k],arr[l]]);
                                    }else{
                                        let juage:boolean = true;
                                        for(let p of resultArr){
                                            if(qeuqarr(p,[arr[i],arr[j],arr[k],arr[l]])==false){
                                                juage=false
                                            }else{
                                                juage=true;
                                                break;
                                            }
                                        }
                                        if(juage==false){
                                            resultArr.push([arr[i],arr[j],arr[k],arr[l]]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return resultArr;
}

console.log(sumfoursum(testNsum,0));