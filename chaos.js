var arr = [];
for (var i = 0; i < 50; i++) {
    arr.push(i);
}
// fault method
function fn_random(arr) {
    return arr.sort(function () {
        return .5 - Math.random();
    });
}
function fn_random2(arr) {
    var currentIndex = arr.length;
    while (currentIndex) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}
fn_random2(arr);
console.log(arr);
