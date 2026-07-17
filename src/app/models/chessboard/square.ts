import { Piece } from "../pieces/piece";

export class Square {
    // Em anotação de xadrez
    // Ex: a1, h8, c5, etc
    private readonly id: string;

    private piece: Piece | null;

    constructor(id: string, piece: Piece | null){
        this.id = id;
        this.piece = piece;
    }

    public putPiece(piece: Piece){
        this.piece = piece;
    }

    public removePiece(){
        this.piece = null;
    }

    public getPiece(){
        return this.piece;
    }

    public getId(){
        return this.id;
    }
}
