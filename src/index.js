module.exports = function towelSort (matrix) {
 let sortedMatrix = [];
   if (!matrix){
    return sortedMatrix;
  }
 for (let i = 0; i < matrix.length; i++) {
   if (i % 2 == 0) {
      sortedMatrix.push(...matrix[i]);
 } else {
      sortedMatrix.push(...matrix[i].reverse());
 }
}
	return sortedMatrix;
};
