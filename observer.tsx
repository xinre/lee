// Implement a simple observer pattern for the time being
// next my-vue observer

type observeFun = {
  on: (type: string, fn: (data?: any) => any) => void
  subscribe: (type: string, param?: any) => void
}

type messageContent = {
  [index: string]: any[]
}

const Observe = (function (): observeFun {
  let message: messageContent = {}

  return {
    on: (type, fn) => {
      if (message[type]) {
        message[type].push(fn)
      } else {
        message[type] = [fn]
      }
    },
    subscribe: (type, param) => {
      if (!message[type]) {
        return
      }
      const len = message[type].length
      for (let i =0; i < len; i++ ) {
        param ? message[type][i].call(this, param) : message[type][i].call(this)
      }
    }
  }
})()

Observe.on('say', function (data) {
  console.log(data);
})
Observe.on('say', function (data) {
  console.log(data);
})

Observe.on('hello', function () {
  console.log('hello');
})

Observe.subscribe('say', '666')
Observe.subscribe('hello')
Observe.subscribe('hello')

