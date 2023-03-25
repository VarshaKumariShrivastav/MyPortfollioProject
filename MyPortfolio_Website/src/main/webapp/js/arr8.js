function add(){
	if(arguments.length == 0){
		console.log("not argument");
	}
	else{
	let	sum = 0;
		for(i = 0; i < arguments.length; i++){
			sum = sum + arguments[i];
		
		}
		console.log(sum);
	}
	
}
let addition = add;
addition(34,67,56);
add(34,678,345);
add(2345,5778,34567);