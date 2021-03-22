Closure

Challenge 1

Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
const function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');
When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

Challenge 2

Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
const printSample = createFunctionPrinter('sample');
const printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');

Challenge 3

Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing.

Challenge 4

Now we are going to create a function addByX that returns a function that will add an input by x.
const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14

Challenge 5

Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

Challenge 7

Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

Challenge 8
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.