/**
 * 跳跃游戏
 * 需在优化算法性能不行
 */
var testarr = [2, 0, 0];
// const cycleFun = ( key:number , arr:number[] , resultArr:number[]) => {
//     if(key === arr.length-1){
//         resultArr.push(1);
//         return;
//     }else if(key < arr.length-1){
//         if(arr[key] == 0){
//             resultArr.push(0);
//             return;
//         }
//         for(let i:number = 1;i <= arr[key]; i++){
//             cycleFun(key + i,arr,resultArr);
//         }
//     }else if(key > arr.length-1){
//         resultArr.push(0);
//         return;
//     }
// }
// const canJump = (arr:number[]) => {
//     let initKey:number = 0;
//     let resultArr:number[] = [];
//     if(initKey === arr.length-1){
//         resultArr.push(1);
//     }
//     for(let i:number = 1;i <= arr[initKey]; i++){
//         let nowKey:number = initKey + i;
//         cycleFun(nowKey,arr,resultArr);
//     }
//     for(let i:number = 0; i < resultArr.length;i++){
//         if(resultArr[i] === 1){
//             return true;
//         }
//     }
// }
var cycleFun = function(key, arr) {
    if (key === arr.length - 1) {
        return true;
    } else if (key < arr.length - 1) {
        if (arr[key] == 0) {
            return false;
        }
        for (var i = 1; i <= arr[key]; i++) {
            if (cycleFun(key + i, arr)) {
                return true;
            }
        }
    }
    return false;
};
var canJump = function(arr) {
    return cycleFun(0, arr);
};
console.log(canJump(testarr));