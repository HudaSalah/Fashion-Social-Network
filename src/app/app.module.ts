import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // ng bootstrap
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee , faTimes , faBars} from '@fortawesome/free-solid-svg-icons';

//new component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WomenCatComponent } from './home/women-cat/women-cat.component';
import { MenCatComponent } from './home/men-cat/men-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WomenCatComponent,
    MenCatComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCoffee, faTimes , faBars);
  }
 }
