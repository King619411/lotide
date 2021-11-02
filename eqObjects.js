// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: 1 === 1')
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
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

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
      return false;
  } else {
  for (let key of keys1) {
      if (object1[key] !== object2[key]) {
          return false;
      }
  }
  return true
}
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
//eqObjects(ab, ba);
assertEqual(eqObjects(ab, ba), false);

//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc)); // => false