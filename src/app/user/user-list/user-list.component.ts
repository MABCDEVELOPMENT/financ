import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator,MatTableDataSource, MatSort, MatDialog } from '@angular/material';

import { User } from '@app/user/user-model';
import { UserAddDialogComponent } from '@app/user/user-add/user-add.component';
import { window } from 'rxjs/operators';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { UserEditDialogComponent } from '@app/user/user-edit/user-edit.component';
import { I18nService } from '@app/core';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})



export class UserListComponent implements AfterViewInit {
  
  displayedColumns = ['id', 'userName', 'email', 'cellPhone', 'actions'];
  ELEMENT_DATA: User[] = [
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('10/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null),
    new User(1,  'Afred', 'ALESSANDRO FRED A DE SOUZA', 'fredalessandro@gmail.com', '81984147601', new Date('27/10/1971'), 'idkfa',true, null, new Date(),null,null),
    new User(2,  'Mary', 'JOZE MARY OLIVEIRA MASCARENHAS', 'marymascarenhas86@gmail.com', '81988186507', new Date('22/02/1989'), '100422',true, null, new Date(),null,null)
  ];
  constructor( public dialog: MatDialog,
               public i18nService: I18nService) { 

  }


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addNew(user: User) {
    const dialogRef = this.dialog.open(UserAddDialogComponent, {data: {user: User}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        // this.dataSource.dataChange.value.push(this.dataService.getDialogData());
        //this.refreshTable();
      }
    });
  }

  startEdit(i: number) {
    let userEdit = this.ELEMENT_DATA[i];
    console.log(JSON.stringify(userEdit));
    const dialogRef = this.dialog.open(UserEditDialogComponent, {data:userEdit 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        // this.dataSource.dataChange.value.push(this.dataService.getDialogData());
        //this.refreshTable();
      }
    });
  }

  deleteItem(i: number, id: number, title: string, state: string, url: string) {
    
  }


 
  public loadData() {
    
  }

}
