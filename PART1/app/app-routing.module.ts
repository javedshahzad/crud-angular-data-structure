import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { HelpComponent } from './components/help/help.component';
import { InformationComponent } from './components/information/information.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"add-artist",
    component:AddArtistComponent
  },
  {
    path:"update/:id",
    component:AddArtistComponent
  },
  {
    path:"error-handle",
    component:ErrorHandlingComponent
  },
  {
    path:"help",
    component:HelpComponent
  },
  {
    path:"information",
    component:InformationComponent
  },
  {
    path:"privacy",
    component:PrivacyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
