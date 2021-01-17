// throttle and debounce
// temporary version, realize better version maybe later

const throttle = (fn, wait: number = 500) => {
  let timeStamp = 0

  return (...args) => {
    let now: number = +new Date()

    if (now - timeStamp >= wait) {
      timeStamp = now
      fn.apply(this, args)
    }
  }
}

const throttleSetTimeOut = (fn, wait: number = 500) => {
  let timeStamp = null

  return (...args) => {
    if (!timeStamp) {
      timeStamp = setTimeout(() => {
        fn.apply(this, args)
        timeStamp = null
      }, wait)
    }
  }
}

const debounce = (func, wait: number = 500) => {
  let timer

  return (...args) => {
    let context = this
       
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

const betterFn = debounce(() => console.log('fn 函数执行了'), 1000)

setInterval(betterFn, 10)

