/* 

Variables:
- Identifier - is a name of the variable, function, class, or other element of the language. 
Identifiers must begin with letters, a dollar sign ($), or an underscore (_). 
IT CAN NOT START WITH NUMBERS! But they can contain numbers and, if necessary, symbols

- Literals - The variable in the code is initialized with some value, which is called literal. It can be a string, a number, a boolean, or a more complex structure — object or array 

Constants:
- To define a constant, unchanged variable, instead of keyword let the const must be used. The value of the constant cannot be changed.
!Important: The constant must be initialized obligatorily when it is declared.


User interaction – alert, confirm, prompt:
- JS provides a set of standard mechanisms for user interaction. This includes functions for creating modal windows alert(), confirm(), prompt(). A function in JS takes one or more 
parameters as input and returns a specific value. A modal window is a window that blocks the Web page until it is closed.
EXAMPLES:
    * alert() is a function to call a modal window in the browser that displays a message to the user. So, the code alert("Hello world"); will display a browser window and pause 
    further script execution until the user clicks the "OK" button
    * Function confirm() displays a modal window with question text and two buttons: OK and CANCEL. The execution result will be true if the OK button is pressed. 
    In other cases — false.
    * prompt() is a function that shows messages and requests for text input from the user. It returns the typed text in the input field, 
    or null if the «Cancel» button was pressed or Esc from the keyboard.


*/

// example for variable:
let myVar; // variable declaration
myVar = 1; // variable initialization
console.log(typeof(myVar)); // value output


// example for constant:
const PI = 3.1416;
console.log(typeof(PI));
console.log(PI);


// let greeting = alert("Hello World");
// console.log(greeting);

// let isTheBiggest = confirm("Is he the biggest here?", "");
// console.log(isTheBiggest ); 
//true if ok; false if cancel

// let yourName = prompt("Input your name", "");
// if (yourName != null) {
//     console.log("Your name is " + yourName);
// } else {
//     console.log("Cancel was pressed");
// }

var t = 'Hello))';
console.log(t)