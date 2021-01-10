// realize simple a setTimeOut first edition

type funUse = () => any

function setTimeOutFake <T extends funUse>(fn: T, timeout: number, args?: any[]): void {
  const start: number = +new Date()
  let now: number = 0
  let timer: number = 0

  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    now = +new Date()

    if (now - start >= timeout) {
      fn.apply(this, args)
      window.cancelAnimationFrame(timer)
    }
  }

  window.requestAnimationFrame(loop)
}

function isShowName () { 
  console.log("Hello")
}

setTimeOutFake(isShowName, 1000)