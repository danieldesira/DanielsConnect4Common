/**
 * @class GameMessage base model
 */
export class GameMessage {

    /**
     * Tests if message is an initial message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message is initial
     * @public
     * @static
     */
    public static isInitialMessage(msg: any): boolean {
        return (!isNaN(msg['gameId']) && msg['color']) || msg['opponentName'];
    }

    /**
     * Tests if message is an inactivity message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message represents inactivity
     * @public
     * @static
     */
    public static isInactivityMessage(msg: any): boolean {
        return msg['endGameDueToInactivity'] && msg['currentTurn'];
    }

    /**
     * Tests if message is an action message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message represents an action
     * @public
     * @static
     */
    public static isActionMessage(msg: any): boolean {
        return msg['action'] && !isNaN(msg['column']) && msg['color'];
    }

    /**
     * Tests if message is a skip turn message
     * @param {*} msg - Object to check 
     * @returns {boolean} Whether message is a skip turn
     * @public
     * @static
     */
    public static isSkipTurnMessage(msg: any): boolean {
        return msg['skipTurn'] && msg['currentTurn'];
    }

    /**
     * Tests if message is a winner message
     * @param {*} msg - Object to check 
     * @returns {boolean} Whether message represents win
     * @public
     * @static
     */
    public static isWinnerMessage(msg: any): boolean {
        return msg['winner'];
    }

    /**
     * Tests if message is a tie message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message represents tie
     * @public
     * @static
     */
    public static isTieMessage(msg: any): boolean {
        return msg['tie'];
    }

    /**
     * Tests if message is a current turn message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message represents current turn
     * @public
     * @static
     */
    public static isCurrentTurnMessage(msg: any): boolean {
        return msg['currentTurn'];
    }

    /**
     * Tests if message is a disconnect message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message represent a disconnection
     * @public
     * @static
     */
    public static isDisconnectMessage(msg: any): boolean {
        return msg['hardDisconnect'];
    }

    /**
     * Tests if message is an error message
     * @param {*} msg - Object to check
     * @returns {boolean} Whether message is an error
     * @public
     * @static
     */
    public static isErrorMessage(msg: any): boolean {
        return msg['error'];
    }
    
}