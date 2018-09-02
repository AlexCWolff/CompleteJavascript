///////////////////////////////////////
// Lecture: The this keyword

// In function calls, 'this' points at the global object ('Window' object). In method calls, 'this' points to the object calling the method. 'this' is not assigned a value until a function where it is defined is called. 

console.log(this); // Returns the 'Window' object

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2018-year); // 33
    console.log(this); // 'Window' object
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // 'john' object
        console.log(2018-this.yearOfBirth) // 28
        
        /*
        function innerFunction() {
            console.log(this); // 'Window' object
        }
        
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

// Method borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge(); // 'mike' object; 34