let x = {
	firstName:'ajay',lastName:'maurya',
	
};
x.age = '22';
x.firstName = 'varsha'; // object ke value ko chang karne ke lia
console.log(x);
console.log(x['lastName']);
for(let y in x){
	console.log(y + ": " +x[y]);
};