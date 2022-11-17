//Adds checkPalindrome function to String.prototype.
//Can be used as <string>.checkPalindrome to check if the word is a palindrome.
//Returns true / false.
String.prototype.checkPalindrome = function () {
  string = this.toLowerCase().replace(/[^a-z]+/g, "");
  return string === string.split("").reverse().join("");
};

console.log("saippuakauppias".checkPalindrome());
console.log("moikka".checkPalindrome());
