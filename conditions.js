// if, if-else, if-else-if

var a = 10;
var b = -3;

if (b !== 0) {
    console.log(a / b);
} else {
    console.log('b cannot be 0');
}

// || or condition
if (b !== 0 || b > 0) {
    console.log(a / b);
} else {
    console.log('b cannot be 0 or negative');
}

// && AND condition
if (b !== 0 && b > 0) {
    console.log(a / b);
} else {
    console.log('b cannot be 0 or negative');
}