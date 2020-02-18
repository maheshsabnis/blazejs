"use strict"
var data = []; // array with type independent data

data.push(10);
data.push('ABC');
data.push({ id: 101, name: 'A' });

// read all data
for (var i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        console.log(data[i]);
    }
}

var intArray = [10, 20, 30, 40];
// using for..in loop in ES 3
for (var i in intArray) {
    console.log(intArray[i]);
}

intArray.push(50);
for (var i in intArray) {
    console.log(intArray[i]);
}

console.log(intArray.indexOf(30)); // return an index of value 30 in array
console.log(intArray.indexOf(300)); // if not found it will return -1
// complex array
var complex = [
    { id: 1, name: 'A', age: 20 },
    { id: 2, name: 'B', age: 30 },
    { id: 3, name: 'C', age: 14 },
    { id: 4, name: 'D', age: 18 },
    { id: 5, name: 'E', age: 56 }
];
for (var i in complex) {
    if (complex[i].age > 20) {
        console.log(complex[i]);
    }
}