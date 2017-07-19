function translatePigLatin(str) {
  conGroup = str.split(/([aeiou].*)/);
	if(/\b[aeiou]\w*/ig.test(str)){
		return str+'way';
	}
  return conGroup[1]+conGroup[0] +'ay';
}

console.log(translatePigLatin("consonant")); //
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".