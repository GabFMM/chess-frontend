import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayLocal } from './play-local';

describe('PlayLocal', () => {
    let component: PlayLocal;
    let fixture: ComponentFixture<PlayLocal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PlayLocal],
        }).compileComponents();

        fixture = TestBed.createComponent(PlayLocal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
