function addTogether() {

	var arr = [];

	// console.log(arguments[0]);
	for (var i = 0; i<arguments.length; i++){
		// console.log(arguments[i])
		if(typeof arguments[i] != 'number'){
			// console.log(arguments[i] +' is ' +typeof arguments[i] +' and made this undefined')

			return undefined;
		}
		arr.push(arguments[i]);
	}

	if (arr.length>1){
		var sum = arr.reduce( function(total, amount){
		  return total + amount
		});
	} 

	else{
		var original = arguments[0];
		// console.log(original);
		var plus = function(arg){
			if(typeof arguments[0] != 'number'){
				console.log(arguments[0] +' is ' +typeof arguments[i])
				return undefined;
			}
			// console.log(typeof arguments[0])
			// console.log(original);
			return arg +original;
		}
		return plus;
	}

  return sum;
}

// console.log(addTogether(2,3));// should return 5.
console.log(addTogether(2)(3));// should return 5.
// console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
// console.log(addTogether(2, "3"));// should return undefined.
// console.log(addTogether(2)([3]));// should return undefined.