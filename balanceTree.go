package main

type ItemTree interface {
}

type TreeNode struct {
	value ItemTree
	left  *TreeNode
	right *TreeNode
}

type BalanceTree struct {
	Root *TreeNode
}

type Node struct {
	Data number
	Next *Node
}

type List struct {
	headNode *Node
}

func (rootTree *BalanceTree) BuildTree(list List) {
	size := 0
	p := list.headNode

	for p {
		size++
		p = p.Next
	}

	buildTree(rootTree, list, size)
}

func buildTree(n *BalanceTree, list List, size int) {
	if size == 0 {
		return nil
	}

	n.left = buildTree(n.left, list, size/2)

	n.value = list.Data
	list = list.Next

	n.right = buildTree(n.left, list, size-size/2-1)

}

func (rootTree *BalanceTree) isBalanceTree() {
	var k = 0
	isBalanceFun(rootTree.root, k)
}

func isBalanceFun(root *BalanceTree, k int) { // 这个方法不好会重复遍历明天下一种方法
	if root == nil {
		return true
	}
	left := depthFun(root.left)
	right := depthFun(root.right)
	diff := left - right
	if diff > 1 || diff < -1 {
		return false
	}
	return isBalanceFun(root.left) && isBalanceFun(root.right)
}

func depthFun(root BalanceTree) {
	if root == nil {
		return 0
	}

	leftLength := depthFun(root.left)
	rightLength := depthFun(root.right)

	if rightLength > leftLength {
		return rightLength + 1
	} else {
		return leftLength + 1
	}
}
