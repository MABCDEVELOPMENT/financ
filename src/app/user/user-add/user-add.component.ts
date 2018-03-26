import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserService} from '../../user/user.service';
import {FormControl, Validators} from '@angular/forms';



import { User } from '@app/user/user-model';
import { I18nService } from '@app/core';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './user-add.component.html'
})

export class UserAddDialogComponent {
  hide:any;
  hideConf:any;
  confirmPassword:string;
  
  public  mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  

  constructor(public dialogRef: MatDialogRef<UserAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public dataService: UserService,
              public i18n: I18nService) {
                  
               }
              
  formControl = new FormControl('', [
    Validators.required
    //Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
           this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {

    //this.dataService.addUser(this.data);
  }
}