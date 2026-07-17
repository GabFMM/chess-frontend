import { Component, signal } from '@angular/core';
import { ConfigMatch } from '../../shared/config-match/config-match';
import { Chessboard } from '../../shared/chessboard/chessboard';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-play-local',
    imports: [ConfigMatch, Chessboard, RouterLink],
    templateUrl: './play-local.html',
    styleUrl: './play-local.css',
})
export class PlayLocal{
    protected isConfigured = signal(false);

    protected menuOpen = false;
    protected isPaused = signal(false);

    protected createMatch(configured: boolean){
        this.isConfigured.set(configured);
    }

    protected onOptionsClicked(){
        this.menuOpen = !this.menuOpen;
    }

    protected onPauseContinueClicked(){
        this.isPaused.set(!this.isPaused())
    }
}
