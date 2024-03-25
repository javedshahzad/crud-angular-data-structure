import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { InformationComponent } from './components/information/information.component';
import { HelpComponent } from './components/help/help.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddArtistComponent,
    InformationComponent,
    HelpComponent,
    PrivacyComponent,
    ErrorHandlingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
