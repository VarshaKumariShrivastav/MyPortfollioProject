/*function sum(num1,num2){
document.write(num1 + num2);	
document.write("</br>");	

}
sum(7,9);
sum(34,67);
sum(45,40);*/

function add(){
	if(arguments.length == 0){
		document.write("no perameter passed!");}
	else{
		let sum = 0;
		for(let i =0; i < arguments.length; i++){
		sum = sum + arguments[i];
		}
        document.write(sum);
	}
	document.write("</br>");
}
//ese kahte hai ek function ko variable me stor karna........
let addition = add;
addition(2,6,8,67,78,45778,9);
//add(3,4);
add(3,8,9);