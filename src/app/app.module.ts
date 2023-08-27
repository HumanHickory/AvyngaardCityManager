import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ColorPickerModule } from 'primeng/colorpicker';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralComponent } from './Views/general/general.component';
import { CityService } from './Services/Cities/CityService';
import { ColorSchemeComponent } from './Views/color-scheme/color-scheme.component';
import { NewsComponent } from './Views/news/news.component';
import { HelpWantedComponent } from './Views/help-wanted/help-wanted.component';
import { GovernmentComponent } from './Views/government/government.component';
import { SideNavComponent } from './Views/nav/side-nav/side-nav.component';
import { NavBarComponent } from './Views/nav/nav-bar/nav-bar.component';
import { PageBreakComponent } from './Views/Shared/page-break/page-break.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    ColorSchemeComponent,
    NewsComponent,
    HelpWantedComponent,
    GovernmentComponent,
    SideNavComponent,
    NavBarComponent,
    PageBreakComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    AccordionModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    EditorModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
