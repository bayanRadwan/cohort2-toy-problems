/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function(){
  //fill me in
  head: null,
  tail: null
};

LinkedList.prototype.addToTail= function(val)
 if(this.head===null){
 	this.head=Node(val)
 	this.tail=this.head
 }else{
 	this.tail.next=Node(val);
 	this.tail=this.tail.next;
 }
};
LinkedList.prototype.removeHead=function(){
	var a=this.head.val;
	(this.head !== null){
		this.head=this.head.null;
	}
}
LinkedList.prototype.contains=function(target){
    if(this.head.val === target){
     return true;
    }
     this.head = this.head.next
   return false
    };
}
// TIME COMPLIXITY O(n)