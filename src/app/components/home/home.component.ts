
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Artist } from 'src/app/services/models';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Cars: any=[];
  Currentdate=new Date();
  Artists: any=[];
  ArtistSearch:any=[];
  constructor(
    private toaster:ToastMessageService,
    private router:Router,
    private AppSr:AppService,
  ) {
    console.log(this.AppSr.getArtists())
    this.Artists = this.AppSr.getArtists();
    this.ArtistSearch = this.AppSr.getArtists();
   }

  ngOnInit(): void {
  }
  delete(artist:Artist){
    if (confirm("Do you want to delete this artist!")) {
      console.log("Accepted")
      this.AppSr.deleteArtist(artist)
    } else {
      console.log("Declined")
    }
  }
  goToUpdate(artist:Artist){
    var car=JSON.stringify(artist);
    this.router.navigate(["/update/"+artist.artist_ID ])
  }

  Search(eve:any) {
    const str = eve.target.value;
    console.log(str)
    if (str) {
        let arrdata = this.ArtistSearch;
        let x = arrdata.filter((a:any) => a.artist_ID.toUpperCase().includes(str.toUpperCase()));
        this.Artists = x;
    } else {
        this.Artists = this.ArtistSearch;
    }
}
}
