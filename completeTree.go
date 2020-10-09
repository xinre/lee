package main

import "fmt"

type ItemTree interface {
}

type TreeNode struct {
	value ItemTree
	Parent *TreeNode
	left  *TreeNode
	right *TreeNode
}

type CompleteTree struct {
	Root *TreeNode
}

func (rootTree *CompleteTree) BuildTree(arr int[]) {
	
}
