import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-ag-manicure',
  templateUrl: './nova-ag-manicure.component.html',
  styleUrls: ['./nova-ag-manicure.component.css']
})
export class NovaAgManicureComponent implements OnInit {

	cliente = [
		{value: '1', viewValue:'Leonardo Ozelin de Miranda'},
		{value: '2', viewValue:'Antônio Correia Araujo'},
		{value: '3', viewValue:'Gabrielly Cunha Gomes'},
		{value: '4', viewValue:'Maria Goncalves Cunha'},
		{value: '5', viewValue:' Yasmin Cunha Silva'},
	];

	servico = [
		{value: '1', viewValue:'Corte Mao', valor:10.00},
		{value: '2', viewValue:'Corte Pé', valor:11.50},
		{value: '3', viewValue:'Pé e Mão', valor:12.00},
		{value: '4', viewValue:'Completo', valor:13.00},
		{value: '5', viewValue:'Francesinha', valor:14.00},
		{value: '6', viewValue:'Somente Esmalte', valor:15.00},
	]

  constructor() { }

  ngOnInit() {
  }


  ValorTotal: any;
}
