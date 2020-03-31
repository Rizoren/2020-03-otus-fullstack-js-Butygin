function sum(arg) {
    let accum = 0;

    function rSum(arg) {
        accum = typeof arg === 'undefined' ? accum : accum + arg;
        return typeof arg === 'undefined' ? accum : rSum;
    }
    rSum.toString = function () {
        return accum;
    };

    return rSum;
}

const a = sum(1)(2)(3)(4)();
console.log(a);