// given a string, the app will remove any duplicate letters and move them to a string called duplicate letters

var input = "bookkeeper larry";
function findDuplicates (str) {
    var noDupes = ""
    for (i = 0; i < str.length; i++) {
        if (noDupes.indexOf(str[i]) === -1) {
            noDupes += str[i]
        }
    }
    return noDupes
}

console.log(findDuplicates(input));