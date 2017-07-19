function sumAll(arr) {
	var big;
	var small;
	var total=0;

	if (arr[0]>arr[1]) {
		big = arr[0];
		small = arr[1];
	}
	else{
		big = arr[1];
		small = arr[0];
	}
  
  for (var i = small; i <= big; i++) {
  	total=total+i;
  }
  console.log(big);
  console.log(small);
  return total;
}

console.log(sumAll([1, 4]));

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

// Math.max()
// Math.min()
// Array.prototype.reduce()