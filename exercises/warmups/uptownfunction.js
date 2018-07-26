// WarmUp for Wednesday, July 25th
// First Function
var testArr = ['this', 'is', 'just', 'a', 'test'];

function upTown (arr) {
    console.log(arr.join(" "))
}

upTown(testArr);

//Second Function
function upTownReverse (arr) {
    console.log(arr.reverse().join(" "));
    arr.reverse();
}
upTownReverse(testArr);

//Third Function
function upTownEvens (arr) {
    for (var i = 0; i < arr.length; i += 2) {
        console.log(arr[i])
    }
}

upTownEvens(testArr);
