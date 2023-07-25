import { Coin } from "./enums/coin"

export class BoardLogic {
    public static columns: number = 9;
    public static rows: number = 8;

    /**
     * Initialises board matrix
     * @param board - The board matrix
     */
    public static initBoard(board: Array<Array<Coin>>) {
        for (let col = 0; col < BoardLogic.columns; col++) {
            board[col] = new Array(BoardLogic.rows);
            for (let row = 0; row < BoardLogic.rows; row++){
                board[col][row] = Coin.Empty;
            }
        }
    }

    /**
     * Counts and checks the coin placeholders adjecent to the specified point (column x row). Matches may occurr, 
     * vertically, horizontally or diagonally.
     * @param board - The board matrix
     * @param column - The column number of the starting point
     * @param row - The row number of the starting point
     * @param currentTurn - Coin color to be checked
     * @returns Count of adjecent coins with the same color
     */
    public static countConsecutiveCoins(board: Array<Array<Coin>>, column: number, row: number, currentTurn: Coin): number {
        let count: number = row;
        let coinCount: number = 0;

        // Vertical check
        while (coinCount < 4 && count < BoardLogic.rows && board[column][count] === currentTurn) {
            coinCount++;
            count++;
        }
        
        if (coinCount < 4) {

            // Horizontal check
            coinCount = 0;
            count = column;
            while (count < BoardLogic.columns && board[count][row] === currentTurn) {
                coinCount++;
                count++;
            }
            count = column - 1;
            while (count > -1 && board[count][row] === currentTurn) {
                coinCount++;
                count--;
            }
        
            // Diagonal checks
            if (coinCount < 4) {
                coinCount = 0;
                let rowCount: number = row - 1;
                let colCount: number = column + 1;
                while (coinCount < 4 && rowCount > -1 &&  colCount < BoardLogic.columns && board[colCount][rowCount] === currentTurn) {
                    coinCount++;
                    colCount++; //right columns
                    rowCount--; //upper rows
                }
                colCount = column;
                rowCount = row;
                while (coinCount < 4 && rowCount < BoardLogic.rows && colCount > -1 && board[colCount][rowCount] === currentTurn) {
                    coinCount++;
                    colCount--; // left columns
                    rowCount++; // lower rows
                }
                
                if (coinCount < 4) {
                    coinCount = 0;
                    rowCount = row - 1;
                    colCount = column - 1;
                    while (coinCount < 4 && rowCount > -1 && colCount > -1 && board[colCount][rowCount] === currentTurn) {
                        coinCount++;
                        colCount--; // left columns
                        rowCount--; // upper rows
                    }
                    colCount = column;
                    rowCount = row;
                    while (coinCount < 4 && rowCount < BoardLogic.rows && colCount < BoardLogic.columns && board[colCount][rowCount] === currentTurn) {
                        coinCount++;
                        colCount++; // right columns
                        rowCount++; // lower rows
                    }
                }
            }
        }

        return coinCount;
    }

    /**
     * Checks if the board matrix is full
     * @param board The board matrix
     * @returns True if full, false if not
     */
    public static isBoardFull(board: Array<Array<Coin>>): boolean {
        let full: boolean = true;
        for (let col: number = 0; col < BoardLogic.columns; col++) {
            // Check upper row in every column
            if (board[col][0] === Coin.Empty) {
                full = false;
                break;
            }
        }
        return full;
    }

    /**
     * Places coin in a specific column
     * @param board The board matrix
     * @param color The color of the coin
     * @param column The specified column number
     * @returns Row number where the coin was placed. -1 if column is full.
     */
    public static putCoin(board: Array<Array<Coin>>, color: Coin, column: number): number {
        for (let row = BoardLogic.rows - 1; row >= 0; row--) {
            if (board[column][row] === Coin.Empty) {
                board[column][row] = color;
                return row;
            }
        }
        return -1;
    }   
}