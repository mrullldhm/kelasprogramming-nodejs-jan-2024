//Example 1
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye); // Passing `sayGoodbye` as a callback to `greet`


//Example 2
function mathCallback (callBack) {
    console.log("The Answer")
    callBack()
}

function add (a,b) {
    console.log (a + b)
}

mathCallback(function(){
    add(4,5)
})
