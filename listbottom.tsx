/**
 * 删除链表倒数第n个节点
 */

class ListNode {
   public val:number;
   public next = null;
   constructor(num:number){
       this.val = num;
   }
}

// type ListNode = typeof ListNode;

let head:ListNode = new ListNode(1);

function pushlist(val:number){
    let nowlist:ListNode = new ListNode(val);
    let headlist:ListNode = head;
    while(headlist.next!=null){
        headlist = headlist.next
    }
    headlist.next = nowlist;
}
pushlist(2);
pushlist(3);
pushlist(4);
pushlist(5);


function maplist(n){
    let headlist:ListNode = head;
    let headlistt:ListNode = head;
    for(let i:number = 1; i<n+1;i++){
        headlist=headlist.next;
    }
    while(headlist.next!=null){
        headlist=headlist.next;
        headlistt=headlistt.next;
    }
    headlistt.next=headlistt.next.next;
    console.log(head)
    while(head!=null){
        console.log(head.val);
        head=head.next;
    }
}

console.log(maplist(2));
