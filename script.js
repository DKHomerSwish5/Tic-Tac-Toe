(function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i=0; i<rows; i++){
        board[i]=[];
        for (j=0; j<columns; j++){
            board[i][j]=[" "];
        }
    }

    const displayBoard = () => {
        console.log(board.map(row=> row.join('|')).join('\n-----\n'));
    }

    const updateBoard = () => {
        let input = prompt("Enter X or O");
        let rowIndex = prompt("Enter row index (0-2): ");
        let colIndex = prompt("Enter column index (0-2): ");

        if(rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < columns && input == "X" || input =="O"){
            if(board[rowIndex][colIndex] == "X" || board[rowIndex][colIndex] == "O"){
                console.log("Invalid input. Please X or O in a different index position.");
                displayBoard();
                checkWinner();
            }
            else{
                board[rowIndex][colIndex]=input;
                displayBoard();
                checkWinner();
            }
        }
        else{
            console.log("Invalid input. Please re-enter correct row/column index or X or O");
            updateBoard();
        }
    }
    
    const checkWinner = () => {
        //Checks winner via rows
        for(let i=0; i<rows; i++){
            let j=0;
            if(board[i][j] === board[i][j+1] && board[i][j+2] === board[i][j] && (board[i][j]=== "X" || board[i][j] === "O")){
                console.log("You Win");
            }
        }
        //Checks winner via columns
        for(let j=0; j<columns; j++){
            let i=0;
            if(board[i][j] === board[i+1][j] && board[i+2][j] === board[i][j] && (board[i][j]=== "X" || board[i][j] === "O")){
                console.log("You Win");
            }
        }
        //Checks winner via Diagonal Cross
        let i = 0;
        if((board[i][i] === board[i+1][i+1] && board[i+2][i+2] === board[i][i] && (board[i][i]=== "X" || board[i][i] === "O")) ||(board[i][i+2] === board[i+1][i+1] && board[i+2][i] === board[i][i+2] && (board[i][i+2]=== "X" || board[i][i+2] === "O"))){
            console.log("You Win");
        }
        updateBoard();
    }
    displayBoard();
    updateBoard();
    
})();