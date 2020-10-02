
exports.min = function min (array) {
  if(array && array.length !== 0) {
    return Math.min.apply( Math, array );
  }
  return 0;
}

exports.max = function max (array) {
  if(array && array.length !== 0) {
    return Math.max.apply( Math, array );
  }
  return 0;
}

exports.avg = function avg (array) {
  var sum = 0;
  if(array && array.length !== 0) {
    for(var i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length;
  } 
    return 0;
  
}

