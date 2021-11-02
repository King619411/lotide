const assertArraysEqual = require('./assertArraysEqual');


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

/*
middle([1, 2, 3, 4, 5]);
eqArrays([1, 2, 3], [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
*/



module.exports = assertArraysEqual;
module.exports = middle;