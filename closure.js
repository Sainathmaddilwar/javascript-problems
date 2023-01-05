
function outside(x) {
    var y = 2;
    function inside() {
        return x + y;
    }
    return inside;     //returns the reference of inside function and variables
}

var init = outside(2);
console.log(init()); 