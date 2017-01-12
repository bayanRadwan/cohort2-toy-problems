/*
In this toy problem we mix some tasty fruit juice. 
We can add some components with certain amounts. 
Sometimes we pour out a bit of our juice. 
Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units 100 100
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

function Jar() {
	this.countF={}
	this.concentration=0
  // TODO
}
Jar.prototype.add=function(val,fruit){
	this.countF[val]=fruit
}
Jar.prototype.remove=function(fruit){

	this.countF.splice(this.countF[fruit],1)
}
Jar.prototype.getTotalAmount=function(){
	for(var key in this.countF){
		this.concentration+=this.countF[key]
	}
	return this.concentration;
}
Jar.prototype.getConcentration=function(fruit){
for(var key in this.countF){
	if(this.countF[key]===fruit){
		return this.countF[fruit]/this.concentration
	}
}
return 0
}

/*
These are some tests:
var jar = new Jar();
jar.getConcentration('apple');//should be 0
jar.add(200, 'apple');
jar.getTotalAmount(); //should be 200
jar.getConcentration('apple'); //should be 1 or 100%
jar.add(200, 'banana');
jar.getTotalAmount();// should be 400
jar.getConcentration('apple'); //should be 0.5 or 50%
jar.getConcentration('banana'); //should be 0.5 or 50%
*/