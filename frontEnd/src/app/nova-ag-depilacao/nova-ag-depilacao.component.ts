import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-ag-depilacao',
  templateUrl: './nova-ag-depilacao.component.html',
  styleUrls: ['./nova-ag-depilacao.component.css']
})
export class NovaAgDepilacaoComponent implements OnInit {

	cliente = [
		{value: '1', viewValue:'Leonardo Ozelin de Miranda'},
		{value: '2', viewValue:'Antônio Correia Araujo'},
		{value: '3', viewValue:'Gabrielly Cunha Gomes'},
		{value: '4', viewValue:'Maria Goncalves Cunha'},
		{value: '5', viewValue:' Yasmin Cunha Silva'},
	];

	servico = [
		{value: '1', viewValue:'Completa Cera', valor:10.00},
		{value: '2', viewValue:'Virilha', valor:11.50},
		{value: '3', viewValue:'Bulso', valor:12.00},
		{value: '4', viewValue:'Anal', valor:13.00},
		{value: '5', viewValue:'Bracos e Pernas', valor:14.00},
		{value: '6', viewValue:'Completa Laser', valor:15.00},
		{value: '7', viewValue:'Completa Linha', valor:16.00},

	]

  constructor() { }

  ngOnInit() {
  }


  ValorTotal: any;
}
