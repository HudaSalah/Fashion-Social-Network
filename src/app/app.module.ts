import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //for service
import { RouterModule, Routes } from '@angular/router';

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
import { ItemPageComponent } from './item-page/item-page.component';


//for routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Gallery', component: MenCatComponent },
  { path: 'ModelProfile', component: ModelProfileComponent },
  { path: 'ItemPage', component: ItemPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WomenCatComponent,
    MenCatComponent,
    FigureModelComponent,
    ModelProfileComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
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
