// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: 1 === 1')
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
  }

};

// create a v for tail of the array
//Review solution below.

//function tail(arr) {
// let tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
//return tail;
//}

function tail(arr) {
  let newArr = [];

  //chceking elements in the array - if no elements are found returns blank array.
  if (arr.length <= 1) {
    return newArr;
  } else {
    newArr = arr.slice(1);
  } return newArr;
}