import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-config-match',
    imports: [ReactiveFormsModule],
    templateUrl: './config-match.html',
    styleUrl: './config-match.css',
})
export class ConfigMatch {
    protected configForm = new FormGroup(
        {
            hasTime: new FormControl<boolean | null>(false, Validators.required),
            whiteTimeMin: new FormControl<number | null>({
                value: 0,
                disabled: true
            }),
            whiteTimeSec: new FormControl<number | null>({
                value: 0,
                disabled: true
            }),
            blackTimeMin: new FormControl<number | null>({
                value: 0,
                disabled: true
            }),
            blackTimeSec: new FormControl<number | null>({
                value: 0,
                disabled: true
            }),
            increment: new FormControl<number | null>({
                value: 0,
                disabled: true
            }),
            rotate: new FormControl<boolean | null>(false, Validators.required)
        }
    )

    protected configured = output<boolean>();

    ngOnInit(): void {
        this.configForm.get("hasTime")?.valueChanges.subscribe(value => {
            const whiteMin = this.configForm.get("whiteTimeMin");
            const whiteSec = this.configForm.get("whiteTimeSec");
            const blackMin = this.configForm.get("blackTimeMin");
            const blackSec = this.configForm.get("blackTimeSec");
            const increment = this.configForm.get("increment");

            if (value) {
                whiteMin?.enable();
                whiteSec?.enable();
                blackMin?.enable();
                blackSec?.enable();
                increment?.enable();

                whiteMin?.addValidators(Validators.required);
                whiteSec?.addValidators(Validators.required);
                blackMin?.addValidators(Validators.required);
                blackSec?.addValidators(Validators.required);
                increment?.addValidators(Validators.required);
            } else {
                whiteMin?.disable();
                whiteSec?.disable();
                blackMin?.disable();
                blackSec?.disable();
                increment?.disable();

                whiteMin?.clearValidators();
                whiteSec?.clearValidators();
                blackMin?.clearValidators();
                blackSec?.clearValidators();
                increment?.clearValidators();
            }

            whiteMin?.updateValueAndValidity();
            whiteSec?.updateValueAndValidity();
            blackMin?.updateValueAndValidity();
            blackSec?.updateValueAndValidity();
            increment?.updateValueAndValidity();
        })
    }

    protected submitForm(){
        this.configured.emit(true);
    }
}
