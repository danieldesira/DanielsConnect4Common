import { dimensions } from "./constants";
import { Coin } from "./enums/coin"
import { BoardDimensions } from "./enums/dimensions";

export class BoardLogic {
    private columns: number;
    private rows: number;
    private board: Array<Array<Coin>> = [];
    private dimensions: BoardDimensions;

    /**
     * Initialises the board matrix given the board dimensions
     * @param dim The board dimensions type
     */
    public constructor(dim: BoardDimensions) {
        switch (dim) {
            case BoardDimensions.Small:
                this.columns = dimensions.small.columns;
                this.rows = dimensions.small.rows;
                break;
            case BoardDimensions.Medium:
                this.columns = dimensions.medium.columns;
                this.rows = dimensions.medium.rows;
                break;
            case BoardDimensions.Large:
                this.columns = dimensions.large.columns;
                this.rows = dimensions.large.rows;
                break;
        }
        
        this.dimensions = dim;
        this.initBoard();
    }

    /**
     * Getter for the number of columns
     * @returns The number of columns
     */
    public getColumns = () => this.columns;

    /**
     * Getter for the number of rows
     * @returns The number of rows
     */
    public getRows = () => this.rows;

    /**
     * Getter for the board dimensions
     * @returns The board dimensions
     */
    public getDimensions = () => this.dimensions;

    /**
     * Getter for the board matrix
     * @returns The board matrix
     */
    public getBoard = () => this.board;
    
    /**
     * Resets the board matrix retaining the given dimensions
     */
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