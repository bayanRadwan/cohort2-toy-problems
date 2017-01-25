/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var arr=[];
	for(var i= 0; i< matrix.length; i++){
		for(var j= 0 ; j< matrix.length; j++)
			if(i=== 0 ){
				arr.push(matrix[i][j])
			}else if(j> 0){
				arr.push(matrix[i++][j])
			}

		}
return arr;
};