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
