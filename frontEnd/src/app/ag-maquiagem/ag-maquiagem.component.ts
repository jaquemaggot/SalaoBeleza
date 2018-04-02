import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MaquiagemService, Dados } from './../services/maquiagem.service';
import { forEach } from '@angular/router/src/utils/collection';
 
@Component({
  selector: 'app-ag-maquiagem',
  templateUrl: './ag-maquiagem.component.html',
  styleUrls: ['./ag-maquiagem.component.css']
})

export class AgMaquiagemComponent implements OnInit {

ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
  {position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
  {position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
];

servico: any;
displayedColumns
dataSource

valor: any;

  constructor(private maquiagem: MaquiagemService) { }

  ngOnInit() {
    this.listar();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  listar(){
    this.maquiagem.listaTodos().subscribe(data=>{
      this.servico = data;
      this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
      this.dataSource = new MatTableDataSource(this.servico);
    })
  }
  listarTabela(){
  }

}

export interface Element {
  name: string;
  position: number;
  weight: any;
}

