type FakeFunction = Function & { callFake?: (...arg: any[]) => any, applyFake?: (arg: any, arr: any[]) => any }

interface ArrayConstructor {
  from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}

(Function.prototype as FakeFunction).callFake = function (arg) {
  const context = arg ? Object(arg) : window
  context.fn = this
  const args: any[] = [...Array.from(arguments).slice(1)]

  const result = context.fn(...args)
  delete context.fn

  return result
}

(Function.prototype as FakeFunction).applyFake = function (arg, arr) {
  const context = arg ? Object(arg) : window
  context.fn = this

  let result
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr)
  }

  delete context.fn

  return result
}

let foo = {
  value: 1
};

let bar: FakeFunction = function (a, b) {
  console.log(this.value, a, b)
}

bar.callFake(foo, 6, 8)