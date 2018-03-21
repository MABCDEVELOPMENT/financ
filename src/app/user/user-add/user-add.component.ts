import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserService} from '../../user/user.service';
import {FormControl, Validators} from '@angular/forms';

import { User } from '@app/user/user-model';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './user-add.component.html'
})

export class UserAddDialogComponent {
  
  confirmPassword:string;

  constructor(public dialogRef: MatDialogRef<UserAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userName:string,fullName:string,dateBrith:Date,email:string,password:string,confirmPassword:string},
              public dataService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
    //Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      //this.formControl.hasError('email') ? 'Not a valid email' :
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