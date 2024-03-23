import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  MsgOpt:any={
    timeOut: 3000,
    closeButton:true,
    positionClass:"toast-top-center",
    progressBar:true
  }
    constructor(private toastr: ToastrService) { }
     
  SuccessMessage(message: string | undefined, title: string | undefined){
      this.toastr.success(message, title,this.MsgOpt)
  }
  
  ErrorMessage(message: string | undefined, title: string | undefined){
      this.toastr.warning(message, title,this.MsgOpt)
  }
}
