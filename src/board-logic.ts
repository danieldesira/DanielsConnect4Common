import { Coin } from "./enums/coin"

export class BoardLogic {
    private columns: number = 9;
    private rows: number = 8;
    private board: Array<Array<Coin>> = [];

    public constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.initBoard();
    }

    public getColumns = () => this.columns;
    public getRows = () => this.rows;
    public getBoard = () => this.board;
    public resetBoard = () => this.initBoard();

    /**
     * Initialises board matrix
     */
    private initBoard() {
        this.board = new Array(this.columns);
        for (let col = 0; col < this.columns; col++) {
            this.board[col] = new Array(this.rows);
            for (let row = 0; row < this.rows; row++){
                this.board[col][row] = Coin.Empty;
            }
        }
    }

    /**
     * Counts and checks the coin placeholders adjecent to the specified point (column x row). Matches may occurr, 
     * vertically, horizontally or diagonally.
     * @param column - The column number of the starting point
     * @param row - The row number of the starting point
     * @param currentTurn - Coin color to be checked
     * @returns Count of adjecent coins with the same color
     */
    public countConsecutiveCoins(column: number, row: number, currentTurn: Coin): number {
        let count: number = row;
        let coinCount: number = 0;

        // Vertical check
        while (coinCount < 4 && count < this.rows && this.board[column][count] === currentTurn) {
            coinCount++;
            count++;
        }
        
        if (coinCount < 4) {

            // Horizontal check
            coinCount = 0;
            count = column;
            while (count < this.columns && this.board[count][row] === currentTurn) {
                coinCount++;
                count++;
            }
            count = column - 1;
            while (count > -1 && this.board[count][row] === currentTurn) {
                coinCount++;
                count--;
            }
        
            // Diagonal checks
            if (coinCount < 4) {
                coinCount = 0;
                let rowCount: number = row - 1;
                let colCount: number = column + 1;
                while (coinCount < 4 && rowCount > -1 &&  colCount < this.columns && this.board[colCount][rowCount] === currentTurn) {
                    coinCount++;
                    colCount++; //right columns
                    rowCount--; //upper rows
                }
                colCount = column;
                rowCount = row;
                while (coinCount < 4 && rowCount < this.rows && colCount > -1 && this.board[colCount][rowCount] === currentTurn) {
                    coinCount++;
                    colCount--; // left columns
                    rowCount++; // lower rows
                }
                
                if (coinCount < 4) {
                    coinCount = 0;
                    rowCount = row - 1;
                    colCount = column - 1;
                    while (coinCount < 4 && rowCount > -1 && colCount > -1 && this.board[colCount][rowCount] === currentTurn) {
                        coinCount++;
                        colCount--; // left columns
                        rowCount--; // upper rows
                    }
                    colCount = column;
                    rowCount = row;
                    while (coinCount < 4 && rowCount < this.rows && colCount < this.columns && this.board[colCount][rowCount] === currentTurn) {
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
     * @returns True if full, false if not
     */
    public isBoardFull(): boolean {
        let full: boolean = true;
        for (let col: number = 0; col < this.columns; col++) {
            // Check upper row in every column
            if (this.board[col][0] === Coin.Empty) {
                full = false;
                break;
            }
        }
        return full;
    }

    /**
     * Places coin in a specific column
     * @param color The color of the coin
     * @param column The specified column number
     * @returns Row number where the coin was placed. -1 if column is full.
     */
    public putCoin(color: Coin, column: number): number {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.board[column][row] === Coin.Empty) {
                this.board[column][row] = color;
                return row;
            }
        }
        return -1;
    }

    /**
     * Board matrix setter
     * @param board The new board matrix
     */
    public setBoard(board: Array<Array<Coin>>) {
        this.board = board;
    }

    /**
     * Sets a single board matrix item, at the specified row and column
     * @param coin The coin color
     * @param col The column number
     * @param row The row number
     */
    public setBoardItem(coin: Coin, col: number, row: number) {
        this.board[col][row] = coin;
    }
}