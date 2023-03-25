function student(first,last,age,cls){
	this.firstName= first;
	this.lastName= last;
	this.age  = age;
	this.class = cls;
	/*this.nationality = "indian";
 this.name = function(){
	return this.firstName+" "+lastName;
 }*/
	
};
student.prototype.hobby="play cricet";

 student.prototype.name = function(){
	return this.firstName+" "+this.lastName;
 };

var student1 = new student("adarsh","maurya",20,1);
student1.nationality = "indian";
student1.name = function(){
	return this.firstName +" "+this.lastName;
};
var student2 = new student("adarsh","maurya",20,1);
var student3 = new student("adarsh","maurya",20,1);
var student4 = new student("adarsh","maurya",20,1);
var student5 = new student("adarsh","maurya",20,1);
var student6 = new student("adarsh","maurya",20,1);


console.log(student1.name());
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);
//console.log(student6.name());

