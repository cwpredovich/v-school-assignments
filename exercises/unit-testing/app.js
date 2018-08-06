function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            if(arr[i].lastIndexOf('s') === arr[i].length - 1){
                newArr.push(arr[i])
            } else {
                newArr.push(`${arr[i]}s`)
            } 
        } else {
            return 'no numbers'
        }
    }
    return newArr
}

module.exports = { addS: addS }
