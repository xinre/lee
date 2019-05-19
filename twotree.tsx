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
    inOrder(){
        let backs:number[]=[];
        const inOrderNode = (node:Nodechilds):void => {
            if(node != null){
                inOrderNode(node.left);
                backs.push(node.data);
                inOrderNode(node.right)
            }
        }
        inOrderNode(this.root);
        return backs;
    }
}

let neBuildtwotree = new Buildtwotree();

neBuildtwotree.insert(6);
neBuildtwotree.insert(8);
neBuildtwotree.insert(10);
neBuildtwotree.insert(6);
neBuildtwotree.insert(6);

console.log('result:',neBuildtwotree.inOrder());
