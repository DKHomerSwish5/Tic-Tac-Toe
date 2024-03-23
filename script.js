(function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];
    let player1Turn = true; //Start the game off with Player 1 input for board
    let player1;
    let player2;
    let rowIndex;
    let colIndex;

    const initializeBoard = () =>{
        for (let i=0; i<rows; i++){
            board[i]=[];
            for (let j=0; j<columns; j++){
                board[i][j]= " ";
            }
        }
    }

    const displayBoard = () => {
        console.log(board.map(row=> row.join('|')).join('\n-----\n'));
    }

    const playerSelection = () =>{
        player1 = prompt("Player 1 enter X or O");
        if(player1 === "X" || player1 === "O"){
            player2 = (player1 === "X" ? "O" : "X");
            console.log(`Player 1 selected ${player1} therefore Player 2 is ${player2}.`);
        }
        else if(player1 === null){  //Handles if prompt is cancelled
            playerSelection();
        }
        else{
            console.log("Invalid input for Player 1 symbol");
            playerSelection();
        }
    }

    const updateBoard = () => {
        if(player1Turn === true){
            input = player1;    // If it is player1 turn, their input will be selected
            rowIndex = prompt("Player 1 enter row index (0-2): ");
            colIndex = prompt("Player 1 Enter column index (0-2): ");
            if(rowIndex === null || colIndex === null){ //Handles if prompt is cancelled
                updateBoard();  //Ask to re-enter index values
            }
        }
        else{
            input = player2;    // If player1 input is false, then player2 input will be selected
            rowIndex = prompt("Player 2 enter row index (0-2): ");
            colIndex = prompt("Player 2 enter column index (0-2): ");
            if(rowIndex === null || colIndex === null){ //Handles if prompt is cancelled
                updateBoard();  //Ask to re-enter index values
            }
        }
        if(rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < columns && (input === "X" || input === "O")){
            if(board[rowIndex][colIndex] === "X" || board[rowIndex][colIndex] === "O"){
                console.log("Invalid input. Please enter value in a different index position.");
                updateBoard();
            }
            else{
                board[rowIndex][colIndex]=input;
                player1Turn = !player1Turn; //Toggle Turn
                displayBoard();
                checkWinner();
            }
        }
        else{
            console.log("Invalid input. Please re-enter correct row/column index(0-2)");
            updateBoard();
        }
    }
    
    const checkWinner = () => {
        let tie;
        let winner;
        const winRow = () =>{
            for(let i=0; i<rows; i++){
                let j=0;
                if(board[i][j] === board[i][j+1] && board[i][j+2] === board[i][j] && (board[i][j]=== "X" || board[i][j] === "O")){
                    winner = true;
                    console.log("You Win");
                    resetGameInput();
                }
                else{
                    winner = false;
                }
            }
        }
        const winCol = () =>{
            for(let j=0; j<columns; j++){
                let i=0;
                if(board[i][j] === board[i+1][j] && board[i+2][j] === board[i][j] && (board[i][j]=== "X" || board[i][j] === "O")){
                    winner = true;
                    console.log("You Win");
                    resetGameInput();
                }
                else{
                    winner = false;
                }
            }
        }
        const winDiag = () =>{
            let i = 0;
            if((board[i][i] === board[i+1][i+1] && board[i+2][i+2] === board[i][i] && (board[i][i] === "X" || board[i][i] === "O")) ||(board[i][i+2] === board[i+1][i+1] && board[i+2][i] === board[i][i+2] && (board[i][i+2]=== "X" || board[i][i+2] === "O"))){
                winner = true;
                console.log("You Win");
                resetGameInput();
            }
            else{
                winner = false;
            }
        }
        const checkTie = () => {
            let emptySpace;
            for (let i=0; i<rows; i++){
                for (let j=0; j<columns; j++){
                    if(board[i][j]=== " "){
                        emptySpace = true;
                        tie = false;
                        updateBoard();  //Empty space means the game will still continue since no winner was found
                    }
                    else{
                        emptySpace = false;
                    }        
                }
            }
            if(winner === false && emptySpace === false){
                tie = true;     //No winner and no empty space on board therefore we have a tie
            }
            if(tie === true){
                tieGame();
            }
        }
        const tieGame = () => {
            if(tie === true){
                console.log("Tie Game");
                resetGameInput();
            }
        }
        winRow();
        winCol();
        winDiag();
        checkTie();
    }
    const resetGame = () => {
        initializeBoard();
        displayBoard();
    }
    const resetGameInput = () =>{
        let resetInput = prompt("Would you like to reset the game. Enter 'Y' to reset game.");
                if(resetInput === "Y"){  
                        resetGame();
                }
                else if(resetInput === null){
                    console.log("Invalid reset game input");
                    resetGameInput();
                }
                else{
                    console.log("Invalid reset game input");
                    resetGameInput();
                }
    }
    initializeBoard();
    displayBoard();
    playerSelection();
    updateBoard();    
})();