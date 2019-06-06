/**
 * 删除链表倒数第n个节点
 */
var ListNode = /** @class */ (function () {
    function ListNode(num) {
        this.next = null;
        this.val = num;
    }
    return ListNode;
}());
// type ListNode = typeof ListNode;
var head = new ListNode(1);
function pushlist(val) {
    var nowlist = new ListNode(val);
    var headlist = head;
    while (headlist.next != null) {
        headlist = headlist.next;
    }
    headlist.next = nowlist;
}
pushlist(2);
pushlist(3);
pushlist(4);
pushlist(5);
function maplist(n) {
    var headlist = head;
    var headlistt = head;
    for (var i = 1; i < n + 1; i++) {
        headlist = headlist.next;
    }
    while (headlist.next != null) {
        headlist = headlist.next;
        headlistt = headlistt.next;
    }
    headlistt.next = headlistt.next.next;
    console.log(head);
    while (head != null) {
        console.log(head.val);
        head = head.next;
    }
}
console.log(maplist(2));
