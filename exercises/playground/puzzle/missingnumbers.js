
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

// const arr1 = [1,2,3,4,5,6,7,8,9];
// const arr2 = [6,0,0,0,0,0,0,0,9];


const easyBoard = [
    [8,0,0,5,3,0,0,4,0],
    [9,0,5,0,0,0,2,0,0],
    [7,0,0,4,1,0,0,0,8],
    [0,0,2,8,0,6,0,0,0],
    [0,8,0,0,9,0,0,7,0],
    [0,0,0,3,0,1,5,0,0],
    [3,0,0,0,2,8,0,0,5],
    [0,0,7,0,0,0,8,0,9],
    [0,1,0,0,6,5,0,0,7]
  ];
// findThingsInCommon(arr1, arr2);

// const findThingsMissingHoriz = (list1, list2) => {
//     let missingNumbers = list1;
//     for (let i = 0; i < list2.length; i++) {
//         for (let j = 0; j < list1.length; j++) {
//             if (list1[j] === list2[i]) {
//                 missingNumbers.splice(j, 1)
//             }
//         }
//     }
//     console.log(`The row is missing numbers ${missingNumbers}`)
// }

// const findThingsMissingVert = (list1, list2) => {
//     let missingNumbers = list1;

// }

// const findBlankCells = (board) => {
//     for (let y = 0; y < board.length; y++) {
//         for (let x = 0; x < board[y].length; x++) {
//             if (board[y][x] === 0) {
//                 console.log(`The cell at position (${x}, ${y}) was blank and needs a solution.`)
//             }
//         }
//     }
// }

// findBlankCells(easyBoard)

// findThingsMissingHoriz(arr1, arr2);

/* Success! The findThingsMissing function was able to log all of the numbers missing from a given array. 
    Goal:  Pick a cell (any element equal to 0). Narrow the list of possible solution numbers for that cell.
        We know it could be any of the numbers missing from that cell's row, but what about that cell's column?
            What about that cell's 3 x 3 region?
*/


// const divideBoardByRegions = (board) => {
//     const region1 = [];
//     const region2 = [];
//     const region3 = [];
//     const region4 = [];
//     const region5 = [];
//     const region6 = [];
//     const region7 = [];
//     const region8 = [];
//     const region9 = [];
//     for (let r = 0; r < board.length; r++) {
//         if (r < 3) {
//             region1.push(board[r].slice(0, 3));
//             region2.push(board[r].slice(3, 6));
//             region3.push(board[r].slice(6, 9));
//         } else if (r >= 3 && r < 6) {
//             region4.push(board[r].slice(0, 3));
//             region5.push(board[r].slice(3, 6));
//             region6.push(board[r].slice(6, 9));
//         } else {
//             region7.push(board[r].slice(0, 3));
//             region8.push(board[r].slice(3, 6));
//             region9.push(board[r].slice(6, 9));
//         }
//     }
//     console.log(`
//                 \n
//                 Region 1: ${region1}
//                 \n
//                 Region 2: ${region2}
//                 \n
//                 Region 3: ${region3}
//                 \n
//                 Region 4: ${region4}
//                 \n
//                 Region 5: ${region5}
//                 \n
//                 Region 6: ${region6}
//                 \n
//                 Region 7: ${region7}
//                 \n
//                 Region 8: ${region8}
//                 \n
//                 Region 9: ${region9}
//                 `)
// }

// divideBoardByRegions(easyBoard);

const eliminateEasyCells = (board) => {
    
    console.log(`iterating through the entire board provided...`)
    for (let y = 0; y < board.length; y++) {
        console.log(`finding numbers found in two consecutive rows...`)
        for (let i = 0; i < board[y].length; i++) {
            for (let j = 0; j < board[(y+1)].length; j++) {
                if (board[y][i] === board[(y+1)][j]) {
                    if (y >= 8) {
                        return `that's it`
                    } else if ((board[y+2].includes(board[y][i]) === false)) {
                        console.log(`Row ${y+3} must contain a ${board[y][i]}`)
                        // check what region it's missing from
                        // region1.contains(board[y][y]) === false ?
                        // console.log(`And I suspect it belongs in column (blank) or column (blank)`)
                        // this is the part where i go region by region finding which region doesn't have that number
                    }
                }
            }
        }
    }
}

eliminateEasyCells(easyBoard);