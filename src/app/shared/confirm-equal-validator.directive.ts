import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmEqualValidator]',

  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator{
  @Input() appConfirmEqualValidator :string | any;
  validate(control: AbstractControl): {[key:string]: any} | null{
    //Have the password field
    const controlToCompare = control.get(this.appConfirmEqualValidator);
    //Checks whether the password field is not equal to the confirmPassword Field(control)
    if(controlToCompare && controlToCompare.value !== control.value) {
      return {'notEqual': true}
    }

    return null;
  }
}