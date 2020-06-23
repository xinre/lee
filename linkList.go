package main

import "fmt"

type Object interface {
}

type Node struct {
	Data number
	Next *Node
}

type List struct {
	headNode *Node
}

func recursionFun(header *Node, nowPre *Node) {
	if header != nil {
		saveHead := header
		header.Next = nowPre
		nowPre = header
		header = saveHead
		recursionFun(header.Next, nowPre)
	}

	return
}

func (this *List) IsEmpty() bool {
	if this.headNode == nil {
		return true
	} else {
		return false
	}
}

func (this *List) Lenght() int {
	head := this.headNode
	count := 0

	for head != nil {
		count++
		head = head.Next
	}

	return count
}

func (this *List) Add(data Object) *Node { // 在链表前面添加元素
	node := &Node{Data: data}
	node.Next = this.headNode
	this.headNode = node
	return node
}

func (this *List) Append(data Object) { // 在链表后面添加元素
	node := &Node{Data: data}
	if this.IsEmpty() {
		this.headNode = node
	} else {
		cur := this.headNode
		for cur.Next != nil {
			cur = cur.Next
		}
		cur.Next = node
	}
}

func (this *List) Insert(index int, data Object) { // 在链表指定位置添加元素
	if index < 0 {
		this.Add(data)
	} else if index > this.Lenght() {
		this.Append(data)
	} else {
		nowListDom := this.headNode
		count := 0
		for count < (index - 1) {
			nowListDom = nowListDom.Next
			count++
		}
		node := &Node{Data: data}
		node.Next = nowListDom.Next
		nowListDom.Next = node
	}
}

func (this *List) Remove(data Object) { // 删除链表指定元素
	pre := this.headNode
	if pre.Data == data {
		this.headNode = pre.Next
	} else {
		for pre.Next != nil {
			if pre.Data == data {
				pre.Next = pre.Next.Next
			} else {
				pre = pre.Next
			}
		}
	}
}

func (this *List) RemoveIndex(index int) { // 删除链表指定位置的元素
	pre := this.headNode
	if index <= 0 {
		this.headNode = pre.Next
	} else if index > this.Lenght() {
		return
	} else {
		for i := 0; i < index; i++ {
			if i == index {
				pre.Next = pre.Next.Next
				break
			}
			pre = pre.Next
		}
	}
}

func (this *List) Contain(data Object) bool { // 看是否包含某个元素
	pre := this.headNode
	for pre != nil {
		if pre.Data == data {
			return true
		}
		pre = pre.Next
	}
	return false
}

func (this *List) ShowList() {
	if !this.IsEmpty() {
		pre := this.headNode
		for pre != nil {
			fmt.Println(pre.Data)
			pre = pre.Next
		}
	}
}

func (this *List) Resver() { // 迭代方法反转最终还是没想出自己的方法这个接近官方的方法
	pre := this.headNode
	var nowList *List
	nowPre := nowList.headNode

	for pre != nil {
		newPre := pre
		newPre.Next = nowPre
		nowPre = newPre
		pre = pre.Next
	}

	this.headNode = nowPre
}

func (this *List) recursionResver() {
	pre := this.headNode
	var nowList *List
	nowPre := nowList.headNode

	recursionFun(pre, nowPre)
	this.headNode = nowPre
}

func (this *List) sort() { // 冒泡排序
	pre := this.headNode
	len := this.Lenght()

	for len > 0 {
		for pre != nil {
			if pre.Next != nil && pre.Data > pre.Next.Data {
				saveNode := pre.Next
				pre.Next = pre.Next.Next
				saveNode.Next = pre
				pre = saveNode
			}
			pre = pre.Next
		}
		len = len - 1
	}

}

func main() {
	var ListTest = List{}
	ListTest.Append(2)
	ListTest.Append(3)
	ListTest.Append(0)
	ListTest.Append(1)
	ListTest.Append(4)
	ListTest.Resver()
	ListTest.ShowList()
}
