/*
ASSIGNMENT OPERATORS
- The assignment operator in JavaScript is denoted by the "=" sign. First, the value of the expression on the right side is calculated (after the "=" sign), 
then this value is assigned to the variable, which is placed on the left side.
    let a = 5;

- The assignment operator can be combined with any arithmetic operator and get compound assignment operators:
    * += -> a+=b; (variable a is assigned the result of addition a and b)
    * -= -> a-=b; (variable a is assigned the result of the subtraction b from a)
    * *= -> a*=b; (variable a is assigned the result of the product a and b)
    * /= -> a/=b; (variable a is assigned the result of division a by b)
    * %= -> a%=b; (variable a is assigned the remainder of the division a by b)

COMPARISON OPERATORS
- In JavaScript, as in other programming languages, comparison operators return a boolean data type. That is, the result is always true or false.
- In JavaScript, comparison always converts the data to a number. In addition to string comparison and strict equality (inequality).

    Comparison operator:	    Example:             Returns true if...
        >	                    a > b	                а is greater than b
        >=	                    a >= b	                а is greater than or equals b
        <	                    a < b	                а is less than b
        <=	                    a <= b	                а is less than or equal b
        ==	                    a == b	                а equals b
        ===	                    a === b	                а equals b (without type casting)
        !==	                    a !== b	                а is not equal to b (without type casting)

    * Equality operator == first converts the operands to the same data type, and then compares them. For example,
        console.log(0 == "0"); //result: true
    * Strict Equality Operator === It compares without casting data types. If the operands are of different types, then the result is false.
        console.log(0 === "0"); //result: false
    * Strictly not equal !== The strictly not equal operator returns true if the operands are not equal or if their types are different.
        console.log(5!== '5'); //result: true
    * Operator greater than > The greater than operator returns true if the value of the left operand is greater than the value of the right operand.
        console.log(4 > 3); //result: true
    * Greater than or equal operator >= The greater than or equal operator returns true if the value of the operand on the left is greater than or equal 
    to the value of the operand on the right.
        console.log(4 >= 3); //result: true
    * Operator less than < The less than operator returns true if the value of the operand on the left is less than the value of the operand on the right.
        console.log(3 < 4); //result: true
    * Less than or equal operator <= The less than or equal operator returns true if the value of the operand on the left is less than or equal to the 
    value of the operand on the right.
        console.log(3 <= 4); //result: true

    !Remember: When comparing in JavaScript, some data types are not converted to numeric type:
        console.log( undefined > 0 ); //result: false
    !Remember: When applying the equality operator "==" to null or undefined, there is no numerical conversion because 
    null can only be equal to null or undefined, and nothing else. NaN is not equal to anything, even to itself!!!
        NaN !== NaN //result: true


        
*/

console.log(1 == "1"); //result: true

