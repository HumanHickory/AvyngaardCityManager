import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from 'src/app/Models/Campaign';
import { Help } from 'src/app/Models/Help';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-help-wanted',
  templateUrl: './help-wanted.component.html',
  styleUrls: ['./help-wanted.component.scss']
})
export class HelpWantedComponent {
  Validate: boolean = false;
  Help: Help[] = [];
  Campaigns: Campaign[] = [];

  helpWantedFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private cityService: CityService){
    this.helpWantedFormGroup = this.fb.group({
      title: ['', Validators.required],
      detailsHtml: ['', Validators.required],
      campaignId: [undefined]
    });

    this.cityService.ListCampaigns().subscribe({
      next: (campaigns) => this.Campaigns = campaigns,
      error: (e) => console.error('Error Retrieving Campaigns:', e)
    })
  }

  remove(index: number){
    this.Help.splice(index);
  }

  save(){
    if(this.helpWantedFormGroup.valid){
      var help: Help = {
        title:  this.helpWantedFormGroup.get('title')?.value,
        detailsHtml: this.helpWantedFormGroup.get('detailsHtml')?.value,
        campaignId: this.helpWantedFormGroup.get('campaignId')?.value
      }

      this.Help.push(help);
      this.helpWantedFormGroup.reset();
    } else {
      this.Validate = true;
    }
  }

  edit(index: number){
    var help = this.Help[index];

    this.helpWantedFormGroup = this.fb.group({
      title: [help.title, Validators.required],
      detailsHtml: [help.detailsHtml, Validators.required],
      campaignId: [help.campaignId]
    });

    this.Help.splice(index);
  }
}
