import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator,MatTableDataSource, MatSort } from '@angular/material';

import { User } from '@app/user/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements AfterViewInit {
  
  displayedColumns = ['id', 'userName', 'email', 'cellPhone', 'actions'];
  ELEMENT_DATA: User[] = [
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
  constructor() { }

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
