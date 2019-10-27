/**
 * 寻找两个有序数组的中位数 困难
 */
const test1:number[] = [1,4,6];
const test2:number[] = [3,5,7];

let dealArr = (arr1:number[],arr2:number[]):number => {
    let reNum:number = 0;
    let mixlen:number = arr1.length+arr2.length;
    let cenNum:number[] = [];
    let mixArr:number[] = arr1.length>arr2.length||arr1.length==arr2.length?arr1:arr2;
    let minArr:number[] = arr1.length>arr2.length||arr1.length==arr2.length?arr2:arr1;
    let dynamicNumMin:number = 0;
    let dynamicNum:number[] = [];

    if(mixlen%2==0){
        cenNum[0] = mixlen/2;
        cenNum[1] = mixlen/2+1;
    }else{
        cenNum[0] = Math.ceil(mixlen/2);
    }
    for(let i:number = 0; i<mixArr.length;){
        if(mixArr[i]<minArr[dynamicNumMin]){
            dynamicNum.push(mixArr[i]);
            i++;
        }else{
            dynamicNum.push(minArr[dynamicNumMin]);
            dynamicNumMin++;
        }
        if(cenNum.length === 2){
            if(dynamicNum.length == cenNum[1]){
                console.log(dynamicNum,cenNum);
                reNum = (dynamicNum[dynamicNum.length - 1] + dynamicNum[dynamicNum.length - 2])/2; 
                break;
            }
        }else{
            if(dynamicNum.length == cenNum[0]){
                console.log(dynamicNum,cenNum);
                reNum = dynamicNum[dynamicNum.length - 1];
                break;
            }
        }
    }

    return reNum;
}

console.log(dealArr(test1,test2));