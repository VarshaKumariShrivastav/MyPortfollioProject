/*let student1={
	firstName : "varsha",
	lastName : "kumari",
	age : 20,
	class : 12,
}

let student2={
	firstName : "ajay",
	lastName : "maurya",
	age : 20,
	class : 12,
}
console.log(student1);
console.log(student2);*/
function student1(first,last,age,cls){
	this.firstName= first;
	this.lastName= last;
	this.age  = age;
	this.class = cls;
	
};
var student1 = new student1("adarsh","maurya",20,1);
var student2 = new student2("adarsh","maurya",20,1);
var student3 = new student3("adarsh","maurya",20,1);
console.log(student1);
console.log(student2);
console.log(student3);