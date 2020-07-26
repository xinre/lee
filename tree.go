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

func main() {
	fmt.Println("hello, wolrld")
}
