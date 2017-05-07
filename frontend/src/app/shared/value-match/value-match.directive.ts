import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, FormControl, AbstractControl, NG_VALIDATORS } from '@angular/forms';
 
@Directive({
  selector: 'value-match',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => ValueMatchDirective), multi: true}]
})
export class ValueMatchDirective implements Validator{
  @Input() compare : any;
  validate(c : FormControl): {[key: string]: any} {
    return {"matching": false};
  }
  constructor(){
      console.log(this);
  }
}