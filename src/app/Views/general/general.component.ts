import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitySize } from 'src/app/Models/CitySize';
import { CityService } from 'src/app/Services/Cities/CityService';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  @Input() Validate: boolean = false;
  @Output() nameUpdated: EventEmitter<string> = new EventEmitter<string>();


  generalForm: FormGroup;
  CitySizes: CitySize[] = [];

  constructor(private fb: FormBuilder, private cityService: CityService){
    this.generalForm = this.fb.group({
      name: ['', Validators.required],
      area: ['', Validators.required], 
      pathName: ['', Validators.required], 
      sizeId: [1, Validators.required], 
      motto: ['', Validators.required],
      history: ['', [Validators.required, Validators.minLength(30)] ],
      magicIdeology: [''],
    });
  }

  ngOnInit() {
    this.cityService.GetCitySizes().subscribe({
      next: (citySizes) => this.CitySizes = citySizes,
      error: (e) => console.error('Error Retrieving City Sizes:', e)
    })
  }

  onNameChange() {
    this.nameUpdated.emit(this.generalForm.get('name')?.value);
  }  
  
}
