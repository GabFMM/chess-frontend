import { Component } from '@angular/core';
import { ChessboardModel } from '../../models/chessboardModel';
import { Square } from '../../models/square';
import { Piece } from '../../models/pieces/piece';
import { ChessboardService } from '../../services/chessboard-service';

@Component({
    selector: 'app-chessboard',
    imports: [],
    templateUrl: './chessboard.html',
    styleUrl: './chessboard.css',
})
export class Chessboard {
    protected chessboardService = new ChessboardService();
    protected chessboardModel = new ChessboardModel();

    protected getPieceImage(square: Square): string {
        const piece = square.getPiece();

        if (!piece) {
            return "";
        }

        const color = piece.color === "white" ? "w" : "b";

        const names: Record<Piece["name"], string> = {
            pawn: "p",
            rook: "r",
            knight: "n",
            bishop: "b",
            queen: "q",
            king: "k"
        };

        return `https://assets-themes.chess.com/image/ejgfv/150/${color}${names[piece.name]}.png`;
    }

    protected onChessboardFocusIn(event: FocusEvent){
        const target = event.target as HTMLElement;

        // clicou na peça
        // mostra os movimentos possíveis
        if(target.tagName === "IMG"){
            target.parentElement?.id
        }
    }
}
