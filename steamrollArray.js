function steamrollArray(arr) {
  var flattenedArray = [];
  var flatten = function(arg){
  	if (!Array.isArray(arg)) {
  		flattenedArray.push(arg);
  	} else {
  		for (var j in arg){
  			flatten(arg[j])
  		}
  	} 
  };
  arr.forEach(flatten);
  return flattenedArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));//
// console.log(steamrollArray([[["a"]], [["b"]]]));// should return ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]]));// should return [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]]));// should return [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]]));// should return [1, {}, 3, 4].
