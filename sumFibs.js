function sumFibs(num) {
	var arr = [1,1];
	for (var i = 1; i<num; i++){
		if ((arr[i]+arr[i-1])<=num){
			arr.push(arr[i]+arr[i-1])
		}
	}

	var sum = arr.reduce( function(total, amount){	  
	  if(amount%2 ==1){
	  	return total + amount;
	  }
	  return total;
	});

	return sum;
}

// console.log(sumFibs(1));
console.log(sumFibs(4));
// console.log(sumFibs(1000));// should return 1785.
// console.log(sumFibs(4000000));// should return 4613732.
// console.log(sumFibs(4));// should return 5.
// console.log(sumFibs(75024));// should return 60696.
// console.log(sumFibs(75025));//