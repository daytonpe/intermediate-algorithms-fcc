
function pairElement(str) {

	var strArr = str.split('');
	var arr = [];
	var pair;

	for(var i = 0; i <strArr.length; i++){
		
		if(strArr[i]=='C'){pair = 'G';}
		else if (strArr[i]=='G'){pair = 'C';}
		else if (strArr[i]=='A'){pair = 'T';}
		else if (strArr[i]=='T'){pair = 'A';}
		else {pair == 'error';}

		// console.log(strArr[i]);
		arr[i] = [strArr[i], pair];
	}

  return arr;
}

console.log(pairElement("ATCGA"));

