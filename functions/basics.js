// simple function
function doWork() {
    console.log('A Simple Function');
}
doWork();

// funtion with input parameters
function printValue(x) {
    if (x % 2 === 0) {
        console.log('Even Number');
    } else {
        console.log(' Odd number');
    }
}
printValue(2);
printValue(3);
// function with return value or output parameter

function changeCase(str, c) {
    var res; // function scope declaration
    switch (c) {
        case 'U':
            res = str.toUpperCase();
            break;
        case 'L':
            res = str.toLowerCase();
            break
    }
    return res;
}
console.log(changeCase('Mahesh Sabnis', 'U'));
console.log(changeCase('Mahesh Sabnis', 'L'));

// function with variable number of
function variableParams(x) {
    var sum = 0;
    if (x.length > 0) {
        for (var i = 0; i < x.length; i++) {
            sum += x[i];
        }
    }
    return sum;
}
console.log(variableParams([1]));
console.log(variableParams([1, 2]));
console.log(variableParams([1, 2, 3]));

// scoping in function
function scope() {
    //j++; // accessibility is possible for j but as NaN
    // console.log('j out of loop after increament' + j);

    for (j = 0; j < 5; j++) {
        console.log('In loop = ' + j);
        x = 1;
        console.log('in loop x = ' + x);
        x++;
    }
    console.log('out of loop x = ' + x);

    // j = 'NaN'; // reset
    // console.log('j out of loop ' + j);
    // j++;
    // console.log('j out of loop after increament' + j);

}

scope();