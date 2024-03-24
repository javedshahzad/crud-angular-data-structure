import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Artist } from 'src/app/services/models';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {
  public ArtistForm:any=FormGroup;
  id: any='';
  constructor(
    private formbuilder: FormBuilder,
    private toastMsg:ToastMessageService,
    private router:Router,
    private AppSr:AppService,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id'] ? params['id'] : "";
      console.log(this.id)
    })
  }
  ngOnInit(): void {
    this.ArtistForm = this.formbuilder.group({
      artist_ID: ['', Validators.required],
      name: ['', Validators.required],
      DOB: ['', Validators.required],
      gender: ['', Validators.required],
      artwork_type: ["", Validators.required],
      contact_info: ["", Validators.required],
      exibition_date: ["", Validators.required],
      special_note: ["", []],
  });
  if(this.id){
    let checkId = this.AppSr.getArtists()?.filter((d:any)=> d.artist_ID == this.id);
    let artistData = checkId[0]
    this.ArtistForm.get('artist_ID').setValue(artistData['artist_ID']);
    this.ArtistForm.get('name').setValue(artistData['name']);
    this.ArtistForm.get('DOB').setValue(artistData['DOB']);
    this.ArtistForm.get('gender').setValue(artistData['gender']);
    this.ArtistForm.get('artwork_type').setValue(artistData['artwork_type']);
    this.ArtistForm.get('contact_info').setValue(artistData['contact_info']);
    this.ArtistForm.get('exibition_date').setValue(artistData['exibition_date']);
    this.ArtistForm.get('special_note').setValue(artistData['special_note']);
    this.ArtistForm.controls["artist_ID"].disable();
  }
  }
  AddArtist(){
    console.log(this.ArtistForm.value)
    if(this.ArtistForm.valid){
      const artist:Artist = {
        artist_ID:this.id ? this.id : this.ArtistForm.value.artist_ID,
        name:this.ArtistForm.value.name,
        DOB:this.ArtistForm.value.DOB,
        gender:this.ArtistForm.value.gender,
        artwork_type:this.ArtistForm.value.artwork_type,
        contact_info:this.ArtistForm.value.contact_info,
        exibition_date:this.ArtistForm.value.exibition_date,
        special_note:this.ArtistForm.value.special_note,
        createdAt:String(new Date()),
        updatedAt:String(new Date()),
      }
      if(this.id){
        this.AppSr.UpdatedArtist(artist);
        this.toastMsg.SuccessMessage("Artist has been Updated successfully!","Artist Updated");
        this.router.navigate(["/"])
      }else{
        let checkId = this.AppSr.getArtists()?.filter((d:any)=> d.artist_ID == artist.artist_ID);
        if(checkId?.length > 0){
          this.toastMsg.ErrorMessage("This artist ID already exists. Please try another ID.","ID already exists");
        }else{
          this.AppSr.AddArtist(artist);
          this.toastMsg.SuccessMessage("Artist has been added successfully!","Artist Added");
          this.router.navigate(["/"])
        }
      }
    }else{
      this.toastMsg.ErrorMessage("Please enter all details","Error Accur");
    }
  }
}
