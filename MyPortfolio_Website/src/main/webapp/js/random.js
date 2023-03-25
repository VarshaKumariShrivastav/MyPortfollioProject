let x = Math.random();
let y = Math.random()*10;
let z = Math.floor(Math.random()*10);
let a = Math.floor(Math.random()*6)+1;
function getRandom(min,max){
	//let b = Math.floor(Math.random()*(max-min))+min;
	let b = Math.floor(Math.random()*(max-min+1))+min;// max number bhi aega
	return b;
}
//let b = Math.floor(Math.random()*(25-10))+10;



console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(getRandom(30,50));