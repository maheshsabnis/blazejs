// +, -, *, /, ++, --, +=, -=, == (value Equality), === (Deep Equality)
// >,<, >=, <=, !== (not equal)
var a = 10;
var b = 20;
c = 10; // implict Declaration
console.log('c  = ' + c++); // statement scope
console.log('c  = ' + c);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a++);
console.log(++a); // 12 // var is a global scope
console.log(b--);
console.log(--b); // 18 // var is a global scope

console.log(a += b); // a = a+b
console.log(a -= b); // a = a-b

//===========================================================================
var x = "1";
var y = 1;

console.log(x == y); // parsed value equality
console.log(x === y); // Deep Equal (type + value)
//=============================================================================
console.log(2 > 3); // false
console.log(2 < 3); // true
console.log(2 !== 3); // true