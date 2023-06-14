export default class GameMessage {

    public static isInitialMessage(msg: any): boolean {
        return (!isNaN(msg['gameId']) && msg['color']) || msg['opponentName'];
    }

    public static isInactivityMessage(msg: any): boolean {
        return msg['endGameDueToInactivity'] && msg['currentTurn'];
    }

    public static isActionMessage(msg: any): boolean {
        return msg['action'] && !isNaN(msg['column']);
    }

    public static isSkipTurnMessage(msg: any): boolean {
        return msg['skipTurn'] && msg['currentTurn'];
    }

    public static isWinnerMessage(msg: any): boolean {
        return msg['winner'];
    }

    public static isTieMessage(msg: any): boolean {
        return msg['tie'];
    }

    public static isCurrentTurnMessage(msg: any): boolean {
        return msg['currentTurn'];
    }
    
}