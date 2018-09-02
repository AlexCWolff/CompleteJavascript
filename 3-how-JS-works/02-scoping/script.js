///////////////////////////////////////
// Lecture: Scoping

// JS only creates scopes for functions, not flow control blocks. JS also has lexical scoping, inner functions can access outer function scope. 

// Show the difference between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
} // 'Hey!Hi!Hello!'

function third() {
    var d = 'John';
    console.log(a + b + c + d);
} // Uncaught ReferenceError
