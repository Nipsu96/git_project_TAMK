String.prototype.checkPalindrome = function () {
  string = this.toLowerCase().replace(/[^a-z]+/g, "");
  return string === string.split("").reverse().join("");
};

console.log("saippuakauppias".checkPalindrome());
