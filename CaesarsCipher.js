function rot13(str) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let test1, test2;

    for (let i = 0; i < str.length; i++) {
        test1 = str.charAt(i);
        for (let j = 0; j < alpha.length; j++) {
            test2 = alpha.charAt(j);
            if (test1 === test2) {
                str = str.split('');
                str[i] = rot13.charAt(j);
                str = str.join('');
            }   
        } 
    }
    return str;
}
  
console.log(rot13("SERR YBIR?"));