"use strict"                    // When we use this we have to give "var", "let" and "const" to each variable name's otherwise it's give an error.


// Variabes can store some information
// We can use this information later
// We can change that information later

// Declare variable

 var firstName = "Harshit"      // If we don't give var here still it's works
 var lastName = "Singh"

//  Use a variable

console.log(firstName + " " + lastName);

// Change value

firstName = "Ankit"             // We cvan also decleare var + variable name 

console.log(firstName + " " + lastName);



// Rules for naming variables

// Naming variables: - In How many ways we can give the variavle names, at the starting

var _myName = "Harshit";        // 1) By using underscore( _ ) at the starting
var _1my__Name = "Ankit";       // 2) By using underscore( _ ) + Number at the starting
var $myName = "Web Developer";  // 3) Bu using Dolar sign ( $ ) at the starting
var myName1 = "Full Stack Developer";  // 3) Bu using number value ( 1 or any number ) at the at the end or at the middle but not in start

console.log(_myName);


// How many ways we can't start the variable name

// 1) By using @ at the starting and ending
// 2) By using % at the starting and ending
// 3) You cannot use spaces between the variables
// 4) You cannot start with a number 
// example's :- 
// 1values (invalid)
// values1 (valid)