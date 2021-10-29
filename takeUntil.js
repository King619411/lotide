const assertArraysEqual = function (arr1, arr2) {
  let return1 = "";
  let return2 = "";
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return
    // this to be fixed. we cant place the console.log before the arr variables have been assigned
  }
  for (let i = 0; i < arr1.length; i++) {
    return1 += arr1[i];
    return2 += arr2[i];
  }
  if (return1 === return2) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return
  }
};

const eqArrays = function (arr1, arr2) {
  let return1 = '';
  let return2 = '';
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    return1 += arr1[i];
    return2 += arr2[i];
  }
  if (return1 === return2) {
    return true;
  } else {
    return false;
  }
};


//Changed the callback value in the Parentheses to cause less confusion for myself
const takeUntil = function(array, arr2) {
  let newArr = [];
  for (let i = 0; i < data1.length && arr2(array[i]) === false; i++) {
    newArr.push(array[i]);
  }
  return newArr;
} 


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/