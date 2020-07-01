// 二分法下一次写进阶
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

func main() {
	var arr = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	fmt.Println(binary(arr, 6))
}
