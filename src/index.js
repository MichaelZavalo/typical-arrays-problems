
exports.min = function min (array) {
  let result = Math.min(...array);
  /* let result = array.forEach(el,i,arr => {
    if(arr[i]< arr[i + 1]){
        return arr [i];
    }
  });*/
  return result; 
}

exports.max = function max (array) {
  let result = Math.max(... array);
  /* let result = array.forEach(...array,i,arr => {
    
}); */
return result;
}

exports.avg = function avg (array) {
  let result = Math.avg(...array);
  /* let result = array.forEach(...array,i,arr => {
    
  }); */
  return result;
}
