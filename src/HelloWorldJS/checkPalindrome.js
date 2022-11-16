String.prototype.checkPalindrome() = function () {
    string = this.toLowerCase().replace(/[^a-z]+/g, "");

}

console.log("saippuakauppias".checkPalindrome());