(function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (i=0; i<rows; i++){
        board[i]=[];
        for (j=0; j<columns; j++){
            board[i][j]=[" "];
        }
    }

    const displayBoard = () => {
        console.log(board.map(row=> row.join('|')).join('\n-----\n'));
    }

    const updateBoard = () => {
        let rowIndex = prompt("Enter row index (0-2): ");
        let colIndex = prompt("Enter column index (0-2): ");
        let input = prompt("Enter X or O");

        if(rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < columns && input == "X" || input =="O"){
            board[rowIndex][colIndex]=input;
            displayBoard();
        }
        else{
            console.log("Invalid input. Please re-enter correct row/column index or X or O");
        }
    }
    
    const checkWinner = () => {
        //Checks winner via rows
        for(i=0; i<rows; i++){
            let j=0;
            if(board[i][j] == board[i][j+1] == board[i][j+2]){
                //Winner
            }
        }
        //Checks winner via columns
        for(j=0; j<columns; j++){
            let i=0;
            if(board[i][j] == board[i+1][j] == board[i+2][j]){
                //Winner
            }
        }
        //Checks winner via Diagonal Cross
        let i = 0;
        if(board[i][i] == board[i+1][i+1] == board[i+2][i+2]){
            //Winner
        }
    }
    displayBoard();
    updateBoard();
    
})();