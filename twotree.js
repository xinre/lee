var Nodechild = /** @class */ (function () {
    function Nodechild(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Nodechild;
}());
var Buildtwotree = /** @class */ (function () {
    function Buildtwotree() {
        this.root = null;
    }
    Buildtwotree.prototype.insert = function (data) {
        var newnodechlid = new Nodechild(data);
        function insertNode(node, newnode) {
            if (node.left === null) {
                node.left = newnode;
            }
            else {
                if (node.right === null) {
                    node.right = newnode;
                }
                else {
                    if (node.left.left && node.left.right) {
                        insertNode(node.right, newnode);
                    }
                    else {
                        insertNode(node.left, newnode);
                    }
                }
            }
        }
        if (!this.root) {
            this.root = newnodechlid;
        }
        else {
            insertNode(this.root, newnodechlid);
        }
    };
    Buildtwotree.prototype.inOrder = function () {
        var backs = [];
        var inOrderNode = function (node) {
            if (node != null) {
                inOrderNode(node.left);
                backs.push(node.data);
                inOrderNode(node.right);
            }
        };
        inOrderNode(this.root);
        return backs;
    };
    return Buildtwotree;
}());
var neBuildtwotree = new Buildtwotree();
neBuildtwotree.insert(6);
neBuildtwotree.insert(8);
neBuildtwotree.insert(10);
neBuildtwotree.insert(6);
neBuildtwotree.insert(6);
console.log('result:', neBuildtwotree.inOrder());
