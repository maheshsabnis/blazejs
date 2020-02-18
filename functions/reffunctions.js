// storing the function body (?) in an object of name myObj
// function body: --> the implemention of function as a module(?)
// module --> the nested functions containing logic
// some functions in module are publically accessible using 'this' scope
// this --> represents the current scope of function
var myObj = function() {
        // private function
        function print() {
            console.log('I am Private Print');
        }
        this.add = function(x, y) {
            print();
            return x + y;
        }; // terminate with ;
        this.sub = function(x, y) {
            print();
            return x - y;
        }
    }
    // using ref function
var obj = new myObj();
console.log('add = ' + obj.add(20, 10));
console.log('sub = ' + obj.sub(20, 10));

// myObj.prototype --> the new extended scope for myObj to add extension methods
// in an exisiting object 
myObj.prototype.mult = function(x, y) {
    return x * y;
}
console.log(obj.mult(200, 300));

console.log(typeof(obj));