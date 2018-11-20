
  
  /////////////////////////////////
  // 1. UNDERSTAND THE PROBLEM: //
  ///////////////////////////////
    // I need a function that can dynamically solve sudoku puzzles
    // I'll be given a game "board" which has some numbers already and some "blanks" rep'd by 0
    // QUESTIONS:
      // 1A. WHAT ARE THE RULES FOR SUDOKU?
        // Each horizontal and vertical line must contain  digits 1 - 9
        // Each 3 x 3 region must contain 1 - 9
      // 1B. HOW DYNAMIC DOES IT NEED TO BE? Meaning, does it need to generate it's own boards, or can that just be input as an argument?
  
  ////////////////////////
  // 2. DEVISE A PLAN: //
  //////////////////////
    // I'll create test cases and a function which solves the puzzle.
    // I'll give it the "board" as a two dimensional array
    // I'll find cell's equal to 0, and then start using the process of elimination to make guesses
    // I will use multiple smaller functions to solve each part of the puzzle.
      // One function will find the first 0
      // The next function will check which numbers are missing horizontally
      // Then a function will check which numbers are missing vertically
      // Then a function will check which numbers are missing in the cell's 3 x 3 region
  
  /////////////////////////////////////
  // 3. Execute the plan and solve: //
  ///////////////////////////////////
  
    // Test Case 1:
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
      ]
  
  const solveSudoku = (easyBoard, start) => {
    const guessHorizontal = (x) => {
      for(let i = 0; i<board.length; i++) {
        
      }
    }
  }
  
  console.log(board1);
  
  console.log(board1[1][0]);
  
  ////////////////////////////////////////////////
  // 4. REVIEW AND SEEK ALTERNATIVE SOLUTIONS: //
  //////////////////////////////////////////////