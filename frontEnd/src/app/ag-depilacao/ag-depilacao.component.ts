import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-ag-depilacao',
  templateUrl: './ag-depilacao.component.html',
  styleUrls: ['./ag-depilacao.component.css']
})
export class AgDepilacaoComponent implements OnInit {

LEMENT_DATA: Element[] = [
  {position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
  {position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
  {position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
export class TableFilteringExample {

}

export interface Element {
  name: string;
  position: number;
  weight: any;
}

var ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
  {position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
  {position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
];