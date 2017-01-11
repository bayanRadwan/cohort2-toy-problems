/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
  	for (var key in obj1){
  		for(var key in obj2){
  			if( Object.getPrototypeOf(obj1[key])!=="Object" && Object.getPrototypeOf(obj2[key])!=="Object"){
  			if(obj1[key]===obj2[key]){
  				return true
  			}
  		}
  		if(Object.getPrototypeOf(obj1[key])==="Object" && Object.getPrototypeOf(obj2[key])==="Object"){
  			return deepEquals(obj1[key],obj2[key])
  		}
  		}
  	}
  	return false
  }

