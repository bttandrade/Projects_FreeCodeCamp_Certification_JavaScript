function palindrome(str) {
    newStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
    testStr = newStr.split("").reverse().join("");
    if (newStr === testStr) {
        return true;
    } else {
        return false;
    }
}
  
console.log(palindrome("1 eye 1"));