// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: 1 === 1')
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
  }

};


const head = function (arr) {
  let firstElement = arr.shift();
  return firstElement
}
// create a v for tail of the array
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
