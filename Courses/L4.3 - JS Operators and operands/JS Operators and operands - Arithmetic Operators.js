/*

Unary operator:
-  Is applied to one operand. For example, the unary minus operator "-" replaces a sign of the variable to the opposite:
    let a = -1;

Binary operator:
- Is applied to two operands. For example, the minus operator can be either unary, i.e. applied to one operand (makes the number negative), or binary (subtraction operation):
    let a = -1; -> (unary minus)
    let b = 2;
    console.log( a - b ); -> (binary minus)

By purpose, operators are divided into arithmetic, logical, comparison, assignment and others. Let's consider each of them in more detail.



ARITHMETIC OPERATORS:
Addition operator  “+”:
    - The addition operator "+" in JavaScript can be binary or unary. Also, this operator has multiple meanings.
        console.log(5 + 2);
    - String addition (concatenation operation):
        let result = 'Arithmetic ' + 'operators';
        console.log(result);

    - Operator “+” can be as an *addition operator, a *concatenation operator, or an explicit *conversion operator, depending on the location of the operator in the expression 
    and the data types of the operands. Thus the operator “+” converts the result:
        Converting to strings:
        * If at least one of the operands to which the “+” is applied, is a string, the second operand is also converted to a string and the result is also a string.
            let result = 3 + '5'; //result: 35
            //or
            "35"let result = '3' + 5; //result: 35
        * As you can see in the example, the string operand can be anywhere. Let's consider another example with several binary operators “+”.
            let result = 2 + 3 + '5'; //result: 55
            !Remember: The addition operations are executed from the left to right, i.e. 2 + 3 executes first, since there are two operands of a number, then the result is a number 5, 
            and then 5 + '5'. Here one of the operands is a string, so the second one is also converted to a string and the result is a string '55'.
        
        Converting to number:
        * If unary “+” is before a string, then an attempt is made to convert string to number. For example:
            let str = +'3' + 5; //result: 8
            !Remember: Unary “+” converts ‘3’ to number, and then the addition operation of numbers 3 and 5 is executed.

Substraction operator  “-”:
    - The subtraction operator only applies to numbers and can be binary or unary. Binary subtracts one number from another, and unary changes the sign of the number to the opposite.
        let result = 5 - 3; //result: 2

Multiplication operator  “*”:
    - Binary multiplication operator “*” executes a multiplication of two operands and only applies to numbers.
        let result = 5 * 3; //result: 15

Division operator  “/”:
    - Binary division operator “/” executes a division of the left operand by the right and is applied only to numbers.
        let result = 5 / 3; //result: 1.666666666666667

Division operator  “%” (restul impartirii):
    - Binary operator remainder of division “%” returns the result of integer division of the left operand by the right, and is applied only to numbers.
        let result = 5 % 3; //result: 2
        //OR
        let result = 5.7 % 3; //result: 2.7
        //OR
        let result = 6 % 3; //result: 0

Exponentiation operator  “**”:
    - Binary exponentiation operator “**” the left operand is to the power of the right operand.
        let result = 5 ** 3; //result: 125

Increment and decrement operator  “++x, −−x, x++, x−−”:
    - Unary increment operators increase variable by one and decrement operators decrease variable by one and are divided into prefix and postfix.
        x = x + 1;
        * Prefix increment:	        ++x	Increment x, then participate in x expression
        * Prefix decrement:	        −−x	Decrement x, then participate in x expression
        * Postfix increment:	    x++	x is in the expression, then increment x
        * Postfix decrement: 	    x−−	x is in the expression, then decrement x
    
    - Consider an example of the postfix increment. Compare 2 ways to use it:
        let a = 5;
        a++;
        console.log(a); //result: 6

        let a = 5;
        console.log(a++); //result: 5
        !Remember: Incrementing a variable and outputting it to the console are done on the same line. According to the priority of operations, 
        first the value of the variable is output in the console, and then changed.

!Important: The increment and decrement operators are applied only to variables. These operations are not applied to numeric literals 
(i.e. to numbers written explicitly. For example, 5, 10, 3.14, etc.)

!DE RETINUT: 
    * daca avem ++a intr-un calcul atunci se va exacuta operatia de a+a iar valoarea lui a se va schimba deodata cu rularea codului
    * dar daca avem a++ atunci prima data se va rula codul, valoarea lui a ramane aceeas si abia la final dupa evaluarea expresiei se va executa operatia a+a
    "However, the updated value of "a" will not be stored in the variable a until after the expression has been evaluated."

*/

// let a = 5;
// a++;
// console.log(a); //result: 6

let a = 5;
console.log(a++); //result: 5
console.log(a); //result: 6