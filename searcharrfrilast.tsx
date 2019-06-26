/**
 * 在排序数组中查找元素的第一个和最后一个位置
 */

 let testarr:number[]=[1,1,2,1,2,3,3,3,3,3,3,2,1,3,1];

 let searchRange = function(testarr, target) {
    let returnarr:number[] = [];
    let moment:number = 0;
    if (testarr.length == 0) {
        return [-1, -1];
    }
    for(let i:number=0;i<=testarr.length;i++){
        console.log('666');
        if(2*i>=testarr.length){
            if(returnarr.length>=1){
                return returnarr
            }else{
                return [-1,-1];
            }
        }
        if(testarr[i]==target){
            if(returnarr[0]!==null&&i<returnarr[0]){
                returnarr[0]=i;
            }else if(returnarr[1]!==null&&i>returnarr[1]){
                returnarr[1]=i;
            }else if(returnarr[0]==null){
                returnarr[0]=i;
                if(returnarr[1]==null){
                    returnarr[1]=i;
                }
            }
        }
        moment=testarr.length-i-1;
        if(testarr[moment]==target){
            if(returnarr[1]!==null&&moment>returnarr[1]){
                returnarr[1]=moment;
            }else if(returnarr[0]!==null&&moment<returnarr[0]){
                returnarr[0]=moment;
            }else if(returnarr[1]==null){
                returnarr[1]=moment;
                if(returnarr[0]==null){
                    returnarr[0]=moment;
                }
            }
        }
    }
};

console.log(searchRange(testarr,1));