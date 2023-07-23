/*
- In JavaScript, null is an object that represents the intentional absence of any object value.

    Here's an example of a null object:

    let myObj = null;
    console.log(typeof myObj); // Output: "object"
    In this example, we have assigned the value of null to the variable "myObj". When we use the typeof operator to check the type of "myObj", it returns "object". 
    This is because null is considered an object in JavaScript.

- It's important to note that null is not the same as undefined. Undefined means that a variable has been declared but has not been assigned a value, 
whereas null is an intentional absence of any object value.



Definition of Data Type:
- Data type in a programming language is used to specify values, which a variable can take and what operations will be available on it. The data type also 
determines how the variable is stored in program memory. In addition, the use of data types allows to rationally allocate memory during program execution 
and improve code reliability.

- There are two types of data in JavaScript: primitive data type (elementary) and non-primitive (reference, object) data type:
* Primitive data types: undefined, BigInt, String, Symbol, null, Number, Boolean.
* Non-primitive (Reference, Object) data types: Object, Array, Function.



Boolean:
- The Boolean data type can have only two values: «true» or «false». It is useful in controlling program flow using conditional statements 
like if else, switch, while, etc.
    let a = true;
    let b = false;



Number:
- There was only one data type in JS for storing numeric values for a long time — Number. It allows to store integer and fractional numbers 
in the range from −(253 − 1) to (253 − 1).
    let a = 1;
    let b = 0.1;

    * Rounding Features
    - JavaScript Numbers are always stored as double precision floating point numbers, following the international standard IEEE 754-2008 and 
    in this case the rounding is used. This feature leads to the following situations:
        let a = 0.1;
        let b = 0.2;
        let sum = a + b; //Result 0.30000000000000004

    - It is necessary to use rounding to avoid such cases. Another method for obtaining the required number of characters — method toFixed(); 
    It converts the number to a string with the valid number of characters without rounding:
        let rate = 5.123;
        console.log(rate.toFixed(2)); //Result "5.12"

- Unlike many other languages, operations on numbers in JS do not result in an explicit error message, instead special values are used: 
Infinity, -Infinity and NaN (Not-A-Number):
    let a = 1/0;  //Result Infinity
    a = -1/0; //Result -Infinity
    a = Number('Hello word'); //Result NaN 



BigInt:
- With the expansion of the scope of JavaScript usage, it turned out that for solving individual problems related to BigData or cryptography, 
the range of values of the Number type is not enough to store large numbers. To solve this problem, a new data type has been added to 
JavaScript — BigInt, which has allowed to work with integers of arbitrary size.
- To indicate the use of the BigInt type, you have to add a literal “n” at the end.
    let a = 45454545454545454545;
    typeof a; //number

    let b = 45454545454545454545n;
    typeof b; //bigint



Symbol:
- Symbol is a data type that can be used to generate unique values, which are identifiers in variables of other data types (for example, objects). 
Creation of variables of the Symbol type:
    let a = Symbol();
- It is also possible to create a symbol with a description of Symbol("Description"); :
    let a = Symbol("Symbol");
    let b = Symbol("Symbol");
!Important: Notice, the variables a and b are not equal despite the same creation. This feature is precisely provided by the Symbol data type.



String:
- String is used to store strings. Strings in JavaScript must be enclosed in single or double quotes:
    const string1 = "Hello word";
    const string2 = 'Hello word';

!Remember: From the point of view of the program, there is no difference what kind of quotes to use. 
But we recommend to use double quotes in HTML and CSS documents and to use single quotes in JS.

- It is also possible to embed the value of other variables into the string (is called a template string or template literal). 
To do this, the following syntax is used:
    let firstName = "John";
    let secondName = "Doe";
    let message = `First name is ${firstName}, second name is ${secondName}`;
    console.log(message);

- If the string contains a quote, it must be separated (escaped) using the slash \. Escaping shows the interpreter that a quote is 
being used in the text, rather than an end-of-line is found.
    console.log("Hotel \"California\"");

- Let's consider the following data types: null and undefined:
    * null - indicates that an empty value has been received. This situation can be when we are trying to get an object through the 
    interaction API with other services, but it does not exist. Literal null can also be used to deliberately assign an empty value:
        let a = null;
    * undefined - indicates that the value of the variable is not defined:
        let a; // 'undefined'
        a = 1; //Type number



Object:
- Object in JavaScript is a set of properties and methods. Objects are useful for grouping data and working with it.
Let's consider an example of storing user information:
    const user = {
        firstName: 'John',
        secondName: 'Doe',
        age: 20
    };
- Objects can also store methods (functions) for working with data. For example, a method can be added, which outputs 
the user's full name based on the firstName and secondName properties.
- The values of object properties can be received through a dot or square brackets. The dot variant is simpler and more commonly used:
    console.log(user.firstName);
    console.log(user["firstName"]);

- Another advantage of objects is the ability to create variables of the same type with different values.
Objects often require an identifier. In this case, the data type Symbol is useful, which have been considered above.
    let id = Symbol("id");
    const user = {
        [id]: 1,
        firstName: 'John',
        secondName: 'Doe',
        age: 20
    };
    console.log(user[id]); //1



Operator typeof:
- To define the type of a variable, the string typeof operand operator is used, which returns the type of the variable as a string:
    * boolean, number, string, object, function, null, undefined
    let a = 1;
    typeof a; //Result - "number"

*/