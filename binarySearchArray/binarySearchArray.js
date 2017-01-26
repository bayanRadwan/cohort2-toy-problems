/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */
// [1,2,3,4,5,6,7]
var binarySearch = function (array, target) { // target = 6
  var min = 0; //min = 0
  var max = array.length-1; // max = 7 
  var midd , elem;
  while(min <= max){
  	midd= Math.floor((min + max) /2 , 10) // midd = 3
  	elem = array[midd]; // elem = 4
  	if(elem < target){
  		min  = midd +1; // min = 4
  	}else if(elem > target){ 
  		max = midd -1;
  	}else {
  		return midd;
  	}
  }
  return "target not found";
};
