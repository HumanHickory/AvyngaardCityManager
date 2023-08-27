import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.scss']
})
export class ColorSchemeComponent {
  @Input() CityName: string = 'City Name';
  @Input() Validate: boolean = false;

  colorSchemeFormGroup: FormGroup;

  primaryColor: string = '#ffc400';
  backgroundColor: string = '#020675';
  navColor: string = '#020675';
  primaryTextColor: string = '#000000';
  headerTextColor: string = '#020675';

  //These validators don't work. Required does, but minLength gets ignored. 
  constructor(private fb: FormBuilder){
    this.colorSchemeFormGroup = this.fb.group({
      primaryColor: [this.primaryColor, [Validators.required, Validators.minLength(7)]],
      backgroundColor: [this.backgroundColor, [Validators.required, Validators.minLength(7)]], 
      navColor: [this.navColor, [Validators.required, Validators.minLength(7)]], 
      primaryTextColor: [this.primaryTextColor,[Validators.required, Validators.minLength(7)]], 
      headerTextColor: [this.headerTextColor, [Validators.required, Validators.minLength(7)]],
    });
  }
}
