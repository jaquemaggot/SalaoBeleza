import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material'

@Component({
	selector: 'app-corte-dia',
	templateUrl: './corte-dia.component.html',
	styleUrls: ['./corte-dia.component.css']
})
export class CorteDiaComponent implements OnInit {

	ELEMENT_DATA: Element[] = [
	{position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
	{position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
	{position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
	];


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