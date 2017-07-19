function myReplace(str, before, after) {
	if(/[A-Z]/.test( before[0])){
		after = after[0].toUpperCase() + after.slice(1);
	}
	str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".