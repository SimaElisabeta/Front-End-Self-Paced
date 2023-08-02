/*
FUNCTION DECLARATION VS FUNCTION EXPRESSION:
    - Function Declaration (FD) -> FD declares a function and is subject to hoisting
    - Function Expression (FE) -> FE stores a function as a variable’s value, but only variable declaration is subject to hoisting, NOT initialling with a value


THERE’RE SEVERAL WAYS TO DECLARE A FUNCTION IN JAVASCRIPT:
    - Function Declaration (+ anonymous function)
    - Function Expression (+ named function expression)
    - IIFE – Immediately Invoked Function Expression
    - Arrow Function
    - Constructor Function

    1. FUNCTION DECLARATION:
            NAMED:
        function foo (string) {
            return string.split(' ').map(word => word[0]).join('')
        }

            ANONYMOUS:
        function (string) {
            return string.split(' ').map(word => word[0]).join('')
        } 
        //Result Uncaught SyntaxError...
        We can use anonymous functions only:
            * In callbacks
            * When assigned to a variable
            * In IIFE

        
    2. FUNCTION EXPRESSION:
            NAMED:
        const baz = function foo (string) {
            return string.split(' ').map(word => word[0]).join('')
        }

            ANONYMOUS:
        const bar = function (string) {
            return string.split(' ').map(word => word[0]).join('')
        }
        // Here it is working, because we’re using an anonymous function declaration & assigning it to a variable!
    

    3. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION):
        - As the name implies, we’re declaring AND immediately calling(invoking) the function
        (function foo (string) {
            return string.split(' ').map(word => word[0]).join('')
        })('The skyes are blue')
        // return = 'Tsab'


    4. ARROW FUNCTION:
        - Arrow functions support a shortened syntax:
                const foo = (string) => {
                    return string.split(' ').map(word => word[0]).join('')
                }
            * We can drop the () if there is only 1 argument
                const foo = string => {
                return string.split(' ').map(word => word[0]).join('')
                }
            * We can drop the { return…} if the function only returns a statement
                const foo = string => string.split(' ').map(word => word[0]).join('')
                


FUNCTIONAL PROGRAMMING IS DECLARATIVE:
    IMPERATIVE:
        const arr = [1, 2, 3];
        const arrLength = arr.length;
        const arrPlusOne = [];
        
        for(let i=0; i<arrLength; i++)
            {
                arrPlusOne.push(arr[i]+1);
            }
    
    DECLARATIVE:
        const arr = [1, 2, 3];
        const addOne = val > val+1;
        const arrPlusOne = arr.map(addOne);



FUNCTION COMPOSITION:
    - Function composition is the process of combining two or more functions to produce a new function. 
    Composing functions together is like snapping together a series of pipes for our data to flow through.
    - Put simply, a composition of functions `f` and `g` can be defined as `f(g(x))`, which evaluates from the inside out — right to left. 
    In other words, the evaluation order is:
        `x` `g` `f`

    COMPOSITION EXAMPLE:
        - We can easily achieve `single responsibility` by composing functions
        - Composing improves reusability – we can create small, reusable functions and chain them together to achieve a more complex logic

        function log(someVariable) {
            console.log(someVariable);
        }

        function doSomething(thing) {
            thing();
        }

        function sayHelloWorld() {
            const message = "Hello World!";
            log(message);
        }
    
        doSomething(sayHelloWorld);



HIGHER ORDER FUNCTION EXAMPLE:
    - In mathematics, factorial is the product of a positive integer with all of the whole numbers lower than it
    - For example,  4! = 4x3x2x1 = 24
    - Therefore, to implement such logic (multiplying repeatedly), we can use recursion so that the multiplier function calls itself

    function factorial(x) {
        // if number is 0
        if (x == 0) {
            return 1;
        }

        // if number is positive
        else {
            return x * factorial(x - 1);
        }
    }

    - If we call a function way too many times, the call stack will grow until it hits a limit: the browser hardcoded stack size or memory exhaustion
    - In order to avoiding an infinite loop overflowing the call stack, we need to have an ‘escape condition’ for our recursion, 
    specifying when we get out of the loop, telling the function to stop calling itself
    - In our factorial example, `escape condition` will be the factorial argument reaching 0, at which point we just return 1 and return the result, 
    thus ending the recursion loop


MEMOIZATION USAGE EXAMPLE:
    - The Fibonacci sequence is a set of numbers that starts with a one or a zero, followed by a one, and proceeds based on the rule that each number 
    (called a Fibonacci number) is equal to the sum of the preceding two numbers.
    - It looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …
    - We can use recursion to easily achieve the result:
        const fib = n => {
            if (n <= 1) retunr 1
            return fib(n - 1 ) + fib(n - 2)
        }
    - But what will happen if we decide to calculate fib(150)?
        FIBONNACCI SEQUENCE CALCULATION EXCEEDING CALLSTACK -> we will get an error at some point
        We are doing the same calculations multiple times!
    
    - Now we are storing the calculations’ results in the `memo` object:
        const fib = (n, memo) => {
            memo = memo || {}

            if (memo[n]) return memo[n]
            if (n <= 1) return 1

            return memo[n] = fib(n-1, memo) + fib(n-2, memo)
        }

*/

// FD - Function Declaration
makeBread(2);
function makeBread(qty) {
    return '🍞'.repeat(qty);
}


// FE - Function Expression
// this will NOT work:
makeBread(2);
var makeBread = function(qty) {
    return '🍞'.repeat(qty);
}
// this will work only:
var makeBread = function(qty) {
    return '🍞'.repeat(qty);
}
makeBread(2);