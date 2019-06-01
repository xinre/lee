/**
 * 最接近三数之和
 */
let testarr:number[] = [1,1,1,0];

let dealwithfun = (arr:number[],target:number):number => {
    let reresult :number=null;
    let resum :number=null;
    for(let i:number = 0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(i!=j){
                for(let z:number=0;z<arr.length;z++){
                    if(z!=i&&z!=j){
                        if(reresult!=null){
                            if(reresult>Math.abs(target-(arr[i]+arr[j]+arr[z]))){
                                reresult=Math.abs(target-(arr[i]+arr[j]+arr[z]));
                                resum=arr[i]+arr[j]+arr[z];
                            }
                        }else{
                            reresult=Math.abs(target-(arr[i]+arr[j]+arr[z]));
                            resum=arr[i]+arr[j]+arr[z];
                        }
                    }
                }
            }
        }
    }

    return resum;
}

console.log(dealwithfun(testarr,-100));