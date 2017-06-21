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
	document.getElementById("reversal");
	document.getElementById("alphabetical");
	document.getElementById("palindrome");
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	
	
	
});




function reversal(string) {
	var reverseString = testString.split('').reverse().join('');
	let output1 = document.getElementById("reversal");
	output1.innerHTML = reverseString;
	// output.innerHTML = reverseString;
	// console.log(reverseString);
};

function alphabits(string) {
	var alphabetical = string.split('').sort().join('');
	let output2 = document.getElementById("alphabet");
	output2.innerHTML = alphabetical;
	
	
}

function palindrome(string) {
	let output3 = document.getElementById("palindrome")
	var stringArr = string.split('').join('');
	console.log(stringArr);
	var reverseString2 = string.split('').reverse().join('');
	console.log(reverseString2);
	if (stringArr === reverseString2) {
		output3.innerHTML = "Your string is a palidrome"
	};

};
