package main

import (
	"fmt"
)

func binary(arr []int, number int) int {
	left := 0
	right := len(arr) - 1
	len := len(arr)
	for len > 0 {
		mid := left + (right-left)/2
		if arr[mid] == number {
			return mid
		} else if number > arr[mid] {
			left = mid
		} else if number < arr[mid] {
			right = mid
		}

		len--
	}

	return 1
}

func recursionBinary(arr []int, number int, left int, right int) (result int) {
	var mid int = left + (right-left)/2

	if arr[mid] == number {
		result = mid
	} else if arr[mid] > number {
		result = recursionBinary(arr, number, left, mid-1)
	} else if arr[mid] < number {
		result = recursionBinary(arr, number, mid+1, right)
	}

	return
}

func insertFind(arr []int, number int, left int, right int) (result int) {
	var mid int = left + (number-arr[left])/(arr[right]-arr[left])*(right-left)

	if arr[mid] == number {
		result = mid
	} else if arr[mid] > number {
		result = recursionBinary(arr, number, left, mid-1)
	} else if arr[mid] < number {
		result = recursionBinary(arr, number, mid+1, right)
	}

	return
}

func main() {
	var arr = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	fmt.Println(insertFind(arr, 5, 0, len(arr)))
}
