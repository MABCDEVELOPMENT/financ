import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { User } from '@app/user/user-model';
import { I18nService, extract } from '@app/core';
import { EmailValidator,CustomValidator } from '@app/shared/validators';
import { DateValidator } from '@app/shared/validators/data.validator';



@Component({
  selector: 'app-add.dialog',
  templateUrl: './user-add.component.html'
})

export class UserAddDialogComponent implements OnInit {
  hide:any;
  hideConf:any;
  confirmPassword:string;
  
  form: FormGroup;

  public  mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  

  constructor(public dialogRef: MatDialogRef<UserAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public dataService: UserService,
              public i18n: I18nService) {
                  
  }
  
  ngOnInit() {
      this.form  = new FormGroup({
        fullName:  new FormControl('', [Validators.required]),
        userName:  new FormControl('', [Validators.required]),
        dateBrith: new FormControl('', [Validators.required,DateValidator.validDate]),
        email:     new FormControl('', [Validators.required,Validators.email]
      )
    });
  }

  getErrorMessage() {
    return this.form.controls.email.hasError('required') ? 'fieldEmpty' :
           this.form.controls.email.hasError('email') ? 'invalidEmail' :
           this.form.controls.dateBrith.hasError('required') ? 'fieldEmpty' :
           this.form.controls.dateBrith.hasError('date') ? 'invalidDate' :
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