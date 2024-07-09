// 1) Var Keyword

// 1)var declarations are globally scoped or function/locally scoped.
// 2)The scope is global when a var variable is declared outside a function. This means that any variable 
// that is declared with var outside a function block is available for use in the whole window.
// 3) var variables can be re-declared and updated

// Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Example:- 
        // var greeter;
        // console.log(greeter); // greeter is undefined
        // greeter = "say hello"


// Problem with var

        // var greeter = "hey hi";
        // var times = 4;

        // if (times > 3) {
        //     var greeter = "say Hello instead"; 
        // }
        
        // console.log(greeter) // "say Hello instead"





// 2) Let keyword

// Declare variable with let keyword

// 1) let is preferred for variable declaration.
// 2) let is block scoped
    // a) A block is a chunk of code bounded by {}.
    // b) Anything within curly braces is a block.
// Example:-

        // let greeting = "say Hi";
        // let times = 4;

        // if (times > 3) {
        //     let hello = "say Hello instead";
        //     console.log(hello);// "say Hello instead"
        // }
        // console.log(hello) // hello is not defined

// 3) let can be updated but not re-declared.

// Example:- 
        // let greeting = "say Hi";
        // greeting = "say Hello instead";
        // console.log(greeting);

// But this will return an error:

        // let greeting = "say Hi";
        // let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// However, if the same variable is defined in different scopes, there will be no error:

        // let greeting = "say Hi";
        //     if (true) {
        //         let greeting = "say Hello instead";
        //         console.log(greeting); // "say Hello instead"
        //     }
        //     console.log(greeting); // "say Hi"




// 3 Const keyword

// 1)Variables declared with the const maintain constant values.
// 2) const declarations are block scoped
// 3) const cannot be updated or re-declared
// Example:- 
        // const greeting = "say Hi";
        // greeting = "say Hello instead";// error: Assignment to constant variable. 

// Nor This

        // const greeting = "say Hi";
        // const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared