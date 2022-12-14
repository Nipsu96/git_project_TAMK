//Adds checkPalindrome function to String.prototype.
//Can be used as <string>.checkPalindrome to check if the word is a palindrome.
//Returns true / false.

String.prototype.checkPalindrome = function () {
  //Converts the string into lowercase and removes any chars outside of alphabet.
  string = this.toLowerCase().replace(/[^a-z]+/g, "");

  //Compare variable string and variable string that is split into array,
  //reversed and joined back together.
  //Returns boolean value.
  return string === string.split("").reverse().join("");
};

//Returns "true".
console.log("saippuakauppias".checkPalindrome());
//Returns "false".
console.log("moikka".checkPalindrome());
