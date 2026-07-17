import { Piece } from "../pieces/piece";
import { Square } from "./square";

export class ChessboardModel {
    private squares: Square[][] | null = null;
    
    constructor(){
        this.squares = Array.from(
            { length: 8 }, 
            (_, row) => Array.from(
                { length: 8 }, 
                (_, col) => {
                    // a, b, c, ..., h
                    const file = String.fromCharCode(97 + col);
                    
                    // 8, 7, ..., 1
                    const rank = 8 - row;

                    return new Square(
                        `${file}${rank}`, 
                        this.getInitialPiece(row, col)
                    );
                }
            )
        )
    }

    private getInitialPiece(row: number, col: number): Piece | null {
        if (row === 1) {
            return { color: "black", name: "pawn" };
        }

        if (row === 6) {
            return { color: "white", name: "pawn" };
        }

        const order: Piece["name"][] = [
            "rook",
            "knight",
            "bishop",
            "queen",
            "king",
            "bishop",
            "knight",
            "rook"
        ];

        if (row === 0) {
            return { color: "black", name: order[col] };
        }

        if (row === 7) {
            return { color: "white", name: order[col] };
        }

        return null;
    }    

    // nunca vai retornar null
    public getSquare(row: number, col: number): Square | null {
        if(this.squares && row >= 0 && row <= 7 && col >= 0 && col <= 7)
            return this.squares[row][col];
        return null;
    }

    // evite usar
    public getSquares(): Square[][] | null{
        return this.squares;
    }
}
