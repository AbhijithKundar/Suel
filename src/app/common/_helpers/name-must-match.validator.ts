import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function NameMustMatch(controlName: string, matchingControlName: any) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        // set error on matchingControl if validation fails
        if (matchingControlName.indexOf(control.value) <= -1) {
            control.setErrors({ mustMatch: true });
        } else {
            control.setErrors(null);
        }
    }
}
