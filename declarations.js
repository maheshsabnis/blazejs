// the 'var' keywork aka varient used to declare a variable
// dynamic declaration of variable for any data type

// typeof() --> Operator to return datatype of variable

var x;
x = 10; // number
console.log('x = ' + x + ' Type of x = ' + typeof(x));
x = 'ABC' // string
console.log('x = ' + x + ' Type of x = ' + typeof(x));
x = {}; // object
console.log('x = ' + x + ' Type of x = ' + typeof(x));

x = 20.5;
console.log('x = ' + x + ' Type of x = ' + typeof(x));

// value parsing
// parseXXXX() function
var y = parseInt("100ABC");
console.log(y);
var z = parseFloat("45.43XYZ");
console.log(z);
var a = parseInt("000RAR");
console.log(a);
var b = parseInt("ACC20");
console.log(b);
//-----------------------------------------------------------------
console.log();
var p = '3';
var q = '2';
console.log(p / q); // mathematical expression will parse q to number
console.log(p + q); // string concatination
//--------------------------------------------------------------
// Explicit Evaluation of Expression using 'eval()' function
console.log(eval("100+200")); // -- 300
console.log(eval(p + q)); // 32 --> 
// p and q are strings and eval does not parse them into number