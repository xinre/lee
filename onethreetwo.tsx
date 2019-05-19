let testArr:number[] = [-1, 3, 2, 0,2,3];

interface defineArr{
    x:number,
    y:number,
    z:number
}

interface returnresult{
    count:number,
    lastArr:defineArr[]
}

let solveFun = (testArr:number[]) => {
    let x:number,y:number,z:number,count:number = 0;
    let lastArr:defineArr[] = []; 
    for(let i:number = 0; i < testArr.length; i++){
        x = testArr[i];
        for(let k:number = i+1; k < testArr.length; k++){
            if(x<testArr[k]){
                y=testArr[k];
            }
            for(let l:number = k+1; l < testArr.length;l++){
                if(testArr[l]>x&&testArr[l]<y){
                    z=testArr[l];
                    count+=1;
                    lastArr.push({
                        x:x,
                        y:y,
                        z:z
                    })
                    z=0;
                }
            }
            y=0;
        }
        x=0;
    }
    return {
        count,
        lastArr
    }
}

console.log(solveFun(testArr));