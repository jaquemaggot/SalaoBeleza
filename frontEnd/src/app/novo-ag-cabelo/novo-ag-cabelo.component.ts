import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-novo-ag-cabelo',
	templateUrl: './novo-ag-cabelo.component.html',
	styleUrls: ['./novo-ag-cabelo.component.css']
})
export class NovoAgCabeloComponent implements OnInit {

	cliente = [
		{value: '1', viewValue:'Leonardo Ozelin de Miranda'},
		{value: '2', viewValue:'Antônio Correia Araujo'},
		{value: '3', viewValue:'Gabrielly Cunha Gomes'},
		{value: '4', viewValue:'Maria Goncalves Cunha'},
		{value: '5', viewValue:' Yasmin Cunha Silva'},
	];

	servico = [
		{value: '1', viewValue:'Corte Simples', valor:10.00},
		{value: '2', viewValue:'Plastica e Corte', valor:11.50},
		{value: '3', viewValue:'Escova', valor:12.00},
		{value: '4', viewValue:'Luzes', valor:13.00},
		{value: '5', viewValue:'Aplique', valor:14.00},
		{value: '6', viewValue:'Selante', valor:15.00},
		{value: '7', viewValue:'Raspado', valor:16.00},
		{value: '8', viewValue:'Cabelo e Barba', valor:17.00},
	]

    ValorTotal: any;			

	constructor() { }

	ngOnInit() {
	}



}
