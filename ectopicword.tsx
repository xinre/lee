/**
 * 异位词分组
 */
const testarr: string[] = [undefined, "eat", "tea", "tan", "ate", "nat", "bat", "234", "batt", "!dd"];

const juagearr = (str1: string, str2: string):boolean => {
    let juagebool = true;
    if (str1.length != str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1.charAt(i)) === -1){
            juagebool = false;
            break;
        }
    }
    return juagebool;
}

const groupword = (arr:string[]): string[][] => {
    let resultArr: string[][] = [];
    let activeArr = [];
    let momentjuage = true;

    for (let i = 0; i < arr.length; i++) {
        if (activeArr.length == 0){
            let cur = resultArr[activeArr.length - 1];

            activeArr.push(arr[i]);
            if(!Array.isArray(cur)){
                cur=[];
            } 
            cur.push(arr[i]);
        } else {
            for (let j = 0; j < activeArr.length; j++){
                if (juagearr(arr[i], activeArr[j])){
                    resultArr[j].push(arr[i]);
                    momentjuage = false;
                    break;
                }
            }
            if (momentjuage) {
                activeArr.push(arr[i]);
                if (Array.isArray(resultArr[activeArr.length-1])){
                    resultArr[activeArr.length-1].push(arr[i]);
                } else {
                    resultArr[activeArr.length-1] = [];
                    resultArr[activeArr.length-1].push(arr[i]);
                }
            }
            momentjuage = true;
        }
    }

    return resultArr;
}

console.log(groupword(testarr));