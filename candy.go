package main

// 分发糖果，这个题出的不怎么样
// 推翻第一版，看了评论暂时想法需要从后往前再从前往后遍历，题意条件后面需要根据前边和后边大小推定义什么值 需要找最大值
// 这个写法很恶心， 懒得看了， 下次找时间优化一下

import "fmt"

func candy(ratings []int) int {
	lens := len(ratings) - 1
	maxKey := 0
	maxValue := 0
	sum := 0
	sumArr := make([]int, len(ratings))
	maxPosition := ""
	// exist := func (key int, arr []int) bool {
	// 	for k, _ := range(arr) {
	// 		if k == key {                       
	// 			return true
	// 		}
	// 	}
	// 	return false
	// }
	for key, value := range ratings {
		if value > maxValue {
			maxValue = value
			maxKey = key
		}
	}
	for i := 0; i < len(ratings); i++ {
		if maxPosition == "" {
			if i == maxKey {
				maxPosition = "left"
			} else if lens - i == maxKey {
				maxPosition = "right"
			}
		}

		if i == 0 {
			if i < lens && ratings[i] > ratings[i + 1] {
				sumArr[i] = 2
			} else {
				sumArr[i] = 1
			}
		} else {
			if ratings[i] > ratings[i - 1] {
				if sumArr[i] <= sumArr[i - 1] {
					sumArr[i] = sumArr[i - 1] + 1
				}
			} else if i < lens && ratings[i] > ratings[i + 1] {
				if sumArr[i] <= sumArr[i + 1] {
					sumArr[i] = sumArr[i + 1] + 1
				}
			} else {
				sumArr[i] = 1
			}
		}

		if lens - i == lens {
			if i < lens && ratings[lens] > ratings[lens - 1] {
				sumArr[lens] = 2
			} else {
				sumArr[lens] = 1
			}
		} else {
			if ratings[lens - i] > ratings[lens - i + 1] {
				if sumArr[lens - i] <= sumArr[lens - i + 1] {
					sumArr[lens - i] = sumArr[lens - i + 1] + 1
				}
			} else if i < lens && ratings[lens - i] > ratings[lens - i - 1] {
				if sumArr[lens - i] <= sumArr[lens - i - 1] {
					sumArr[lens - i] = sumArr[lens - i - 1] +1
				}
			} else {
				sumArr[lens - i] = 1
			}
		}

		if i < lens && maxPosition == "left" && sumArr[maxKey + 1] != 0 {
			if ratings[maxKey] > ratings[maxKey + 1] {
				sumArr[maxKey] = sumArr[maxKey + 1] + 1
			} else {
				sumArr[maxKey] = sumArr[maxKey + 1]
			}
			if maxKey != 0 && sumArr[maxKey] <= sumArr[maxKey - 1] {
				sumArr[maxKey] = sumArr[maxKey - 1] + 1
			}
		}

		if maxPosition == "right" && sumArr[maxKey - 1] != 0 {
			if ratings[maxKey] > ratings[maxKey - 1] {
				sumArr[maxKey] = sumArr[maxKey - 1] + 1
			} else {
				sumArr[maxKey] = sumArr[maxKey - 1]
			}

			if maxKey != lens &&  sumArr[maxKey] <= sumArr[maxKey + 1] {
				sumArr[maxKey] = sumArr[maxKey + 1] + 1
			}
		}
	}

	for _, value := range sumArr {
		sum += value
	}
	fmt.Println("===", sumArr)
	return sum
}

func main () {
	var ratings []int = []int{0}
	candy(ratings)
}