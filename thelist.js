function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

//插入一个元素
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        document.write(currNode.next.element + '&nbsp;');
        currNode = currNode.next;
    }
}



function dealwidthnum(num, rearray) {
    if (num != 0) {
        rearray.push(num % 10);
        num = (num - num % 10) / 10;
        dealwidthnum(num, rearray);
    }
    return rearray;
}

function arrtonum(arr) {
    let num = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
            num += arr[i];
            break;
        } else {
            let mentnum = arr[i];
            for (let j = i; j > 0; j--) {
                mentnum = mentnum * 10;
            }
            num += mentnum;
        }
    }
    return num;
}

let addTwoNumbers = function(l1, l2) {
    let rearray = [];
    dealwidthnum(arrtonum(l1) + arrtonum(l2), rearray);
    return rearray;
}

console.log(addTwoNumbers([2, 4, 3, 8, 8], [5, 6, 4, 9, 6]));