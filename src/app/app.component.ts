import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'City Manager';
  validate = false;
  CityName = '';

  handleNameUpdated(updatedName: string) {
    this.CityName = updatedName;
  }  
  
}
