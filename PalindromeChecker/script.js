const input = document.getElementById("text-input");
const submit = document.getElementById("check-btn");
const result = document.getElementById("result");

submit.onclick = function(e) {
    if (input.value == "") {
        alert("Please input a value");
        input.value = '';
    } else {
        result.textContent = palindrome(input.value);
        input.value = '';
    }
}

function palindrome(str) {
    newStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
    testStr = newStr.split("").reverse().join("");
    return newStr === testStr ? `${str} is a Palindrome` : `${str} is not a Palindrome`;
}
