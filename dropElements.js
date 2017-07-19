function dropElements(arr, func) {
  // Drop them elements.
  for (var i = 0; i <arr.length; i++){

	  if(func(arr[i])){
	  	
	  	for(var j = 0; j<i; j++){

	  		arr.shift();

	  	}
	  	return arr
	  } 

  }
  return [];
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
