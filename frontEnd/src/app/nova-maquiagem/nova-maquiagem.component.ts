import { Component, OnInit } from '@angular/core';
import { Mask } from './../teste/teste.component';


@Component({
	selector: 'app-nova-maquiagem',
	templateUrl: './nova-maquiagem.component.html',
	styleUrls: ['./nova-maquiagem.component.css']
})
export class NovaMaquiagemComponent implements OnInit {
	ValorTotal: any;

	cliente = [
		{ value: '1', viewValue: 'Leonardo Ozelin de Miranda' },
		{ value: '2', viewValue: 'Antônio Correia Araujo' },
		{ value: '3', viewValue: 'Gabrielly Cunha Gomes' },
		{ value: '4', viewValue: 'Maria Goncalves Cunha' },
		{ value: '5', viewValue: ' Yasmin Cunha Silva' },
	];

	servico = [
		{ value: '1', viewValue: 'Olho Preto Esfumado', valor: 10.00 },
		{ value: '2', viewValue: 'Maquiagem Colorida', valor: 11.50 },
		{ value: '3', viewValue: 'Delineado Gatinho', valor: 12.00 },
		{ value: '4', viewValue: 'Olho Tudo Boca Nada', valor: 13.00 },
		{ value: '5', viewValue: 'Maquiagem Neutra', valor: 14.00 },
		{ value: '6', viewValue: 'Olho Tudo Boca Tudo', valor: 15.00 },
		{ value: '7', viewValue: 'Maquiagem Discreta', valor: 16.00 },
		{ value: '8', viewValue: 'Maquiagem Bronzeadora', valor: 17.00 },
	];

	constructor(private mask: Mask) { }

	ngOnInit() {
	}

	aperta(event) {
		//var mask = Mask();

		this.mask.hora('hr', event);
	}

}

