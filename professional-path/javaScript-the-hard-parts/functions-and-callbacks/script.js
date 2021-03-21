// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
const addTwo = (num) => {
    return num + 2
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
const addS = (word) => {
    return word + 's'
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
const map = (array, callback) => {
    const output = []
    for(let i = 0; i < array.length; i++) {
        output.push(callback(array[i]))
    }
    return output
};

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
};

// See for yourself if your forEach works!

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, char => alphabet += char);
// console.log(alphabet);  

// Challenge 5
const mapWith = (array, callback) => {
    array.forEach(element => callback(element))
};

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// mapWith(letters, char => alphabet += char);
// console.log(alphabet); 

// Challenge 6
const reduce = (array, callback, initialValue) => {
    let accumulator = initialValue
    for (let i = 0; i < array.length; i++) {
        if(i === 0 && !initialValue) {
            accumulator = array[0]
        } else {
            accumulator = callback(accumulator, array[i])
        }
    }
    return accumulator
};

// const nums = [4, 1, 3];
// const add = (a, b) => a + b; 
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
const intersection = (...arrays) => {
    return arrays.reduce((previous, current) => {
        return previous.filter(item => current.includes(item))
    })
};


//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
const union = (...arrays) => {
    return arrays.reduce((previous, current) => {
        const differences = current.filter(item => !previous.includes(item))
        return previous.concat(differences)
    })
};

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
const objOfMatches = (array1, array2, callback) => {
    const objMatched = {}
    for (let i = 0; i < array1.length; i++) {
        if(callback(array1[i]) === array2[i]) {
            objMatched[array1[i]] = array2[i]
        }
    }
    return objMatched
};

 //console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
    return arrVals.reduce((acc, curr) => {
        return {
            ...acc,
            [curr] : arrCallbacks.map(func => func(curr))
        }
    }, {})
};

//console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
const commutative = (func1, func2, value) => {
    return func1(func2(value)) === func2(func1(value))
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 12
const objFilter = (obj, callback) => {
    return Object.entries(obj).reduce((acc, curr) => {
        const [key, value] = curr
        if(callback(key) === value) {
            return {
                ...acc,
                [key] : value
            }
        } else {
            return acc
        }
    }, {})
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log("obj:", startingObj)
// console.log(objFilter(startingObj, half)); //should log: { 2: 1, 6: 3 }


// Challenge 13
const rating = (arrOfFuncs, value) => {
    let counter = 0
    arrOfFuncs.forEach(func => {
        if(func(value)){
            counter++
        }
    })
    let percentage = (counter / arrOfFuncs.length) * 100
    return percentage
};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 14
const pipe = (arrOfFuncs, value) => {
    //loop through functions
    let output = arrOfFuncs[0](value)
    for(let i = 1; i < arrOfFuncs.length; i++) {
        output = arrOfFuncs[i](output)
    }
    return output
};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
    let highestNum = 0;
    let highestFunc;
    const objOfFuncKeys = Object.keys(objOfFuncs)
    for( let func of objOfFuncKeys) {
        if(objOfFuncs[func](subject) > highestNum){
            highestNum = objOfFuncs[func](subject)
            highestFunc = func
        }
    }
    return highestFunc
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'