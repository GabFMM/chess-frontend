import { Service } from '@angular/core';
import { ChessboardModel } from '../models/chessboardModel';

@Service()
export class ChessboardService {
    // Converte para anotação do xadrez
    // Ex: a1, h8, b2, etc
    // row: [0, 7]
    // col: [0, 7]
    public convertToNotation(row: number, col: number): string{
        // a, b, c, ..., h
        const file = String.fromCharCode(97 + col);
        
        // 8, 7, ..., 1
        const rank = 8 - row;

        return `${file}${rank}`;
    }

    // Retorna um array de duas posições 
    // no formato de coordenadas de matriz
    // [i, j]
    // i: [0, 7]
    // j: [0, 7]
    public convertToCoordinates(notation: string): number[]{
        let i = 97 - notation.charCodeAt(0);
        let j = 8 - Number(notation.charAt(1));
        return [i, j]
    }

    public getPermittedMovements(chessboard: ChessboardModel, notation: string): string[] | null{       
        const coord = this.convertToCoordinates(notation);

        const square = chessboard.getSquare(coord[0], coord[1]);

        if(square?.getPiece()){
            return null;
        }

        const piece = square?.getPiece();
        
    }
}
