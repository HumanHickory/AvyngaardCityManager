import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from 'src/app/Models/Campaign';
import { News } from 'src/app/Models/News';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  Validate: boolean = false;
  cityNewsForm: FormGroup;
  NewsStories: News[] = [];
  Campaigns: Campaign[] = [];

  constructor(private fb: FormBuilder, private cityService: CityService) {
    this.cityNewsForm = this.fb.group({
      title: ['', Validators.required],
      source: ['', Validators.required], 
      author: ['', Validators.required], 
      storyHtml: ['', Validators.required],
      campaignId: [undefined]
    });

    this.cityService.ListCampaigns().subscribe({
      next: (campaigns) => this.Campaigns = campaigns,
      error: (e) => console.error('Error Retrieving Campaigns:', e)
    })
  }

  remove(index: number){
    this.NewsStories.splice(index);
  }

  save(){
    if(this.cityNewsForm.valid){
      var newsStory: News = {
        title: this.cityNewsForm.get('title')?.value,
        source: this.cityNewsForm.get('source')?.value,
        author: this.cityNewsForm.get('author')?.value,
        storyHtml: this.cityNewsForm.get('storyHtml')?.value,
        campaignId: this.cityNewsForm.get('campaignId')?.value
      }

      this.NewsStories.push(newsStory);
      this.cityNewsForm.reset();
    } else {
      this.Validate = true;
    }
  }

  edit(index: number){
    var news = this.NewsStories[index];

    this.cityNewsForm = this.fb.group({
      title: [news.title, Validators.required],
      source: [news.source, Validators.required], 
      author: [news.author, Validators.required], 
      storyHtml: [news.storyHtml, Validators.required],
      campaignId: [news.campaignId]
    });

    this.NewsStories.splice(index);
  }


}
