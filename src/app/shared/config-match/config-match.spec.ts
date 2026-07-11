import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMatch } from './config-match';

describe('ConfigMatch', () => {
    let component: ConfigMatch;
    let fixture: ComponentFixture<ConfigMatch>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigMatch],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigMatch);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
