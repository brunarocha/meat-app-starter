import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {RadioOption} from './radio-option.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => RadioComponent ),
            multi: true
        }
    ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() options: RadioOption[];
    value: any;
    onChanged: any;

    constructor() { }

    ngOnInit() {
    }

    setValue(value: any) {
        this.value = value;
        this.onChanged(this.value);
    }

    registerOnChange(fn: any): void {
        this.onChanged = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

}
