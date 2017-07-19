function fearNotLetter(str) {
	strArr = str.split('');

	for (var i = 1; i<strArr.length; i++){
		if(strArr[i-1].charCodeAt(0) != strArr[i].charCodeAt(0)-1){
			return String.fromCharCode(strArr[i-1].charCodeAt(0)+1);
		}
	}
	return undefined;
  
}

console.log(fearNotLetter("abce")); // should return "d".
// console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
// console.log(fearNotLetter("bcd")); // should return undefined.
// console.log(fearNotLetter("yz")); //