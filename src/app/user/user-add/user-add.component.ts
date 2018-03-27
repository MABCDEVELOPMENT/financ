import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {UserService} from '../../user/user.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '@app/user/user-model';
import { I18nService, extract } from '@app/core';
import { EmailValidator,CustomValidator } from '@app/shared/validators';



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
              
  dateBrith = new FormControl('', [
    Validators.required,
    CustomValidator.dateValidator
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'fieldEmpty' :
           EmailValidator.isValidMailFormat(this.formControl['user.email']) ? extract('invalidEmail') :
           CustomValidator.dateValidator(this.formControl['user.dateBrith']) ? extract('invalidDate') :
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