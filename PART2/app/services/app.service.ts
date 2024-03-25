import { Injectable } from '@angular/core';
import { Artist } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ArtistArray:Artist[]=[];

  constructor() {
    let artistDummy:Artist= {
      artist_ID:"1",
      name:"Johan walker",
      DOB:String(new Date("11/10/1996")),
      gender:"Male",
      artwork_type:"Painting",
      contact_info:"123456789",
      exibition_date:String(new Date()),
      special_note:"He is a good Artist.",
      updatedAt:String(new Date()),
      createdAt:String(new Date()),
    }
    this.AddArtist(artistDummy)
  }

  AddArtist(artitst:Artist){
    this.ArtistArray.push(artitst);
  }
  getArtists(){
    return this.ArtistArray;
  }
  deleteArtist(artitst:Artist){
    var id = artitst.artist_ID;
    console.log(id)
  for(var i = 0; i < this.ArtistArray.length; i++) {
      if(this.ArtistArray[i].artist_ID == id) {
        this.ArtistArray.splice(i, 1);
          break;
      }
  }
  }

  UpdatedArtist(artitst:Artist) {
    const objIndex = this.ArtistArray.findIndex((obj:any) => obj.artist_ID == artitst.artist_ID);
    console.log(objIndex)
    if (objIndex === -1) {
        return;
    }      
        var updatedObj = {
            ...this.ArtistArray[objIndex],
            artist_ID:artitst.artist_ID ,
            name:artitst.name,
            DOB:artitst.DOB,
            gender:artitst.gender ,
            artwork_type:artitst.artwork_type ,
            contact_info:artitst.contact_info,
            exibition_date:artitst.exibition_date ,
            special_note:artitst.special_note,
            createdAt:String(new Date()),
            updatedAt: String(new Date()),
        };
 
    const UpdatedArray = [
        ...this.ArtistArray.slice(0, objIndex),
        updatedObj,
        ...this.ArtistArray.slice(objIndex + 1),
    ];
    this.ArtistArray = UpdatedArray;
    console.log(this.ArtistArray,UpdatedArray)
}
}


