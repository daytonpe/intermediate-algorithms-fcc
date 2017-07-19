function smallestCommons(arr) {

	var marker = 0;
	var guess;
	var big;
	var little;

	// LOOP THROUGH GUESSES
	// lowest possible common multiple is arr0*arr1

	if (arr[0]>arr[1]){
		big = arr[0];
		little = arr[1];
	} else{
		big = arr[1];
		little = arr[0];		
	}

	for (guess = (arr[0]*arr[1]); guess<=100000000; guess+=little){
		marker = 0;
		for(var j = little; j<= big; j++){
			if(guess%j===0){
				continue;
			}
			else {
				marker = -1;
			}
		}
		if (marker === 0){ 
			return guess;
		}
	}

	return 'no answer found';

}


console.log(smallestCommons([1,13]));

