	// PRIME TEST
	// for all numbers between 2 and halfway up
	if (num == 1){
		return false;
	} else if (num == 2){
		// console.log(num);
		return true;
	} else if (num%2 ==0){
		return false;
	} else{
		for (var i=3; i<=Math.ceil(num/2); i++){
			// console.log(i)
			if (num%i == 0){
			return num +' % '+i +' '+false;
			}
		}
		// console.log(num);
		return true;
	}