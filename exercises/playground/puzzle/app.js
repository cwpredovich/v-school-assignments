
  
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
    // 
  
  /////////////////////////////////////
  // 3. Execute the plan and solve: //
  ///////////////////////////////////
  
    // Test Case 1:
      const board1 = [
        [0,0,0,0,2,0,5,0,4],
        []
        
      ]
  
  const solveSudoku = (board, start) => {
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