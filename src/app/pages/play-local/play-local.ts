import { Component, signal } from '@angular/core';
import { ConfigMatch } from '../../shared/config-match/config-match';

@Component({
    selector: 'app-play-local',
    imports: [ConfigMatch],
    templateUrl: './play-local.html',
    styleUrl: './play-local.css',
})
export class PlayLocal{
    protected isConfigured = signal(false);

    protected createMatch(configured: boolean){
        this.isConfigured.set(configured);
    }
}
