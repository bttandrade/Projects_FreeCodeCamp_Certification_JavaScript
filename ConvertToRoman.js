function convertToRoman(num) {
    let roman = "";
    let test = num/1000;
    for (let i = 0; i < test; i++) {
        if (num >= 1000) {
            roman += "M";
            num -= 1000;
        }
    }
    if (num >= 900) {
        roman += "CM"
        num -= 900;
    } 
    if (num >= 500) {
        roman += "D"
        num -= 500;
    }
    if (num >= 400) {
        roman += "CD"
        num -= 400;
    }
    test = num/10;
    for (let i = 0; i < test; i++) {
        if (num >= 100) {
            roman += "C";
            num -= 100;
        }
    }
    if (num >= 90) {
        roman += "XC"
        num -= 90;
    }
    if (num >= 50) {
        roman += "L"
        num -= 50;
    }
    test = num/40;
    for (let i = 0; i < test; i++) {
        if (num >= 40) {
            roman += "XL";
            num -= 40;
        }
    }
    test = num/10;
    for (let i = 0; i < test; i++) {
        if (num >= 10) {
            roman += "X";
            num -= 10;
        }
    }
    if (num >= 9) {
        roman += "IX"
        num -= 9;
    }
    if (num >= 5) {
        roman += "V"
        num -= 5;
    }
    if (num >= 4) {
        roman += "IV"
        num -= 4;
    }
    for (let i = 0; i < 10; i++) {
        if (num >= 1) {
            roman += "I";
            num -= 1;
        }
    }
    return roman;
}
console.log(convertToRoman(106));
