import { inject } from "@angular/core";
import { ChessboardModel } from "../chessboard/chessboardModel";
import { ChessboardService } from "../../services/chessboard-service";

export abstract class Piece {
    protected readonly chessboardService = inject(ChessboardService);
    
    protected readonly color: "white" | "black";
    protected readonly name: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

    constructor(color: "white" | "black", name: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king"){
        this.color = color;
        this.name = name;
    }

    public getColor(): string{
        return this.color;
    }

    public getName(): string{
        return this.name;
    }

    public abstract getMovements(chessboard: ChessboardModel, myAnotationPosition: string): string[]

    public abstract getPermittedMovements(chessboard: ChessboardModel, myAnotationPosition: string): string[];
}
