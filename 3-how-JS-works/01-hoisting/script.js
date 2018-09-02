///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1990); // 28

function calculateAge(year) {
    console.log(2018-year);
}

retirement(1990); // This will not work

var retirement = function(year) {
    console.log(65-(2018-year));
}

console.log(age); // undefined
var age = 30;

function foo() {
    var age = 65;  
    console.log(age); // function context: 65
}
foo();
console.log(age); // global context: 30
