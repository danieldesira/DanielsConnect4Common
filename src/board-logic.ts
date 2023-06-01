import { Coin } from "./enums/coin"

export default class BoardLogic {

    public static columns: number = 9;
    public static rows: number = 8;

    public static initBoard(board: Array<Array<Coin>>) {
        for (let col = 0; col < BoardLogic.columns; col++) {
            board[col] = new Array(BoardLogic.rows);
            for (let row = 0; row < BoardLogic.rows; row++){
                board[col][row] = Coin.Empty;
            }
        }
    }

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