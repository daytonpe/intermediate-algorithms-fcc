function spinalCase(str) {
	str = str.replace(str[0], str[0].toLowerCase());
  str = str.replace(/([A-Z])/g, " $1");
  str = str.replace(/_/g, " ");
  str = str.replace(/-/g, " ");
  str = str.replace(/ +/g, "-");
  return str.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".