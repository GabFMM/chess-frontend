import { ChessboardModel } from "../chessboard/chessboardModel";
import { Piece } from "./piece";

export class Pawn extends Piece{
    public override getMovements(chessboard: ChessboardModel, myAnotationPosition: string): string[] {
        let movements = new Array<string>();
        const myCoord = this.chessboardService.convertToCoordinates(myAnotationPosition);
        
        if(this.color === "black"){
            // special movements
            if(myAnotationPosition.charAt(1) === "7"){
                movements.push(`${myAnotationPosition.charAt(0)}5`);
            }

            // en passant
            const leftSquare = chessboard.getSquare(myCoord[0] - 1, myCoord[1]);
            const rightSquare = chessboard.getSquare(myCoord[0] + 1, myCoord[1]);

            if(
                myAnotationPosition.charAt(1) === "4" &&
                (
                    leftSquare != null &&
                    leftSquare
                )
            )
        }
        else{
            // special movements
            if(myAnotationPosition.charAt(1) === "2"){
                movements.push(`${myAnotationPosition.charAt(0)}4`);
            }
        }

        return movements;
    }

    public override getPermittedMovements(chessboard: ChessboardModel, myAnotationPosition: string): string[] {
        throw new Error("Method not implemented.");
    }
}
