let puzzle = [
    [1,2,3,4,'.',6,7,8,9],
    ['.',8,7,6,5,4,3,2,'.'],
    [1,'.',9,8,3,4,7,'.',5]
  ]
  
  /////////////////////////////////
  // 1. UNDERSTAND THE PROBLEM: //
  ///////////////////////////////
    // I need a function that can dynamically solve sudoku puzzles
    // I'll be given a game "board" which has some numbers already and some "blanks" rep'd by "."
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
        ['.','.','.','.',2,'.',5,'.',4],
        
      ]
  
  const solveSudoku = () => {
  
  }
  
  console.log(puzzle);
  
  console.log(puzzle[1][0]);
  
  ////////////////////////////////////////////////
  // 4. REVIEW AND SEEK ALTERNATIVE SOLUTIONS: //
  //////////////////////////////////////////////