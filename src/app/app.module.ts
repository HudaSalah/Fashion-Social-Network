import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //for service


import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // ng bootstrap
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee , faTimes , faBars , faMapMarkerAlt , faPhone , faEnvelope ,faWindowMinimize,faArrowRight, faPlus, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

//new component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WomenCatComponent } from './home/women-cat/women-cat.component';
import { MenCatComponent } from './home/men-cat/men-cat.component';
import { FigureModelComponent } from './figure-model/figure-model.component';
import { GetModelDataService } from './get-model-data.service';
import { ModelProfileComponent } from './model-profile/model-profile.component'; //for import my service

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WomenCatComponent,
    MenCatComponent,
    FigureModelComponent,
    ModelProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    AngularFontAwesomeModule
  ],
  providers: [GetModelDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCoffee,faPlus,faPlusCircle, faTimes , faBars, faMapMarkerAlt , faPhone , faEnvelope,faWindowMinimize,faArrowRight,faPlus,faPlusCircle);
  }
 }
