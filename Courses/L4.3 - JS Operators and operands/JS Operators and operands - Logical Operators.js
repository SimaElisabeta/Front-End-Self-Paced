/*
LOGICAL OPERATORS
- There are three logical operators in JavaScript: || (OR), && (AND) and ! (NOT).
- Unlike strongly typed programming languages, in JavaScript these operators can be applied to values of any type, and the result can also be any type.

- "&&" AND It returns the value of the first operand if it evaluates to false. Otherwise, it returns the value of the second operand:
    1 && 0 //result: 0 (1 = true, deci trece la urmatorul numar, daca ar fi fost fals atunci rezultatul era primul numar si il da ca si rezultat fara sa mai evalueze)
    1 && 6 //result: 6 (ambele evaluari sunt adevarate deci rezultatul este 6 deoarece daca se evalueaza ca fiind adevarata atunci va rezulta intodeauna al 2-le numar)
    NaN && 1 
- "||" OR The operator returns the value of the first operand if it evaluates to true. Otherwise, returns the value of the second operand 
or the next truthy value it encounters.
    1 || 0 //result: 1
    1 || 6 //result: 1
    0 || 6 //result: 6

- "!" NOT operator is represented by an exclamation point !.
    * This operator takes only one argument for calculations, and then executes such operations:
    1. Casts the received argument to a boolean type true/false.
    2. Returns the opposite value.
        alert( !true ); //result: false (il evalueaza si il transforma in varianta opusa)
        alert( !0 ); //result: true (il evalueaza si il transforma in varianta opusa)
    * Double NOT is used to convert values to boolean type:
        alert( !!"non-empty string" ); //result: true (il evalueaza si il reprezinta intr-o valoare bool)
        alert( !!null ); //result: false (il evalueaza si il reprezinta intr-o valoare bool)


PRIORITY OF OPERATORS
- Operator execution priority determines the order, in which these operators are executed when an expression is evaluated. The developer can influence on the 
execution priority of statements using parentheses.
    let a = 3;
    let b = 5;
    let c = ++a + b++;
    console.log(c); //result 9

    1. ++a increments the value of a by 1, resulting in 4.
    2. b++ increments the value of b by 1, resulting in 6. However, the value of b used in this expression is still 5, because the increment happens 
    after the expression is evaluated.
    3. ++a + b++ adds the values of 4 and 5, resulting in 9. The value of b is now 6.

    Therefore, the variable c is assigned the value of 9.



TYPE CONVERSION
- Type conversion is the process of converting a value from one type to another. Any data type, be it a primitive type or an object, 
can be converted to another type.
!Remember: that primitive types are: number, string, boolean, null, undefined, Symbol, BigInt.
- Type conversion can occur explicitly or implicitly:
    * explicit - If you want to convert a string to a number and put a sign “+” before the string, then it is called 
    * implicit - If conversion between different types happens automatically — this is an implicit type conversion.
    For example, in a simple comparison of two operands 0==’0’. a string will be converted to a number.

* Boolean Conversion
- For explicit conversion to a boolean value, use the Boolean() function or double logical NOT !!
- Implicit conversion occurs in boolean context if (value) { … } or when applying logical operators (|| && !).
- The rules for converting to a logical (boolean) data type are given in the table:
    * Undefined -> Returns false.
    * Null -> Returns false.
    * Boolean -> Returns a value.
    * Number -> If a number is +0, -0, or NaN, then returns false; in other cases it is true.
    * String -> If the string is empty, i.e. its property length=0 then returns false; otherwise — true.
    * Symbol -> Returns true.
    * BigInt -> If the number is 0n, returns false; otherwise returns true.
    * Object -> Always returns true.
    EXAMPLE: 
        let a = '5';
        let b = '';
        Boolean(a) //result: true
        Boolean(b) //result: false

        let a = 5;
        let b = 0;
        !! a //result: true
        !! b //result: false



NUMBER CONVERSION
- To explicitly convert to a number, you need to apply the Number() function, just like we did with Boolean().
- The implicit conversion is somewhat more confusing, as it is called in more cases when:
    * comparison operators (>, <, <=, >=);
    * binary operators (| & ^ ~);
    * arithmetic operators (- + * / % ). Note, the binary operator + does not cause a numeric conversion if one of the operands is a string;
    * unary operator + ("+" converts an operand to a number, but "-" negates an operand);
    * the non-strict equality operator == (including !=). Note that this operator does not cause a numeric conversion if both operands are strings.
- The rules for converting to a numeric data type are given in the table:
    * Undefined -> Returns NaN.
    * Null -> Returns +0.
    * Boolean -> If the value true, then 1 is returned. If false, +0 is returned.
    * Number -> Returns value without conversion.
    * String -> Conversion algorithms are discussed above.
    * Symbol -> Throws an error TypeError exception.
    * BigInt -> Causes an error TypeError exception.
    * Object -> If the object has an internal property primValue with a numeric value, then this number is returned...
    EXAMPLE:
        let a = undefined;
        Number(a); //result: NaN
        let b = NaN;
        Number(b); //result: NaN
        let c = "7"; 
        Number(c); //result: 7



CONVERT TO STRING
- To explicitly cast a value to a string, you must apply the String() function to it.
- The implicit conversion will be called by the binary operator + when one of the operands is a string.
- The rules for converting to a string data type are given in the table:
    * Undefined -> Returns "undefined"
    * Null -> Returns "null"
    * Boolean -> If the value — true, returns "true". If the value — false, returns "false".
    * Number -> The number is returned in quotes.
    * String -> Return value.
    * Symbol -> Causes an error TypeError exception.
    * BigInt -> Returns! value BigInt in quotes.
    * Object -> If the object has an internal property primValue then the value of that property will be returned...



*/


// let a = 3;
// let b = 5;
// console.log(b)
// let c = ++a + b++;

// let result_b = 'b is now: '
// console.log(result_b + b)
// console.log(c)

// let a = "75";
// let b = "75a";
// console.log(Number(a));

// console.log(Number(b));



// let a=5; 
// let b=7;
// let c=a++ + b;
// // 6 + 7 => c = 12
// // a = 6, b = 7, c = 12
// console.log(a,b,c);

// console.log(!1 && undefined && 'test');
// // false, false , true => false

// console.log(7 % (4 || !1));
// // 7 % (4) => 3
// // - "||" OR The operator returns the value of the first operand if it evaluates to true. Otherwise, returns the value of the second operand 
// // or the next truthy value it encounters.

// !!'false' === !!'true'   -> result: true => !!'false' and !!'true' -> false === false
// true + true              -> result: 2
// 0.2+0.7 == 0.9           -> result: false => 0.2 + 0.7 = 0.8999999999999999
// 3 > 2 > 1                -> result: false
// null >= 0                -> result: true
// null > 0                 -> result: false
// true=="true"             -> result: false
// 0.2 + 0.6 == 0.8         -> result: true => 0.2 + 0.6 = 0.8


let result = +("165"+"1") + 10;
// 1651 => 1651 + 10 => 1661
console.log(result);
