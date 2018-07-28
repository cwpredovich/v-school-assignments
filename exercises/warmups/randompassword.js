function passwordGen(length) {
    var charStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?_";
    var charArr = charStr.split("");
    var newPass = "";
    for (var i = 0, n = charArr.length; i < length; ++i) {
        newPass += charArr[Math.floor(Math.random() * n)];
    }
    return newPass;
}

console.log(passwordGen(8));
