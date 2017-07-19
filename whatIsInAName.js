function whatIsInAName(collection, source) {
	// Make a function that looks through an array of objects 
	// (first argument) and returns an array of all objects that 
	// have matching property and value pairs (second argument). 
	// Each property and value pair of the source object has to be 
	// present in the object from the 
	// collection if it is to be included in the returned array.
  // What's in a name?
  var arr = collection.slice();
  // console.log(arr);

  // Need to loop backward so SPLICE doesn't mess up the ordering
  for(var i = collection.length-1; i>=0; i--){
  	// for each element in the collection, we need to see if it matches the source
  	// so we loop through source keys
  	for(var j = 0; j<Object.keys(source).length; j++){
	  	// console.log(i +" "+ Object.keys(source)[j]);

  		// // Make sure key is available so no error is thrown
  		if(collection[i].hasOwnProperty(Object.keys(source)[j])){

  			var activeKey = Object.keys(source)[j];

  			// console.log(collection[i][activeKey] +" "+ source[activeKey]);

  			if(collection[i][activeKey] != source[activeKey]){
  				arr.splice(i,1);
  			}

  		} else arr.splice(i,1);

  	}

  }  
  // Only change code above this line
  // return collection.length;
  return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].
// console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
console.log(whatIsInAName([
	{ "a": 1, "b": 2 }, 
	{ "a": 1 }, 
	{ "a": 1, "b": 2, "c": 2 }]

	, { "a": 1, "b": 2 })); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })); // should return [{ "a": 1, "b": 2, "c": 2 }].




