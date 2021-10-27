// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: 1 === 1')
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
  }

};

// Notes - Make use of truthy & falsey !==/!=== ===/==
// Problem breakdown 1) Compare both arrays and if they both math true etc.

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

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false