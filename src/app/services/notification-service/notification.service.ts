import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }

  showToastr(message: string | undefined) {
    this.toastr.success(message)
  }

  showError(message: string | undefined) {
    this.toastr.error(message)
  }
}
