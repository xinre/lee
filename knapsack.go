package main

import "fmt"

func maxFun(arr []int, result []int) int {
	var maxIndex = 0
	var maxValue = -1000

	for i := 0; i < len(arr); i++ {
		if inArr(result, i) {
			continue
		}
		if maxValue == -1000 {
			maxValue = arr[i]
			maxIndex = i
		}

		if arr[i] > maxValue {
			maxValue = arr[i]
			maxIndex = i
		}
	}

	return maxIndex
}

func inArr(arr []int, value int) bool {
	if len(arr) == 0 {
		return false
	}

	for i := 0; i < len(arr); i++ {
		if arr[i] == value {
			return true
		}
	}

	return false
}

func main() {
	var weights = []int{2, 2, 6, 5, 4}
	var values = []int{6, 3, 5, 4, 6}
	var valueLen = len(weights)
	var worth = make([]int,len(weights))
	var W = 10
	var resultArr = []int{}
	var nowSum = 0

	for i := 0; i < valueLen; i++ {
		worth[i] = values[i] - weights[i]
	}

	for nowSum <= W {
		nowValue := maxFun(worth, resultArr)
		fmt.Println(nowValue)
		nowSum += weights[nowValue]
		resultArr = append(resultArr, nowValue)
	}

	fmt.Println(resultArr, nowSum, worth)
}

// 未完还需要解决最后超出问题