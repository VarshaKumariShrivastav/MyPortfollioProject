var v = {
	name : "ajay", age:20,
	
	set setname(n){
		this.name = n.toUpperCase();
	}
};
v.setname = "varsha";
console.log(v);