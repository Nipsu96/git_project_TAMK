String.prototype.checkPalindrome() = function () {
    string = this.toLowerCase().replace(/[^a-z]+/g, "");
    return this === string.split("").reverse().join("");
};

console.log("saippuakauppias".checkPalindrome());