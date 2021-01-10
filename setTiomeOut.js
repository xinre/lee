// realize simple a setTimeOut first edition
function setTimeOutFake(fn, timeout, args) {
    var _this = this;
    var start = +new Date();
    var now = 0;
    var timer = 0;
    var loop = function () {
        timer = window.requestAnimationFrame(loop);
        now = +new Date();
        if (now - start >= timeout) {
            fn.apply(_this, args);
            window.cancelAnimationFrame(timer);
        }
    };
    window.requestAnimationFrame(loop);
}
function isShowName() {
    console.log("Hello");
}
setTimeOutFake(isShowName, 1000);
