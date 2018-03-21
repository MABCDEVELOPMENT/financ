import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { UserAddDialogComponent } from './user-add/user-add.component';
import { UserService } from '@app/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    UserRoutingModule
  ],
  exports:[UserListComponent],
  entryComponents: [
    UserAddDialogComponent],
  declarations: [UserListComponent, UserAddDialogComponent],
  providers:[UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
