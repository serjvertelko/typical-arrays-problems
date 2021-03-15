
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  var minimum = array.reduce(function (accumulator, currentValue) {
    if(accumulator < currentValue) {
      return accumulator;
    } else {
      return currentValue;
    }
  });
  return minimum;
};

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  var maximum = array.reduce(function (accumulator, currentValue) {
    if(accumulator > currentValue) {
      return accumulator;
    } else {
      return currentValue;
    }
  });
  return maximum;
};

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  
  var sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return sum / array.length;
};
