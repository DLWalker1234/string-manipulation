// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.


var testString = "";

var button = document.getElementById("button");
button.addEventListener("click", function() {
	testString = document.getElementById("input").value;
	reversal(testString);
	alphabits(testString);
	
});



function reversal(string) {
	var reverseString = testString.split('').reverse().join('');
	let output = document.getElementById("output");
	output.innerHTML = reverseString;
	// console.log(reverseString);
};

function alphabits(string) {
	var alphabetical = string.split('').sort().join('');
	// console.log(alphabetical);
	let output = document.getElementById("output");
	output.innerHTML = alphabetical;
	
}

function palindrome(string) {
	var stringArr = string.split('');
	console.log(stringArr);
	var reverseString2 = string.split('').reverse();
	console.log(reverseString2);
	if (stringArr === reverseString2) {
		console.log("palindrome")
	};

};






palindrome(testString);

"MIBO".split("").sort().join("");  // "BIMO"