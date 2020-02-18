// close function aka js functions
// to use MyClass as a class-object, it must return a JSON object aka 
// object literal
function MyClass() {
    function private() {
        console.log('Private');
    }
    // public functions
    return {
        changeCase: function(str) {
            private();
            return str.toUpperCase();
        },
        getLength: function(str) {
            private();
            return str.length;
        }
    }
}
// defining instance
var obj = new MyClass();
console.log(obj.changeCase('James Bond'));
console.log(obj.getLength('James Bond'));
console.log(typeof(MyClass));