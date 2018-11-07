
// const findThingsInCommon = (list1, list2) => {
//     let storage = []
//     for (let i = 0; i < list1.length; i++) {
//         for (let j = 0; j < list2.length; j++) {
//             if (list1[i] === list2[j]) {
//                 // console.log(`${list1[i]}, ${list2[j]}`)
//                 storage.push(list1[i])
//             }
//         }
//     }
//     console.log(`The row contained these numbers:  ${storage}`)
// }

const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [6,0,0,0,0,0,0,0,9];
// findThingsInCommon(arr1, arr2);

const findThingsMissing = (list1, list2) => {
    let missingNumbers = list1;
    for (let i = 0; i < list2.length; i++) {
        for (let j = 0; j < list1.length; j++) {
            if (list1[j] === list2[i]) {
                missingNumbers.splice(j, 1)
            }
        }
    }
    console.log(`The row is missing numbers ${missingNumbers}`)
}

findThingsMissing(arr1, arr2);

/* Success! The findThingsMissing function was able to log all of the numbers missing from a given array. 
    Goal:  Pick a cell (any element equal to 0). Narrow the list of possible solution numbers for that cell.
        We know it could be any of the numbers missing from that cell's row, but what about that cell's column?
            What about that cell's 3 x 3 region?
*/