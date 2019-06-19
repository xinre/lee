/**
 * 二叉树层次遍历
 */

class Nodechild{
    public data:number;
    public left:Nodechilds;
    public right:Nodechilds;
    constructor(data:number){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

type Nodechilds =  Nodechild;


class Buildtwotree{
    public root:Nodechilds;
    constructor(){
        this.root = null;
    }
    insert(data:number):void{
        const newnodechlid = new Nodechild(data);
        function insertNode(node:Nodechilds,newnode:Nodechilds){
            if(node.left===null){
                node.left = newnode;
            }else{
                if(node.right===null){
                    node.right=newnode;
                }else{
                    if(node.left.left&&node.left.right){
                        insertNode(node.right,newnode);
                    }else{
                        insertNode(node.left,newnode);
                    }
                }
            }
        }
        if(!this.root){
            this.root = newnodechlid;
        }else{
            insertNode(this.root,newnodechlid);
        }
    }
    inOrder():number[][]{
        let backs:number[][]=[];
        let count:number=0;
        const ordertree = (node:Nodechilds,count:number):void => {
            if(node){
                if(count==0){
                    backs[0] = [node.data];
                    ordertree(node.left,count+1);
                    ordertree(node.right,count+1);
                }else{
                    if(backs[count]){
                        backs[count].push(node.data);
                        ordertree(node.left,count+1);
                        ordertree(node.right,count+1);
                    }else{
                        backs[count] = [node.data];
                        ordertree(node.left,count+1);
                        ordertree(node.right,count+1);
                    } 
                }
            }
        }
        ordertree(this.root,count);
        return backs;
    }
    whileorder():number[][]{
        let backs:number[][]=[];
        let count:number=0;
        let nowroot:Nodechilds[] = [this.root];
        while(nowroot.length!=0){
            let momentroot:Nodechilds[]=[];
            if(count==0){
                backs[0] = [nowroot[0].data];
                nowroot[0].left?momentroot.push(nowroot[0].left):null;
                nowroot[0].right?momentroot.push(nowroot[0].right):null;
                nowroot=momentroot;
                count++;
            }else{
                if(!backs[count]){
                    backs[count]=[];
                }
                for(let i of nowroot){
                    backs[count].push(i.data);
                    i.left?momentroot.push(i.left):null;
                    i.right?momentroot.push(i.right):null;
                }
                nowroot=momentroot;
                count++;
            }
        }


        return backs;
    }
}

let testBuildtwotree = new Buildtwotree();

testBuildtwotree.insert(3);
testBuildtwotree.insert(9);
testBuildtwotree.insert(20);
testBuildtwotree.insert(null);
testBuildtwotree.insert(null);
testBuildtwotree.insert(15);
testBuildtwotree.insert(7);

console.log(testBuildtwotree.whileorder());