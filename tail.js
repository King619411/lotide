const assertEqual = require('./assertEqual');

function tail(arr) {
  let newArr = [];
  if (arr.length <= 1) {
    return newArr;
  } else {
    newArr = arr.slice(1);
  } return newArr;
}

module.exports = tail;