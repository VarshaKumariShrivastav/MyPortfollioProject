// loop  
//while loop

 /* let counter = 0;
while(counter <= 10)
{
	document.write('dd');
	counter++;
    
}*/
	//else{document.write('end');}
	
	
	let counter = 1;
	let sum = 0;
	while( counter <=100 ){
		if( counter % 2 == 0){
			sum = sum + counter;
		}
		counter++;
		
		
	}
	document.write(sum);
	