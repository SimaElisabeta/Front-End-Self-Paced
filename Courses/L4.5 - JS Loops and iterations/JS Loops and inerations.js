/*
Introduction:
- In JavaScript there are the following looping statements:
    * for - Loop with counter
    * while - Loop with precondition
    * do-while - Loop with postcondition
    * for...in - Loop through properties of objects
    * for ...of - Loop through iterable objects (for example, an array)

For Loop:
    for (let i=0; i<3; i++) {
        console.log(i);
    }
!Attention: There is no a semicolon after the closing brace.

- The loop variable in the third block (the block of change the loop variable) can be changed by any integer value and in any direction (increase or decrease).
    for(let i=0; i>-10; i-=3){
        console.log(`i= ${i}`);
    }
    Result: 
    i= 0
    i= -3
    i= -6
    i= -9

- The iteration variable of the loop can be not one obly variable, but several. In this case, all variables are written in the corresponding blocks separated by commas.
    for(let i=0, j=10; i<=j; i++, j--){
        console.log(`i= ${i} , j= ${j}`);
    }
    Result:
    i= 0 , j= 10
    i= 1 , j= 9
    i= 2 , j= 8
    i= 3 , j= 7
    i= 4 , j= 6
    i= 5 , j= 5

- In the loop for there is not requirement to fill the blocks in parentheses, but there must be semicolons that indicate them. One block, two or all three blocks 
can be empty. In this case, it is necessary to provide for the execution of these blocks in other places in the code or loop.
    * First block is not filled:
    - As you remember, in the first block, initialization of the loop variable occurs. This block, if it is full, is executed 1 time. It means that you can 
    initialize the loop variable before the construction for.
    let i=0; 
    for(  ; i<3; i++){ 
        console.log(i);
    }

    * The second block is not filled:
    - This block corresponds to exit condition. If it is not filled, then in the body of the loop it is necessary to provide a construction 
    that will stop the execution of the loop.
    ! Be attentive! If you do not provide an exit condition, you get an infinite loop.
    for(let i=0; ; i++){
        if (i===3) break;
        console.log(i);
    }

    * The third block is not filled:
    for(let i=0; i<3;  ){
        console.log(i);
        i++;
    }

    * 2 Blocks are not filled:
    - In the construction for any 2 blocks can be empty.
    let i=0;
    for( ; i<3; ){
        console.log(i);
        i++;
    }
    OR
    let i=0;
    for( ; i<3; ){
        console.log(i++);
    }

    * 3 Blocks are not filled:
    - In the construction for blocks can be filled separated by a semicolon.
    - The loop must contain any operations, which lead to an exit from the construction. Otherwise, the infinite loop occurs. i.e. a loop that never ends.
    for(  ;  ;  ){
        console.log("Infinite loop");
    }

    * Loop without body:
    let sum=0;
    for(i=1; i<=5; sum+=i++);
    console.log(sum); //result: 15

Despite the possibility of using different variants of loop for (with missing blocks or without body), we recommend using the full loop notation. 
If there is a need not to fill in the first and third blocks, then it is better to use other types of loops, for example, the loop while.


Loops with Pre- and Post-Conditions
- The usage of operators while and do-while is useful in cases where a repeat part of the operations is required, and the number of repetitions 
is unknown and depends on some condition, for example, on the data that the user enters.
- The main difference between operators while and do-while is that the operator body while may never be executed, while the body of the operator 
do-while is always executed at least once.

    * While Loop:
    let i=0;
    while(i<3){
        console.log(i++);
    }

    * Do-While Loop:
    let i; // Declaring a loop variable.
    do{
        i = Math.random(); // Using Math object and it's random method, a random number is obtained. The random method returns a random number from the rande 0 to 10.
        console.log(i); // Output the value of variable i to the console.
    } while (i<0.5); // The condition is chacked. If true is returned, than the body of the loop will be executed again.

    - If the condition expression in these statements has the value, which is true, the infinite loop is obtained. An infinite loop is a loop that never ends. 
    To exit such a loop, an exit operator break is required. It's better to avoid creating such loops.
    while(true){
        console.log("infinite loop");
    }
    OR
    do{
        console.log("infinite loop");
    } while(1);


Break and Continue Statements:
- Break and continue statements are operators, which allow to carry out the transition from the point where the operator is called to another part of the program.
    * break is used to exit a loop or switch operator.
    * continue is used to move to the next iteration of the loop.

Continue Operator:
- Operator continue is used in loop statements. It provides a transition to the next iteration of the loop, without completing the execution of the remaining 
operators of the current iteration of the loop, if the condition still equals true.
- For example, let's create a loop for 10 iterations. If the loop variable i is not a multiple of 4, then we output its value, otherwise we skip this operation 
for the current iteration:
    for(let i=0; i<10; i++){
        if (i%4==0) continue;
        console.log(i);
    }

- The main difference between break and continue is that break interrupts the execution of the whole construction, and continue interrupts the execution of 
only the current iteration.


*/



for(let i=0; i<10; ) {
    i++;
}
console.log(i);


//EX1. What is output to the console of the code execution?
for(var i=0; i<10; ) {
    i++;
}
console.log(i); //10

console.log('******************************************************************************')

//EX2. What is the output of this code?
for(let i=0; i<3; i++){
    console.log(i);
} //2

console.log('******************************************************************************')

//EX3. How many times is the code executed?
for(var i = 10; i < 35; i += 5) {
    console.log(i);
} //10->1...15, 15->2...20, 20->3...25, 25->4...30, 30->5...35,

console.log('******************************************************************************')

//EX4. How many times is this loop executed?
for (var i = 0; i > -10; i-=3) { 
    i++;
    console.log('executed')
} //0->1...-2; -2->2...-4; -4->3...-6; -6->4...-8; -8->5...-8

console.log('******************************************************************************')

//EX5. What is the last output value of this code?
var i = 3;
while (i) {
    console.log( i-- );
} // ajunge la 0 unde 0 = false si se opreste iteratia => ultimul rezultat alertat este 1
console.log(`I is now ${i}`)

console.log('******************************************************************************')

//EX6. What values of i does the while loop output?
var i = 0;
while (i++ < 5) {console.log( i );}
// 0+1...1; 1+1...2; 2+1...3; 3+1...4; 4+1...5