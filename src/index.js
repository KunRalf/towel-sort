
// You should implement your task here.

module.exports = function towelSort (matrix) {
  arrMatrix = matrix;
  if (!arrMatrix){
    return [];
  }
  let arr = [];
  for (let i =0; i<arrMatrix.length; i++){
    if (i % 2 !== 0){
      arr = arr.concat((arrMatrix[i]).reverse());
    }
    else {
      arr = arr.concat(arrMatrix[i]);
    }
  }
  return arr;
}
