import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {

  constructor() { }

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
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

var ELEMENT_DATA: Element[] = [
  {position: 1, name:  'Leonardo Ozelin de Miranda', weight: 25477865498, symbol: 'H'},
  {position: 2, name:  'Antônio Correia Araujo ', weight: 41185798633, symbol: 'He'},
  {position: 3, name:  'Gabrielly Cunha Gomes', weight: 17341679042, symbol: 'Li'},
  {position: 4, name:  'Maria Goncalves Cunha', weight: 72257253515, symbol: 'Be'},
  {position: 5, name:  'Yasmin Cunha Silva', weight: 69626000899, symbol: 'B'},
];