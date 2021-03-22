// ###########
// # Closure #
// ###########


// Challenge 1
const createFunction = () => {
  function createdFunction() {
    return "hello"
  }
  return createdFunction
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// console.log(function1());


// Challenge 2
const createFunctionPrinter = (input) => {
  function returnedFunction() {
    return input
  }
  return returnedFunction
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// console.log(printSample());
// const printHello = createFunctionPrinter('hello');
// console.log(printHello());


// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


// Challenge 4
const addByX = (x) => {
  function add(input) {
    return x + input
  }
  return add
};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1)); //should return 3
// console.log(addByTwo(2)); //should return 4
// console.log(addByTwo(3)); //should return 5

// now call addByTwo with an input of 2


// Challenge 5
const once = (func) => {
  let counter = 0
  let onceValue
  function innerFunc(val){
    if (counter === 0) {
      onceValue = func(val)
      counter++
    }
    return onceValue
  }
  return innerFunc
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Challenge 6
const after = (count, func) => {
let callbackCounter = 0
   function inner(value) {
    if(++callbackCounter === count){
      func(value)
    }
  }
  return inner
};

const called = () => console.log('hello');
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


// Challenge 7
const delay = (func, wait) => {
  setTimeout(() => func(...args), wait)
};


// Challenge 8
const russianRoulette = (num) => {
  let n = 0
  return () => {
    if(++n < num){
      return "click"
    } else if(n === num) {
      n++
      return "bang"
    } else {
      return "reload to play again"
    }

  }

};

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'