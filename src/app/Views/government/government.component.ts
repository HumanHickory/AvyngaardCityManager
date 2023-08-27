import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from 'src/app/Models/Campaign';
import { Government } from 'src/app/Models/Government';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.scss']
})
export class GovernmentComponent {
  @Input() Validate: boolean = false;

  governmentForm: FormGroup;

  Campaigns: Campaign[] = [];
  Governments: Government[] = [];

  constructor(private fb: FormBuilder, private cityService: CityService){
    this.governmentForm = this.fb.group({
      title: ['', Validators.required],
      descriptionHtml: ['', Validators.required],
      campaignId: [undefined]
    });

    this.cityService.ListCampaigns().subscribe({
      next: (campaigns) => this.Campaigns = campaigns,
      error: (e) => console.error('Error Retrieving Campaigns:', e)
    })
  }
  remove(index: number){
    this.Governments.splice(index);
  }

  save(){
    if(this.governmentForm.valid){
      var gov: Government = {
        title:  this.governmentForm.get('title')?.value,
        descriptionHtml: this.governmentForm.get('descriptionHtml')?.value,
        campaignId: this.governmentForm.get('campaignId')?.value
      }

      this.Governments.push(gov);
      this.governmentForm.reset();
    } else {
      this.Validate = true;
    }
  }

  edit(index: number){
    var governemnt = this.Governments[index];

    this.governmentForm = this.fb.group({
      title: [governemnt.title, Validators.required],
      descriptionHtml: [governemnt.descriptionHtml, Validators.required],
      campaignId: [governemnt.campaignId]
    });

    this.Governments.splice(index);

  }

  manageCampaigns(){
    //if the first campaign added has a null campaign id, then save button is disabled.
    //if the first campaign added has a campaign id, then all other govs must have a campaign id, and it cannot be the same as the others
  }

}
