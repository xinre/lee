package main

import "fmt"

type ItemTree interface {
}

type TreeNode struct {
	key   int
	value ItemTree
	left  *TreeNode
	right *TreeNode
}

type SearchTree struct {
	Root *TreeNode
}

// insert item
func (rootTree *SearchTree) Insert(key int, value ItemTree) {
	n := &TreeNode{key, value, nil, nil}

	if rootTree.Root == nil {
		rootTree.Root = n
	} else {
		insertTreeNode(rootTree.Root, n)
	}
}

func insertTreeNode(node TreeNode, newNode *TreeNode) {
	if newNode.key < node.key {
		if node.left == nil {
			node.left = newNode
		} else {
			insertTreeNode(node.left, newNode)
		}
	} else {
		if node.right == nil {
			node.right = newNode
		} else {
			insertTreeNode(node.right, newNode)
		}
	}
}

// min item
func (rootTree *SearchTree) Min() *TreeNode {
	n := rootTree.Root

	if n == nil {
		return nil
	}

	for {
		if n.left == nil {
			return n
		}
		n = n.left
	}
}

// max item
func (rootTree *SearchTree) Max() *TreeNode {
	n := rootTree.Root

	if n == nil {
		return nil
	}

	for {
		if n.right == nil {
			return n
		}
		n = n.right
	}
}

// search item
func (rootTree *SearchTree) Search(key int) *TreeNode {
	return SeachNode(rootTree.Root, key)
}

func SeachNode(node TreeNode, key int) *TreeNode {
	if node == nil {
		return nil
	}

	if node.key < key {
		SeachNode(node.left, key)
	} else if node.key > key {
		SeachNode(node.right, key)
	} else {
		return node
	}
}

// traverse tree
func (rootTree *SearchTree) InOrderTraverse() {
	inOrderTraver(rootTree.Root)
}

func inOrderTraver(n *TreeNode) {
	if n != nil {
		inOrderTraver(n.left, f)
		fmt.Println(n.value, n.key)
		inOrderTraver(n.right, f)
	}
}

func (rootTree *SearchTree) PreOrderTraverse() {
	preOrdertraver(rootTree.Root)
}

func preOrdertraver(n *TreeNode) {
	if n != nil {
		fmt.Println(n.value, n.key)
		preOrdertraver(n.left)
		preOrdertraver(n.right)
	}
}
func (rootTree *SearchTree) PostOrderTraverse() {
	postOrderTraver(rootTree.Root)
}

func postOrderTraver(n *TreeNode) {
	if n != nil {
		postOrderTraver(n.left)
		postOrderTraver(n.right)
		fmt.Println(n.value, n.key)
	}
}

// next for circulation traverse

func main() {
	fmt.Println("hello, wolrld")
}
