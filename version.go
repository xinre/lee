package main

import (
	"fmt"
	"strings"
)

func compareFc (a string, b string) bool {
	a = strings.TrimPrefix(a, "v")
	b = strings.TrimPrefix(b, "v")
	nowa := strings.Split(a, ".")
	nowb := strings.Split(b, ".")

	length := 0

	if len(nowa) > len(nowb) {
		length = len(nowb)
	} else {
		length = len(nowa)
	}

	for i := 0; i < length; i++ {
		fmt.Println(nowa[i], nowb[i])
		if nowa[i] > nowb[i] {
			return true
		} else if nowa[i] < nowb[i] {
			return false
		}
	}
	
	return false
}

func main() {
	var versionA = "v1.22.44"
	var versionB = "v2.44.66"

	result := compareFc(versionA, versionB)

	fmt.Println(result)
}