function sumPrimes(num) {

	var arr = [2];

	for (j=3; j<=num; j++){
		// PRIME TEST
		// for all numbers between 2 and halfway up
		if (j%2 ==0){
		} else{
			var marker = 0;
			for (var i=3; i<=Math.ceil(j/2); i++){
				if (j%i == 0){
					marker = -1;
				}
			}
			if (marker == 0){
				arr.push(j);
			}
		}
		
	}

	var sum = arr.reduce( function(total, amount){
  	return total + amount;
	});

	return sum
}

console.log(sumPrimes(10));

