/**
 * 整数转罗马数字
 */
let testnum:number = 666;

let turnnumroman = (num:number):string => {
    let restring:string = "";
    let romanobject : {
        I:number,
        V:number,
        X:number,
        L:number,
        C:number,
        D:number,
        M:number,
    }={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };
    let i:any;
    for(i in romanobject){
        if(num<romanobject[i]){
            
        }
    }

    return restring;
}

console.log(turnnumroman(testnum));