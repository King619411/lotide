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

const middle = function (array) {
  
  let emptyArray = [];
  
  if (array.length <= 2) {
    return emptyArray;


  } else if (array.length % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      let middleElements = array[(array.length / 2) - 1];
      let middleElements2 = array[(array.length / 2)];
      emptyArray.push(middleElements, middleElements2);
      return emptyArray;
    }

  } else {
      let middleElement = Math.round(array[((array.length - 1) / 2)]);
      emptyArray.push(middleElement);
      return emptyArray;
    }
};

middle([1, 2, 3, 4, 5]);
eqArrays([1, 2, 3], [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);