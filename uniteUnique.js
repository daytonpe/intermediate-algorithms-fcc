function uniteUnique(arr) {
// console.log(arguments[1]);
// console.log(arguments.length);

	var combinedArr = []


	for (var i = 0; i< arguments.length; i++){
		for (var j = 0; j<arguments[i].length; j++){
			if (combinedArr.indexOf(arguments[i][j]) == -1){
				combinedArr.push(arguments[i][j]);
			}
			// console.log(arguments[i][j]);
		}
	}

	return combinedArr;
}

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount); 

// console.log(sum);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
