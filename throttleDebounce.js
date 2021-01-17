// throttle and debounce
// temporary version, realize better version maybe later
var _this = this;
var throttle = function (fn, wait) {
    if (wait === void 0) { wait = 500; }
    var timeStamp = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = +new Date();
        if (now - timeStamp >= wait) {
            timeStamp = now;
            fn.apply(_this, args);
        }
    };
};
var throttleSetTimeOut = function (fn, wait) {
    if (wait === void 0) { wait = 500; }
    var timeStamp = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!timeStamp) {
            timeStamp = setTimeout(function () {
                fn.apply(_this, args);
                timeStamp = null;
            }, wait);
        }
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 500; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = _this;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
};
var betterFn = debounce(function () { return console.log('fn 函数执行了'); }, 1000);
setInterval(betterFn, 10);
