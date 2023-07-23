/*
Function declaration:
    - The keyword is used to return the result of a function execution. return. If return absent, function implicitly returns a value undefined.
    function calcSum(a, b) {
        return a + b;
    }

    Function expression:
        - Function as "Function expression" is assigned to some variable, which is used further for the call. Such a function can be named or anonymous (unnamed).
        //Anonymous function
        var sum = function(a, b) {
            return a + b;
        };
        OR
        //Named function
        var sum = function calcSum(a, b) { 
            return a + b;
        };
        - Function expression is useful when a function is passed as an argument to another function. In this case, the function that is being passed 
        is called callback-function, and functions that either accept functions as an argument or return functions are called higher-order functions.

    Arrow functions:
        - In general a syntax of arrow function is the following:
            var arrowFunction = (parameter1, parameter2,….) => {body of the function}
        - In some cases, it can be simplified:
            * For a single operation function:
                var sum = (a, b) => a + b;
            * For a function with one argument:
                var sqr = value => value*value;
            * Without arguments, but multiple lines (for example):
                var log = () => {
                    console.log('Hello');
                    console.log('Word');
                };



Function call:
    - Function declaration:
        function calcSum(a, b) {
            return a + b;
        }
        console.log("Result ", calcSum(2, 3));
        console.log("Result ", calcSum(5, 6));

    - Function expression:
        var calcSum = function(a, b) {
            return a + b;
        };
        console.log("Result ", calcSum(2, 3));
        console.log("Result ", calcSum(5, 6));
    
    - In the above examples, we have called the same function several times with different arguments. Note that for Function declaration, 
    the function can be called before the declaration!
        console.log("Result sum", calcSum(2, 3));
        function calcSum(a, b) {
            return a + b;
        }

    - Note also that the number of parameters, when describing a function and when calling it, may differ. If fewer parameters are 
    passed when calling the function than are present in the description, the non-passed parameters will be equal to undefined.
        function showName(firstName, secondName) {
            console.log("First Name - ", firstName);
            if (secondName == undefined) {
                console.log("Second name is not specified");
            } else {
                console.log("Second Name - ", secondName);
            }
        }
        showName("John", "Doe");
    - Default parameters. They allow to set the value, which is be used if the parameter was not passed when calling the function:
        function showName(firstName='John', secondName='Doe') {
            console.log("First Name - ", firstName);
            console.log("Second Name - ", secondName);
        }
        showName("William", "Smith");
    
    - Self-calling Functions:
        * In some cases, the function is required to be called immediately. For such a purpose, the following syntax is used:
            (function (name) {
                console.log("Hello ", name);
            })("Student");
    VS
    - Function expression:
            var hello = function (name) {
                console.log("Hello ", name);
            };
            hello("Student");



Function Scope:
    - f a variable is declared inside a function, then it cannot be accessed from outside the function. Based on this, if you 
    need a variable only for a function, then it must be declared in the function scope.
    
    var a = 1;                          // Variable a is defined in the global scope.
    function foo() {
        var b = 2;                      // Variable b is defined in function scope foo().
        function innertFoo() {
            var a = 2;                  // Variable a is defined in function scope innertFoo(). The value of the variable a from the global scope is ignored.     
            if (true) {
                let a = 3;              // The variable a is declared with the let keyword. Scope is a block if. So let a = 3; is only available in if scope!
            }
            return a + b;               // Variable b is not be found in scope innertFoo(). The variable search continues in the scope of the function foo().
        }
        return innertFoo() + a;
    }
    console.log(foo()); // Result: 5



Function Naming Guidelines:
    - Correct function naming makes the code easier to read and maintain. Let's give some recommendations on the names of functions:
    Beginning of the name	                           Description	                                                    Example
        is...                       Checks for some value, returns boolean data type                                isValid(password)
        show...                     Outputs data                                                                    showLog()
        get...                      Returns data after some transformations                                         getUserName()
        calc...                     Calculates mathematical expressions                                             calcSum(a, b, c)

*/


var f = function printLog() {
    console.log('My function');
    return 'hello';
    }
f(); // 'My function'
f; // nothing



function showName(firstName='John', secondName='Doe') {
    console.log(firstName, secondName);
  }
showName("Robert"); // Robert Doe



var a = 1;
function foo() {
  function innertFoo(b=3) {
    let a = 3;
    return a + b; // 3 + 3 = 6 OR something else if innertFoo() gets a parameter when it is called
  }
  return innertFoo(2) + a; // innertFoo(2)->5 + a->1 = 6
}
console.log(foo());



function sum(a, b){
    a + b;
  }
let result = sum(2, 5);
console.log(result); // undefined - because function sum() does not return anything!
