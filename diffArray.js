function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 	
	  for (var j = 0; j < arr2.length; j++) {
  	if(arr1.indexOf(arr2[j]) == -1){
  		newArr.push(arr2[j]);
  	}
  } 
  for (var i = 0; i < arr1.length; i++) {
  	if(arr2.indexOf(arr1[i]) == -1){
  		newArr.push(arr1[i]);
  	}
  }


  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
