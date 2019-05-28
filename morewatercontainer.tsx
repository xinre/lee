//盛水最多容器
let testArr:Array<number> = [1,8,6,2,5,4,8,3,7,8];

let rewaterFun = (arr:Array<number>):number => {
    let reNum:number = 0;
    for(let i:number=0;i<arr.length;i++){
        for(let j:number = i;j<arr.length;j++){
            if(arr[i]>=arr[j]){
                if(reNum<arr[j]*(j-i)){
                    reNum=arr[j]*(j-i);
                }
            }else{
                if(reNum<arr[i]*(j-i)){
                    reNum=arr[i]*(j-i);
                }
            }
        }
    }

    return reNum;
}

console.log(rewaterFun(testArr));

