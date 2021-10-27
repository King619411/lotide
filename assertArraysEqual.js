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