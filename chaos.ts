let arr: number[] = []

for(let i: number = 0; i < 50; i++){
  arr.push(i)
}

// fault method
function fn_random(arr: number[]){
  return arr.sort(function(){
      return .5 - Math.random()
  })
}

function fn_random2(arr: number[]){
  let currentIndex = arr.length
  while(currentIndex)
  {
      let randomIndex = Math.floor(Math.random()*currentIndex)
      currentIndex--
      let temp = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = temp
  }
}

fn_random2(arr)

console.log(arr)