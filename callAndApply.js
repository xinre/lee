Function.prototype.callFake = function (arg) {
    var context = arg ? Object(arg) : window;
    context.fn = this;
    var args = Array.from(arguments).slice(1).slice();
    var result = context.fn.apply(context, args);
    delete context.fn;
    return result;
}(Function.prototype).applyFake = function (arg, arr) {
    var context = arg ? Object(arg) : window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        result = context.fn(arr);
    }
    delete context.fn;
    return result;
};
var foo = {
    value: 1
};
var bar = function (a, b) {
    console.log(this.value, a, b);
};
bar.callFake(foo, 6, 8);
