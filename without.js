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


const words = ["hello", "world", "lighthouse"];

const without = function (source, iteamsToRemove) {
  let newArr = [];
  for ( let index in source ) {
    if (source[index] !== iteamsToRemove[0]) {
      newArr.push(source[index]);
    }
  }
}




without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);