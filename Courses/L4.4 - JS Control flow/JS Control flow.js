/*
Conditional Statement IF:
    let weather = 'rain';
    if (weather==='rain'){
        console.log('Take an umbrella');
    }


Operator IF–ELSE:
- Operator if–else also allows the definition of a set of statements, which are executed if the condition is false. 
    let day = prompt('Enter departure date');
    if (day%2===0) {
        console.log('Departure from Boryspil airport'); 
    } else {
        console.log('Departure from Zhuliany airport'); 
    }


Operators Chains if–else–if–else:
- Operator «if–else» allows to nest other operators «if» or «if–else». Such chains are used to combine else and if, to test different mutually exclusive variants.
- When creating a chain of operators if–else–if–else such rules are used:
    * operator if may not have or have only one else, which comes after any else–if;
    * operator if may not have or have many else–if and they must come before it else;
    * after any one else–if is executed (i.e. the result of the condition is true), then none of the remaining else–if or else is not checked.
    EXAMPLE:
    let month = prompt('enter current month number');
    if(month==12||month==1||month==2){
        console.log(' Winter. The ski tours are recommended');
    } else if(month==3||month==4||month==5){
        console.log(' Spring. Hikes and excursions to parks are recommended');
    } else if(month==6||month==7||month==8){
        console.log(' Summer. The sea tours are recommended');
    } else if(month==9||month==10||month==11){
        console.log(' Autumn. The city tours are recommended');
    } else {console.log(' Such month doesn't exist ')}


Ternary operator:
- Conditional ternary (triple) operator is a unique operator in JavaScript that takes three operands. This operator is often used in place of the regular 
operator if, when in block if {} only the assignment operator is found. The result of executing this operator must be stored in a variable (constant) 
or used in the operator return.
- Algorithm: If the condition is true, execute the expression 1 that follows the sign “?”. If the expression is false, execute the expression 2 
that comes after the sign “:”.
    Syntax: condition ? expression1 : expression2 
    EXAMPLE with if:
    let day = prompt('Enter departure date');
    if (day % 2 == 0) {
        console.log('Departure from Boryspil airport');
    } else {
        console.log('Departure from Zhuliany airport');
    }

    EXAMPLE with Ternary operator:
    airport = day%2==0 ? 'Departure from Boryspil airport' : 'Departure from Zhuliany airport';  
    console.log(airport);


Operator SWITCH:
- Unlike the operator if, operator switch applied to a known number of possible situations. The operator compares an expression against the values 
listed in the code block switch, and executes the corresponding statements. Command switch is often called a selection command.
- Value case cannot be duplicated. When executing the code, the appropriate one case is found first, value of which is equal to the value of the 
variable (strict comparison is used, ===) and then the statements corresponding to the current case. If appropriate one case doesn't exist, default 
block is executed. If there is not a block default, operators are executed immediately after switch.
- Operator break executes exit from the block switch. It can be in each case, but is not required. If the operator break is absent then the next 
instruction of the block is executed. switch.
- Operator default may or may not be present and may be placed anywhere in the construct.
    let distance = prompt('Enter distance');
    let transport = prompt('Enter the kind of transport');
    switch(transport){
        case 'bicycle': console.log(`Travel time - ${distance/10}`); break;
        case 'train': console.log(`Travel time - ${distance/100}`); break;
        case 'aircraft': console.log(`Travel time - ${distance/500}`); break;
    default: console.log('no such transport');
    }
- CONCLUSION:
    * Operator switch only checks for equality, while the operator if can evaluate the result of a boolean expression of any type and can check a range of values.
    * Operators if and switch can be interchanged.
    * Operator switch is more efficient/faster than a set of nested operators if.
    * If the number of variants is limited, the operator switch is used often rather than if.


*/

let weather = 'rain';
if (weather==='rain'){
      console.log('Take an umbrella');
}


let month = 13
if(month==12||month==1||month==2){
    console.log('Winter. The ski tours are recommended');
} else if(month==3||month==4||month==5){
    console.log('Spring. Hikes and excursions to parks are recommended');
} else if(month==6||month==7||month==8){
    console.log('Summer. The sea tours are recommended');
} else if(month==9||month==10||month==11){
    console.log('Autumn. The city tours are recommended');
} else {console.log("Such month doesn't exist")}


var b = 10;
if (b % 3 == 0) {
    var i = 10;
}
console.log(i); //undefined value



let distance = 12;
let transport = 'train';
switch(transport){
    case 'bicycle': console.log(`Travel time - ${distance/10}`); break;
    case 'train': console.log(`Travel time - ${distance/100}`); break;
    case 'aircraft': console.log(`Travel time - ${distance/500}`); break;
default: console.log('no such transport');
}



let month_2 = '3';
    switch (month_2) {
        case '12':
        case '1':
        case '2': console.log('winter'); break;
        case '3':
        case '4':        
        case '5': console.log('spring'); break;
        case '6':
        case '7':
        case '8': console.log('summer'); break;
        case '9':
        case '10':
        case '11': console.log('autumn'); break;
        default: console.log('such month does not exist'); break;
    }



// Exercise:

//1. What is stored in the variable?
var a = 5;
var test = 5 == a ? "Yes" : "No"; 
// prima data se evalueaza daca (5 == a), 
// daca este true atunci returneaza "Yes", dar daca este false atunci returneaza "No"
console.log(test) // "Yes" 


//2. What is output when executing the following code?
var b = false;
if (b == `0`) {
    console.log(`==`); //this will be printed
}
if (b === `0`) { 
    console.log(`===`); //this will NOT be printed
}



//3. What is output to the console?
var bool = new Boolean(false);
if (bool) {
    console.log(`Hello`); //this will be printed
} else {
    console.log(`Error`); //this will NOT be printed
}


//4. What value is output in the console?
var c = 3; 
switch (c) {
    default:
        c += 4;
    case 1:
        c += 2;
        break;
    case 2:
        c += 3;
        break;
    case 3:
        c = -1;
    case 4:
        c += 1;
        break;
    case 5:
        c += 3;
}
console.log(c); //9

/*
1. The variable c is assigned the value 3.
2. The switch statement starts evaluating the cases but doesn't find a match for c.
3. Since there's no case that matches c, it will go to the default case.
4. Inside the default case, c is incremented by 4, so now c becomes 7.
5. After executing the default case, the switch statement continues executing until it encounters a break statement. Since there is no break 
statement in the default case, it continues to the case 1.
6. The case 1 expression is not a comparison but simply a label indicating the code block to execute if the switch expression is equal to 1. 
However, in this case, it is executed regardless of whether c is equal to 1 or not because there's no previous break statement.
7. Inside the case 1 block, c is incremented by 2, so now c becomes 9
*/




//5. What is output of the code below?
console.log( null || 2 || undefined ); //2


//6. What is output of the code below ?
var x = 3;
{
    var x = 5;
} 
console.log(x);


//7. Choose a condition IF to test the fact that age is between 14 and 90 included:
if (age > 14 && age < 90);
if (age >= 14 && age <= 90); //this is correct
if (age >= 14 || age <= 90);