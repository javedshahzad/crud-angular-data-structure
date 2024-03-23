import { Injectable } from '@angular/core';
import { Artist } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ArtistArray:any=[];

  constructor() {}

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


