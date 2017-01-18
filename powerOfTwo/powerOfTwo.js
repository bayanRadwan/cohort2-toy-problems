/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var sum=0 , arr=[];
	for (var i = 2; i < 1000; i++) {
		arr.push(i*i++)
	}
	for (var x = 1; x < arr.length; x++) {
		sum+=2*x
	}
	return sum
}
