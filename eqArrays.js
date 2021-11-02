const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

