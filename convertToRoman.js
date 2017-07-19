function convertToRoman(num) {
 var roman = [];
 var ones = num%10;
 var tens = num.toString().slice(-2,-1);;
 var hundreds = num.toString().slice(-3,-2);
 var thousands = num.toString().slice(-4,-3);

// thousands
for (var i = 0; i < thousands; i++) {
	roman.push('M');
}

// hundreds
 if (hundreds<4){
 	for (var i = 0; i < hundreds; i++) {
 		roman.push('C');
 	}
 } else if (hundreds == 4){
 	roman.push('CD');
 } else if (hundreds == 5){
 	roman.push('D');
 } else if (hundreds >5 && hundreds <= 8){
 	roman.push('D');
 	for (var i = 0; i < hundreds-5; i++) {
 		roman.push('C');
 	}
 } else { //hundreds = 9
 	roman.push('CM');
 }

// tens
 if (tens<4){
 	for (var i = 0; i < tens; i++) {
 		roman.push('X');
 	}
 } else if (tens == 4){
 	roman.push('XL');
 } else if (tens == 5){
 	roman.push('L');
 } else if (tens >5 && tens <= 8){
 	roman.push('L');
 	for (var i = 0; i < tens-5; i++) {
 		roman.push('X');
 	}
 } else { //tens = 9
 	roman.push('XC');
 }


//ones
 if (ones<4){
 	for (var i = 0; i < ones; i++) {
 		roman.push('I');
 	}
 } else if (ones == 4){
 	roman.push('IV');
 } else if (ones == 5){
 	roman.push('V');
 } else if (ones >5 && ones <= 8){
 	roman.push('V');
 	for (var i = 0; i < ones-5; i++) {
 		roman.push('I');
 	}
 } else { //ones = 9
 	roman.push('IX');
 }

return roman.join('');
// return thousands;

}


console.log(convertToRoman(2)+ " should return II.");
console.log(convertToRoman(3)+ " should return III.");
console.log(convertToRoman(4)+ " should return IV.");
console.log(convertToRoman(5)+ " should return V.");
console.log(convertToRoman(9)+ " should return IX.");
console.log(convertToRoman(12)+ " should return XII.");
console.log(convertToRoman(16)+ " should return XVI.");
console.log(convertToRoman(29)+ " should return XXIX.");
console.log(convertToRoman(44)+ " should return XLIV.");
console.log(convertToRoman(45)+ " should return XLV");
console.log(convertToRoman(68)+ " should return LXVIII");
console.log(convertToRoman(500)+ " should return D");
console.log(convertToRoman(501)+ " should return DI");
console.log(convertToRoman(649)+ " should return DCXLIX");
console.log(convertToRoman(798)+ " should return DCCXCVIII");
console.log(convertToRoman(891)+ " should return DCCCXCI");
console.log(convertToRoman(1000)+ " should return M");
console.log(convertToRoman(1004)+ " should return MIV");
console.log(convertToRoman(1006)+ " should return MVI");
console.log(convertToRoman(1023)+ " should return MXXIII");
console.log(convertToRoman(2014)+ " should return MMXIV");
console.log(convertToRoman(3999)+ " should return MMMCMXCIX");