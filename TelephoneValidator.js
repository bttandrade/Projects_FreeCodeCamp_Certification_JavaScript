function telephoneCheck(str) {
    str = str.replace(/[\s]/g, "");
    if (/^\d\d\d-\d\d\d-\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str)) {
        return true;
    }else if (/^\d\d\d\d\d\d\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^\(\d\d\d\)\d\d\d\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^[1]\d\d\d\d\d\d\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^[1]\d\d\d-\d\d\d-\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^[1]\(\d\d\d\)\d\d\d\d\d\d\d$/.test(str)) {
        return true;
    } else if (/^[1]\(\d\d\d\)\d\d\d-\d\d\d\d$/.test(str)) {
        return true;
    } 
    return false;
}

console.log(telephoneCheck("555-545-5555"));
console.log(telephoneCheck("(555)545-5555"));
console.log(telephoneCheck("(555) 545 5555"));
console.log(telephoneCheck("1 555 545 5555"));
console.log(telephoneCheck("1 (555)545-5555"));
console.log(telephoneCheck("2 555 545 5555"));