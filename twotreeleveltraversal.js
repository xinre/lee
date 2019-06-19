/**
 * 二叉树层次遍历
 */
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
        var count = 0;
        var ordertree = function (node, count) {
            if (node) {
                if (count == 0) {
                    backs[0] = [node.data];
                    ordertree(node.left, count + 1);
                    ordertree(node.right, count + 1);
                }
                else {
                    if (backs[count]) {
                        backs[count].push(node.data);
                        ordertree(node.left, count + 1);
                        ordertree(node.right, count + 1);
                    }
                    else {
                        backs[count] = [node.data];
                        ordertree(node.left, count + 1);
                        ordertree(node.right, count + 1);
                    }
                }
            }
        };
        ordertree(this.root, count);
        return backs;
    };
    Buildtwotree.prototype.whileorder = function () {
        var backs = [];
        var count = 0;
        var nowroot = [this.root];
        while (nowroot.length != 0) {
            var momentroot = [];
            if (count == 0) {
                backs[0] = [nowroot[0].data];
                nowroot[0].left ? momentroot.push(nowroot[0].left) : null;
                nowroot[0].right ? momentroot.push(nowroot[0].right) : null;
                nowroot = momentroot;
                count++;
            }
            else {
                if (!backs[count]) {
                    backs[count] = [];
                }
                for (var _i = 0, nowroot_1 = nowroot; _i < nowroot_1.length; _i++) {
                    var i = nowroot_1[_i];
                    backs[count].push(i.data);
                    i.left ? momentroot.push(i.left) : null;
                    i.right ? momentroot.push(i.right) : null;
                }
                nowroot = momentroot;
                count++;
            }
        }
        return backs;
    };
    return Buildtwotree;
}());
var testBuildtwotree = new Buildtwotree();
testBuildtwotree.insert(3);
testBuildtwotree.insert(9);
testBuildtwotree.insert(20);
testBuildtwotree.insert(null);
testBuildtwotree.insert(null);
testBuildtwotree.insert(15);
testBuildtwotree.insert(7);
console.log(testBuildtwotree.whileorder());
