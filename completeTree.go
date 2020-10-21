package main

import "fmt"

type ItemTree interface {
}

type TreeNode struct {
	value ItemTree
	left  *TreeNode
	right *TreeNode
}

type CompleteTree struct {
	Root *TreeNode
}

func (rootTree *CompleteTree) BuildTree(arr int[]) {
	len := len(arr)
	saveArr := []TreeNode{}
	index := 0
	
	for i := 0; i < len; i++ {
		node := &TreeNode{ arr[i], nil, nil }
		saveArr.append(node)
	}

	rootTree.Root = saveArr[0]

	for index < len {
		leftIndex := 2 * index + 1
		rightIndex := 2 * index + 2
		saveArr[index].left = saveArr[leftIndex];
		saveArr[index].right = saveArr[rightIndex]
	}
}

func (rootTree *CompleteTree) RecurrenceBuildTree(arr int[]) {
	rootTree.Root = &TreeNode{ arr[i], nil, nil }
	len := len(arr)

	func recurrenceFun (nodes []TreeNode{}, i int) {
		leftIndex := 2 * i + 1
		rightIndex := 2 * i + 2

		if leftIndex < len {
			node := &TreeNode{ arr[i], nil, nil }
			nodes.left = node
			recurrenceFun(node, leftIndex)
		}

		if rightIndex < len {
			node := &TreeNode{ arr[i], nil, nil }
			nodes.right = node
			recurrenceFun(node, rightIndex)
		}
	}

	recurrenceFun(rootTree.Root, 0)
}

func main() {
	
}
