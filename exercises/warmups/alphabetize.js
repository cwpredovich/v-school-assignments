// var input = "hello"
// var input2 = "Cab"

// const alphabetize = str => str.split('').sort().join('');

// console.log(alphabetize(input));
// console.log(alphabetize(input2));


let phoneNum = "(9!6) 753-*136"
const checkPhone = (str) => {
    if (str.length !== 14) {
        return false;
      } else {
        return true;
    }
    const notAllowed = /[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]+/;
    if(notAllowed.test(str)){
        return false;
      } else {
        return true;
    };
    if (str.match(/[a-z]/i)) {
        return false
    } else {
        return true
    };  
}

console.log(checkPhone(phoneNum))
