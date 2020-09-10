// Implement a simple observer pattern for the time being
var Observe = (function () {
    var _this = this;
    var message = {};
    return {
        on: function (type, fn) {
            if (message[type]) {
                message[type].push(fn);
            }
            else {
                message[type] = [fn];
            }
        },
        subscribe: function (type, param) {
            if (!message[type]) {
                return;
            }
            var len = message[type].length;
            for (var i = 0; i < len; i++) {
                param ? message[type][i].call(_this, param) : message[type][i].call(_this);
            }
        }
    };
})();
Observe.on('say', function (data) {
    console.log(data);
});
Observe.on('say', function (data) {
    console.log(data);
});
Observe.on('hello', function () {
    console.log('hello');
});
Observe.subscribe('say', '666');
Observe.subscribe('hello');
Observe.subscribe('hello');
