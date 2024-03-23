import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"update/:id",
    component:AddArtistComponent
  },
  {
    path:"add-artist",
    component:AddArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
