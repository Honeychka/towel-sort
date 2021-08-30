
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let Sorted = [];
   if (!matrix){
    return Sorted;
  }

  for (let i = 0; i < matrix.length; i++) {
		if (i % 2 == 0) {
      Sorted.push(...matrix[i]);
    } 
		else {
      Sorted.push(...matrix[i].reverse());
    }
	}
	return Sorted;
};
